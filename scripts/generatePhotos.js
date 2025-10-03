import fs from 'fs'
import path from 'path'
import { v2 as cloudinary } from 'cloudinary'
import { config } from 'dotenv'

// Load environment variables from .env.local
config({ path: '.env.local' })

// Configure Cloudinary
cloudinary.config({
    cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

const OUTPUT = path.resolve('./src/data/photos.ts')

// Helper: convert flat album map to nested structure
function buildNestedStructure(albumMap) {
    const albums = []
    const processed = new Set()

    // First, create parent folders that don't exist but are needed
    const allPaths = Array.from(albumMap.keys())
    const parentsToAdd = new Set()

    allPaths.forEach((path) => {
        const parts = path.split('/')
        // Create all parent paths
        for (let i = 1; i < parts.length; i++) {
            const parentPath = parts.slice(0, i).join('/')
            if (!albumMap.has(parentPath)) {
                parentsToAdd.add(parentPath)
            }
        }
    })

    // Add missing parent folders with empty photos
    parentsToAdd.forEach((parentPath) => {
        albumMap.set(parentPath, {
            photos: [],
            subAlbums: new Map()
        })
    })

    // Sort albums by depth (shallow first)
    const sortedAlbums = Array.from(albumMap.keys()).sort((a, b) => {
        return a.split('/').length - b.split('/').length
    })

    for (const albumPath of sortedAlbums) {
        if (processed.has(albumPath)) continue

        const parts = albumPath.split('/')
        const albumName = parts[parts.length - 1]
        const albumData = albumMap.get(albumPath)

        // Find direct sub-albums
        const subAlbums = []

        for (const [otherPath, otherData] of albumMap) {
            if (otherPath === albumPath) continue

            // Check if otherPath is a direct child of albumPath
            const otherParts = otherPath.split('/')
            if (otherParts.length === parts.length + 1 && otherPath.startsWith(albumPath + '/')) {
                const childName = otherParts[otherParts.length - 1]
                subAlbums.push({
                    album: childName,
                    photos: otherData.photos,
                    sub_album: [] // For now, only 2 levels deep
                })
                processed.add(otherPath)
            }
        }

        // Only add to root albums if this is a top-level folder (no slashes)
        if (!albumPath.includes('/')) {
            albums.push({
                album: albumName,
                photos: albumData.photos,
                sub_album: subAlbums
            })
        }

        processed.add(albumPath)
    }

    return albums
}

async function getAllResourcesSimple() {
    try {
        // Get ALL resources first
        const allResources = await cloudinary.api.resources({
            type: 'upload',
            max_results: 1000 // Adjust as needed
        })

        console.log(`Found ${allResources.resources.length} total resources`)

        // Group by folder from public_id
        const folderMap = new Map()

        allResources.resources.forEach((resource) => {
            console.log(`Processing: ${resource.public_id}`)

            console.log('resource', resource)

            // Extract folder from public_id
            const parts = resource.asset_folder.split('/')
            if (parts.length > 1 && parts[0] === 'photography') {
                // Remove 'photography' prefix
                const folderParts = parts.slice(1, parts.length) // Everything except first and last
                const folderPath = folderParts.join('/') || 'root'

                console.log(` - folderParts: ${folderParts}`)

                if (!folderMap.has(folderPath)) {
                    folderMap.set(folderPath, [])
                }
                folderMap.get(folderPath).push(resource)
            }
        })

        console.log('Folders found:', Array.from(folderMap.keys()))
        return folderMap
    } catch (error) {
        console.error('Error getting resources:', error)
        return new Map()
    }
}

// Update main function
async function main() {
    console.log('🔍 Scanning Cloudinary albums...')

    try {
        // Use simple approach
        const folderMap = await getAllResourcesSimple()

        // Convert to your album structure
        const albumMap = new Map()
        for (const [folderPath, resources] of folderMap) {
            albumMap.set(folderPath, {
                photos: resources.map((resource) => ({
                    src: resource.public_id,
                    width: resource.width,
                    height: resource.height,
                    format: resource.format
                })),
                subAlbums: new Map()
            })
        }

        const albums = buildNestedStructure(albumMap)

        // Generate TypeScript output
        const tsContent = `// Auto-generated from Cloudinary
        // Run 'node scripts/generatePhotos.js' to regenerate

        export const photos = ${JSON.stringify(albums, null, 2)}`

        fs.writeFileSync(OUTPUT, tsContent)
        console.log(`✅ Photos data written to ${OUTPUT}`)
        console.log(`📊 Generated ${albums.length} albums`)

        // Log album summary
        albums.forEach((album) => {
            console.log(
                `   📁 ${album.album}: ${album.photos.length} photos, ${album.sub_album?.length || 0} sub-albums`
            )
        })
    } catch (error) {
        console.error('❌ Error generating photos:', error)
    }
}

main()
