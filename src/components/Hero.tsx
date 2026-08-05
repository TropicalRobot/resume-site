'use client'

import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

type HeroProps = {
    imgSrc?: string
    heading: string
}

const Hero: React.FC<HeroProps> = ({ imgSrc = '', heading }) => {
    const { scrollY } = useScroll() // Get the scroll position (vertical)

    const translateHeroY = useTransform(scrollY, [0, 100], [0, -200])

    return (
        <motion.div style={{ y: translateHeroY }} className='w-full pt-20 overflow-hidden'>
            {imgSrc && (
                <motion.img
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6 }}
                    className='object-cover h-full w-full absolute inset-0 bg-gray-400'
                    src={imgSrc}
                    width={2400}
                    height={1080}
                    alt='Picture of the author'
                    // srcSet='/images/photoshoot-author-720.avif 720w, /images/photoshoot-author-1440.avif 1440w, /images/photoshoot-author-2400.avif 2400w'
                    sizes='100vw'
                />
            )}

            <div className='relative container flex-col content-center'>
                <div className='pb-8 lg:pb-32 flex-col'>
                    <div className='overflow-hidden inline-block pr-2 w-full'>
                        <motion.h2
                            initial={{ y: '120%', opacity: 0 }}
                            animate={{ y: '0%', opacity: 1 }}
                            transition={{
                                y: { duration: 0.6, ease: 'easeOut', delay: 0.1 },
                                opacity: { duration: 0.6, ease: 'easeOut', delay: 0.3 }
                            }}
                            className='uppercase font-heading text-heading-0 lg:text-tablet-heading-0 xl:text-desktop-heading-0 font-black'>
                            {heading}
                        </motion.h2>
                    </div>
                    {/* <p className="text-xl mt-2 ml-2">Based in Brighton, UK</p> */}
                </div>
            </div>
        </motion.div>
    )
}

export default Hero
