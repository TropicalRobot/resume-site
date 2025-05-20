'use client'

import { motion, useTransform, useScroll } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

type HorizontalScrollCarouselProps = {
    children: React.ReactNode
    inputRange?: string[]
}

const HorizontalScrollCarousel: React.FC<HorizontalScrollCarouselProps> = ({
    children,
    inputRange = ['0%', '-100%']
}) => {
    const targetRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: targetRef
    })

    const x = useTransform(scrollYProgress, [0, 1], inputRange)

    return (
        <section ref={targetRef} className='relative h-[300vh]'>
            <div className='sticky top-0 flex h-screen items-center overflow-x-hidden overflow-y-visible'>
                <div className='absolute top-0 left-0 bottom-0 flex align-middle'>
                    <Image
                        className='m-auto opacity-40'
                        src='/images/mention-bro.svg'
                        width={600}
                        height={400}
                        alt='Picture of the author'
                    />
                </div>
                <motion.div
                    style={{ x }}
                    className='flex gap-10 pl-[20px] lg:pl-[50%] relative z-10'>
                    {children}
                </motion.div>
            </div>
        </section>
    )
}

export default HorizontalScrollCarousel
