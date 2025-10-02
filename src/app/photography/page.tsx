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
import { RowsPhotoAlbum } from 'react-photo-album'
import 'react-photo-album/rows.css'

import { photos as albums } from '@/data/photos'

export default function PhotographyPage() {
    const [lightboxIndex, setLightboxIndex] = useState(-1)
    const [photos, setPhotos] = useState<Photo[]>([])
    const [page, setPage] = useState(1)

    type Photo = { src: string; width: number; height: number }
    type Album = {
        album: string
        photos: Photo[]
        sub_album?: Album[]
    }

    function flattenPhotos(albums: Album[]): Photo[] {
        let result: Photo[] = []
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
    // Flatten all photos from albums
    const allPhotos = flattenPhotos(albums)

    // Page size logic: first page 10, then 20, then 20, etc.
    const getPageSize = (page: number) => (page === 1 ? 0 : 20)

    const fetchPhotos = async (): Promise<typeof allPhotos | null> => {
        const size = getPageSize(page)
        const start = photos.length
        const nextPhotos = allPhotos.slice(start, start + size)

        setPhotos((prevPhotos) => [...prevPhotos, ...nextPhotos])
        setPage((prevPage) => prevPage + 1)
        return nextPhotos.length ? nextPhotos : null
    }

    useEffect(() => {
        fetchPhotos() // Initial load
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

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
                            <RowsPhotoAlbum
                                photos={photos}
                                rowConstraints={{
                                    minPhotos: 4,
                                    maxPhotos: 4
                                }}
                            />
                        </InfiniteScroll>

                        <Lightbox
                            slides={photos}
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
