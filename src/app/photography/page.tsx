'use client'

import { useEffect, useState } from 'react'
import MobileMenu from '@/components/MobileMenu'
import Section from '@/components/Section'
import 'yet-another-react-lightbox/styles.css'
import Lightbox from 'yet-another-react-lightbox'
import InfiniteScroll from 'react-photo-album/scroll'
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen'
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow'
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails'
import Zoom from 'yet-another-react-lightbox/plugins/zoom'
import 'yet-another-react-lightbox/plugins/thumbnails.css'
import { ColumnsPhotoAlbum, Photo } from 'react-photo-album'
import 'react-photo-album/columns.css'
import { getCloudinaryUrl } from '@/lib/cloudinary'

import { photos as albums } from '@/data/photos'

export default function PhotographyPage() {
    const [lightboxIndex, setLightboxIndex] = useState(-1)
    const [photos, setPhotos] = useState<Photo[]>([])
    const [page, setPage] = useState(1)

    type CloudinaryPhoto = { src: string; width: number; height: number }
    type Album = {
        album: string
        photos: CloudinaryPhoto[]
        sub_album?: Album[]
    }

    function flattenPhotos(albums: Album[]): CloudinaryPhoto[] {
        let result: CloudinaryPhoto[] = []
        for (const album of albums) {
            if (album.photos && album.photos.length) {
                result = result.concat(album.photos)
            }
            if (album.sub_album && album.sub_album.length) {
                result = result.concat(flattenPhotos(album.sub_album))
            }
        }
        return result
    }

    // Convert Cloudinary photos to optimized Photo album format
    function getOptimizedPhotos(photos: CloudinaryPhoto[]): Photo[] {
        return photos.map((photo) => ({
            src: getCloudinaryUrl(photo.src, 1200), // Main image for gallery
            width: photo.width,
            height: photo.height,
            srcSet: [
                {
                    src: getCloudinaryUrl(photo.src, 400),
                    width: 400,
                    height: Math.round((photo.height * 400) / photo.width)
                },
                {
                    src: getCloudinaryUrl(photo.src, 800),
                    width: 800,
                    height: Math.round((photo.height * 800) / photo.width)
                },
                {
                    src: getCloudinaryUrl(photo.src, 1200),
                    width: 1200,
                    height: Math.round((photo.height * 1200) / photo.width)
                },
                {
                    src: getCloudinaryUrl(photo.src, 1600),
                    width: 1600,
                    height: Math.round((photo.height * 1600) / photo.width)
                }
            ]
        }))
    }

    // Flatten all photos from albums (safe default)
    const allPhotos = albums ? flattenPhotos(albums) : []

    // Page size logic: first page 10, then 20, then 20, etc.
    const getPageSize = (page: number) => (page === 1 ? 10 : 20)

    const fetchPhotos = async (): Promise<Photo[] | null> => {
        const size = getPageSize(page)
        const start = photos.length
        const nextCloudinaryPhotos = allPhotos.slice(start, start + size)
        const nextOptimizedPhotos = getOptimizedPhotos(nextCloudinaryPhotos)

        setPhotos((prevPhotos) => [...prevPhotos, ...nextOptimizedPhotos])
        setPage((prevPage) => prevPage + 1)
        return nextOptimizedPhotos.length ? nextOptimizedPhotos : null
    }

    // useEffect runs regardless - but only fetches if we have photos
    useEffect(() => {
        if (albums && albums.length > 0) {
            fetchPhotos() // Initial load only if we have data
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // Early return AFTER hooks
    if (!albums || albums.length === 0) {
        return (
            <div className='flex items-center justify-center min-h-screen'>
                <p>No photos available. Please generate photos data.</p>
            </div>
        )
    }

    // Create lightbox slides with high-res images
    const lightboxSlides = photos.map((photo) => ({
        src: getCloudinaryUrl(
            // Extract public_id from the optimized src
            photo.src.split('/').pop()?.split('?')[0] || photo.src,
            2000 // High resolution for lightbox
        ),
        width: photo.width,
        height: photo.height
    }))

    return (
        <>
            <main>
                <Section id='home' className='invisible h-0'>
                    &nbsp;
                </Section>
                <div className='bg-foreground py-24'>
                    <div className='grid gap-5 px-5'>
                        <InfiniteScroll
                            fetch={fetchPhotos}
                            onClick={({ index }) => setLightboxIndex(index)}>
                            <ColumnsPhotoAlbum photos={photos} columns={4} />
                        </InfiniteScroll>

                        <Lightbox
                            slides={lightboxSlides}
                            open={lightboxIndex >= 0}
                            index={lightboxIndex}
                            close={() => setLightboxIndex(-1)}
                            plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
                        />
                    </div>
                </div>
            </main>
            <MobileMenu />
        </>
    )
}
