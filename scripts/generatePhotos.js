import fs from 'fs'
import path from 'path'
import sharp from 'sharp'

const ROOT = path.resolve('./public/images/photography')
const OUTPUT = path.resolve('./src/data/photos.ts')

// Helper: check if path is a directory
const isDirectory = (source) => fs.lstatSync(source).isDirectory()

// Helper: recursively build album data
async function buildAlbum(dir, baseUrl = '/images/photography') {
    const entries = fs.readdirSync(dir)

    // Collect photos and sub-albums separately
    const photos = []
    const subAlbums = []

    for (const entry of entries) {
        const fullPath = path.join(dir, entry)
        const urlPath = path.join(baseUrl, path.basename(dir), entry).replace(/\\/g, '/')

        if (isDirectory(fullPath)) {
            // Recursively build nested album
            const subAlbum = await buildAlbum(fullPath, path.join(baseUrl, path.basename(dir)))
            subAlbums.push({
                album: entry,
                ...subAlbum
            })
        } else if (/\.(jpe?g|png|webp|avif)$/i.test(entry)) {
            // Get metadata for photo
            const { width, height } = await sharp(fullPath).metadata()
            photos.push({
                src: urlPath,
                width,
                height
            })
        }
    }

    return { photos, sub_album: subAlbums }
}

async function main() {
    console.log('🔍 Scanning albums in:', ROOT)

    const entries = fs.readdirSync(ROOT).filter((f) => isDirectory(path.join(ROOT, f)))

    const albums = []
    for (const album of entries) {
        const albumPath = path.join(ROOT, album)
        const albumData = await buildAlbum(albumPath, '/images/photography')
        albums.push({
            album,
            ...albumData
        })
    }

    fs.writeFileSync(OUTPUT, `export const photos = ${JSON.stringify(albums, null, 2)}`)
    console.log(`✅ Photos data written to ${OUTPUT}`)
}

main().catch((err) => console.error('❌ Error generating photos:', err))
