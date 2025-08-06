'use client'

import React, { useRef, ReactNode } from 'react'
import clsx from 'clsx'
import SectionHeader from '@/components/SectionHeader'
import GridRow from '@/components/layout/GridRow'
import { motion, useInView } from 'framer-motion'

type ContentSectionProps = {
    className?: string
    contentAlign: 'left' | 'right'
    headerJustify?: 'start' | 'center' | 'end'
    heading: string
    intro?: string
    children: ReactNode
}

const ContentSection: React.FC<ContentSectionProps> = ({
    className,
    contentAlign = 'left',
    headerJustify = 'start',
    heading,
    intro,
    children
}) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.3 })
    return (
        <section className={clsx(className)}>
            <motion.div
                // ref={ref}
                // initial={{ y: 50, opacity: 0 }}
                // animate={isInView ? { y: 0, opacity: 1 } : {}}
                // transition={{ duration: 0.4, ease: 'easeOut' }}
                className='container mx-auto py-8 lg:py-12'>
                <GridRow>
                    <div
                        className={clsx(
                            'col-span-4 lg:col-span-4',
                            contentAlign === 'left' && 'lg:col-start-1 lg:order-1',
                            contentAlign === 'right' && 'lg:col-start-9 lg:order-2'
                        )}>
                        <SectionHeader
                            headerJustify={headerJustify}
                            heading={heading}
                            intro={intro}
                        />
                    </div>
                    <div
                        className={clsx(
                            'col-span-4 lg:col-span-7 lg:pt-4',
                            contentAlign === 'left' && 'lg:col-start-6 lg:order-2',
                            contentAlign === 'right' && 'lg:col-start-1 lg:order-1'
                        )}>
                        {children}
                    </div>
                </GridRow>
            </motion.div>
        </section>
    )
}

export default ContentSection
