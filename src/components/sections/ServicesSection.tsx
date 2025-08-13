'use client'

import React from 'react'
import { motion } from 'framer-motion'
import SectionHeader from '@/components/SectionHeader'
import Card from '@/components/Card'

const ServicesSection: React.FC = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3
            }
        }
    }

    const cardVariants = {
        hidden: {
            opacity: 0,
            y: 50,
            scale: 0.9
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: 'spring',
                stiffness: 100,
                damping: 15,
                duration: 0.6
            }
        }
    }

    const services = [
        [
            {
                image: {
                    url: '/images/programmer-bro.svg',
                    alt: 'Website Development',
                    width: 400,
                    height: 242
                },
                heading: 'Website Development',
                text: 'End-to-end builds using modern front-end tools and CMS platforms. Clean, maintainable code with a focus on performance and accessibility.'
            },
            {
                image: {
                    url: '/images/ux-design-bro.svg',
                    alt: 'UX Design',
                    width: 400,
                    height: 242
                },
                heading: 'UX Design',
                text: 'Collaborative wireframing, prototyping, and refining interfaces to ensure thoughtful, user-focused digital experiences.'
            }
        ],
        [
            {
                image: {
                    url: '/images/accessibility-bro.svg',
                    alt: 'Accessibility',
                    width: 400,
                    height: 242
                },
                heading: 'Accessibility',
                text: 'Designing and building inclusive, standards-compliant websites that work for everyone. Guided by WCAG and usability best practices.'
            },
            {
                image: {
                    url: '/images/consulting-bro.svg',
                    alt: 'Consultancy',
                    width: 400,
                    height: 242
                },
                heading: 'Consultancy',
                text: 'Technical planning, audits, and advice. Helping teams make smart decisions about platforms, structure, and scalable solutions.'
            }
        ]
    ]

    return (
        <section className='bg-cream text-dark py-14 pb-8 lg:py-20 relative overflow-hidden'>
            <div className='border-solid border-t-white border-b-0 border-r-0 border-l-[100vw] border-t-30 lg:border-t-60 border-transparent absolute w-full left-0 top-0 drop-shadow-[0_1px_13px_rgba(0,0,0,0.15)]'></div>

            <SectionHeader className='mb-12' heading='Skills & Services' justify='center' />

            <div className='container mb-12 space-y-[30px] lg:space-y-20'>
                {services.map((row, rowIndex) => (
                    <motion.div
                        key={rowIndex}
                        className='grid grid-cols-1 lg:grid-cols-2 gap-[30px] lg:gap-20'
                        variants={containerVariants}
                        initial='hidden'
                        whileInView='visible'
                        viewport={{ once: true, amount: 0.3 }}>
                        {row.map((service, cardIndex) => (
                            <motion.div key={`${rowIndex}-${cardIndex}`} variants={cardVariants}>
                                <Card
                                    image={service.image}
                                    heading={service.heading}
                                    text={service.text}
                                />
                            </motion.div>
                        ))}
                    </motion.div>
                ))}
            </div>

            <div className='border-solid border-b-white border-t-0 border-r-0 border-l-[100vw] border-b-30 lg:border-b-60 border-transparent absolute w-full left-0 bottom-0 drop-shadow-[0_1px_13px_rgba(0,0,0,0.15)]'></div>
        </section>
    )
}

export default ServicesSection
