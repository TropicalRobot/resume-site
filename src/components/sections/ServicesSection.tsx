'use client'

import React from 'react'
import SectionHeader from '@/components/SectionHeader'
import Card from '@/components/Card'

const ServicesSection: React.FC = () => {
    return (
        <section className='bg-cream text-dark py-14 pb-8 lg:py-20 relative overflow-hidden'>
            <div className='border-solid border-t-white border-b-0 border-r-0 border-l-[100vw] border-t-[30px] lg:border-t-[60px] border-transparent absolute w-full left-0 top-0 drop-shadow-[0_1px_13px_rgba(0,0,0,0.15)]'></div>

            <SectionHeader className='mb-12' heading='Skills & Services' justify='center' />

            <div className='container mb-12'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-[30px] lg:gap-20'>
                    <Card
                        image={{
                            url: '/images/programmer-bro.svg',
                            alt: 'Website Development',
                            width: 400,
                            height: 242
                        }}
                        heading='Website Development'
                        text='End-to-end builds using modern front-end tools and CMS platforms. Clean, maintainable code with a focus on performance and accessibility.'
                    />

                    <Card
                        image={{
                            url: '/images/ux-design-bro.svg',
                            alt: 'UX Design',
                            width: 400,
                            height: 242
                        }}
                        heading='UX Design'
                        text='Collaborative wireframing, prototyping, and refining interfaces to ensure thoughtful, user-focused digital experiences.'
                    />

                    <Card
                        image={{
                            url: '/images/accessibility-bro.svg',
                            alt: 'Accessibility',
                            width: 400,
                            height: 242
                        }}
                        heading='Accessibility'
                        text='Designing and building inclusive, standards-compliant websites that work for everyone. Guided by WCAG and usability best practices.'
                    />

                    <Card
                        image={{
                            url: '/images/consulting-bro.svg',
                            alt: 'Consultancy',
                            width: 400,
                            height: 242
                        }}
                        heading='Consultancy'
                        text='Technical planning, audits, and advice. Helping teams make
                  smart decisions about platforms, structure, and scalable
                  solutions.'
                    />
                </div>
            </div>
            <div className='border-solid border-b-white border-t-0 border-r-0 border-l-[100vw] border-b-[30px] lg:border-b-[60px] border-transparent absolute w-full left-0 bottom-0 drop-shadow-[0_1px_13px_rgba(0,0,0,0.15)]'></div>
        </section>
    )
}

export default ServicesSection
