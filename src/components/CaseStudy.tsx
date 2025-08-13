'use client'

import React, { useRef } from 'react'
import Image from 'next/image'
import clsx from 'clsx'
import GridRow from '@/components/layout/GridRow'
import { motion, useInView } from 'framer-motion'

type CaseStudyProps = {
    content?: React.ReactNode
    projectName: string
    projectLogo: string
    projectScreenshot: string
    projectPoster: string
    contentAlign?: 'left' | 'right'
    websiteUrl?: string
}

const CaseStudy: React.FC<CaseStudyProps> = ({
    content,
    projectName,
    projectLogo,
    projectScreenshot,
    projectPoster,
    contentAlign = 'left',
    websiteUrl
}) => {
    const triggerRef = useRef(null)
    const isInView = useInView(triggerRef, { margin: '-100px 0px 0px 0px' })

    return (
        <article className='relative py-20 last:pb-0' ref={triggerRef}>
            <Image
                className='absolute inset-0 opacity-12 w-full h-full object-cover'
                src={projectPoster}
                alt={projectName}
                width='1200'
                height='720'
            />
            <div className='container relative z-0'>
                <GridRow>
                    <div
                        className={clsx(
                            'col-span-6',
                            contentAlign === 'right' ? 'lg:order-3' : 'lg:order-1'
                        )}>
                        <Image
                            className='mb-8'
                            src={projectLogo}
                            alt={projectName}
                            width='360'
                            height='100'
                            sizes='100vw'
                        />
                        <div className='text-lg'>{content}</div>
                    </div>
                    <div
                        className={clsx(
                            'col-span-6',
                            contentAlign === 'left' ? 'lg:order-3' : 'lg:order-1'
                        )}>
                        <motion.div
                            initial={{ y: -50, opacity: 0 }}
                            animate={isInView ? { y: 0, opacity: 1 } : { y: -50, opacity: 0 }}
                            transition={{ duration: 0.4, ease: 'easeOut' }}
                            className='sticky top-6'>
                            <a
                                href={websiteUrl}
                                target='_blank'
                                rel='noopener noreferrer'
                                aria-label={`Visit ${projectName} website`}>
                                <Image
                                    className='w-full rounded-sm'
                                    src={projectScreenshot}
                                    alt={`Screenshop of ${projectName}`}
                                    width='360'
                                    height='100'
                                />
                                <span className='sr-only'>Visit {projectName} website</span>
                            </a>
                        </motion.div>
                    </div>
                </GridRow>
            </div>
        </article>
    )
}

export default CaseStudy
