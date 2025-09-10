import React, { useRef } from 'react'
import Image from 'next/image'
import clsx from 'clsx'
import GridRow from '@/components/layout/GridRow'
import { motion, useInView } from 'framer-motion'
import { Badge } from '@/components/ui/badge'

type CaseStudyProps = {
    content?: React.ReactNode
    projectName: string
    projectLogo: {
        url: string
        width?: number
        height?: number
    }
    projectAgency?: '3ev' | 'Independent'
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
    projectAgency,
    contentAlign = 'left',
    websiteUrl
}) => {
    const triggerRef = useRef(null)
    const isInView = useInView(triggerRef, { margin: '-100px 0px 0px 0px' })

    return (
        <article className='relative py-20 last:pb-0' ref={triggerRef}>
            <Image
                className='absolute inset-0 opacity-20 w-full h-full object-cover'
                src={projectPoster}
                alt={projectName}
                width='1200'
                height='720'
            />
            <div className='container relative z-0'>
                <GridRow>
                    <div
                        className={clsx(
                            'col-span-6 text-white',
                            contentAlign === 'right' ? 'lg:order-3' : 'lg:order-1'
                        )}>
                        <Image
                            className='mb-8 h-[90px] w-auto'
                            src={projectLogo.url}
                            alt={projectName}
                            width={projectLogo.width ?? 360}
                            height={projectLogo.height ?? 100}
                            sizes='100vw'
                        />
                        <Badge variant='outline' className='mb-4'>
                            {projectAgency === '3ev'
                                ? 'Agency Project (3ev)'
                                : 'Independent Project'}
                        </Badge>
                        <div className='text-lg'>{content}</div>
                    </div>
                    <div
                        className={clsx(
                            'col-span-6',
                            contentAlign === 'left' ? 'lg:order-3' : 'lg:order-1'
                        )}>
                        <motion.div
                            initial={{ y: -120, opacity: 0 }}
                            animate={isInView ? { y: 0, opacity: 1 } : { y: -120, opacity: 0 }}
                            transition={{ duration: 0.6, ease: 'easeOut' }}
                            className='relative overflow-hidden rounded-sm h-full focus-within:outline focus-within:outline-offset-4 focus-within:outline-white'>
                            <a
                                href={websiteUrl}
                                target='_blank'
                                rel='noopener noreferrer'
                                aria-label={`Visit ${projectName} website`}>
                                <Image
                                    className='w-full rounded-sm lg:absolute top-0 max-lg:aspect-video max-lg:object-cover max-lg:object-top'
                                    src={projectScreenshot}
                                    alt={`Screenshot of ${projectName}`}
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
