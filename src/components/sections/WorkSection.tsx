'use client'

import React from 'react'
import SectionHeader from '@/components/SectionHeader'
import CaseStudy from '@/components/CaseStudy'
import { ThreeDMarquee } from '@/components/ui/shadcn-io/3d-marquee'

const images = [
    '/images/portfolio/ot/ot-screenshot.jpg',
    '/images/portfolio/chem-bros/chem-bros-screenshot.jpg',
    '/images/portfolio/cfs/cfs-screenshot.jpg',
    '/images/portfolio/beyond-dharma/beyond-dharma-screenshot.jpg',
    '/images/portfolio/ski-solutions/ski-solutions-screenshot.jpg',
    '/images/portfolio/sing-up/sing-up-screenshot.jpg'
]

const WorkSection: React.FC = () => {
    return (
        <section className='bg-blue-dark  text-white  py-16 lg:py-20 lg:pt-0 relative'>
            <div className='relative mx-auto flex mb-10 w-full flex-col items-center justify-center overflow-hidden'>
                <SectionHeader
                    className='container mb-0 z-20 py-20 lg:py-50'
                    heading='My Work'
                    justify='center'
                    intro="Highlights from 11 years of agency work at 3ev.<br/>Projects I'm proud to have helped shape and ship."
                />
                {/* overlay */}
                <div className='absolute inset-0 z-10 h-full w-full bg-black/70  ' />
                <ThreeDMarquee
                    className='pointer-events-none absolute inset-0 h-full w-full overflow-hidden'
                    images={images}
                />
            </div>
            <div className='border-solid border-t-white border-b-0 border-l-0 border-r-[100vw] border-t-30 lg:border-t-60 border-transparent absolute w-full left-0 top-0 z-10'></div>

            <div className='flex flex-col gap-4 bg-blue-dark'>
                <CaseStudy
                    contentAlign='right'
                    projectName="Oliver's Travels"
                    projectLogo='/images/portfolio/ot/ot-logo.svg'
                    projectScreenshot='/images/portfolio/ot/ot-screenshot-full.jpg'
                    projectPoster='/images/portfolio/ot/ot-poster.jpg'
                    websiteUrl='https://oliverstravels.com'
                    content={
                        <>
                            <h3>Overview</h3>
                            <p>
                                A luxury villa rental platform offering handpicked holiday
                                properties across Europe and beyond. The site serves as both a
                                high-converting marketing platform and a fully-featured custom
                                booking system.
                            </p>
                            <h3>My Role</h3>
                            <p>
                                Over 11 years, I was deeply involved in the ongoing development and
                                evolution of the Oliver&apos;s Travels website. I initially worked
                                on building and refining a custom Laravel booking system, delivering
                                features that streamlined internal processes and improved the
                                customer experience. I later led a complete visual redesign of the
                                site, working solo to implement a refreshed look and feel. More
                                recently, I played a central role in a full platform rebuild - this
                                time as part of a small team, migrating the frontend to React and
                                introducing a headless WordPress CMS for the first time.
                            </p>

                            <h3>Outcome</h3>
                            <p>
                                The site consistently supported year-on-year growth, with major
                                technical and UX improvements contributing to increased conversions
                                and smoother team workflows. The React rebuild set the foundation
                                for future scalability while improving editorial flexibility for the
                                marketing team using Wordpress.
                            </p>
                            <h3>Check It Out</h3>
                            <p>
                                <a href='https://oliverstravels.com' target='_blank'>
                                    oliverstravels.com
                                </a>
                            </p>
                        </>
                    }
                />

                <CaseStudy
                    projectName='The Chemical Brothers'
                    projectLogo='/images/portfolio/chem-bros/chem-bros-logo.svg'
                    projectScreenshot='/images/portfolio/chem-bros/chem-bros-screenshot-full.jpg'
                    projectPoster='/images/portfolio/chem-bros/chem-bros-poster.jpg'
                    websiteUrl='https://thechemicalbrothers.com/'
                    content={
                        <>
                            <h3>Overview</h3>
                            <p>
                                A high-impact promotional website for The Chemical Brothers, built
                                to support a new album campaign and provide a central hub for music,
                                news, and tour updates.
                            </p>
                            <h3>My Role</h3>
                            <p>
                                I was responsible for the full build of the site using Webflow,
                                working closely with the designer to bring the visuals to life under
                                tight time and budget constraints. This was my first Webflow
                                project, requiring rapid upskilling and creative problem-solving to
                                meet the deadline.
                            </p>

                            <h3>Outcome</h3>
                            <p>
                                Outcome The site launched in sync with a major release, successfully
                                supporting heavy traffic and providing a smooth experience across
                                devices. The client appreciated the clean admin interface and speed
                                of delivery, especially given the compressed timeline.
                            </p>
                            <h3>Check It Out</h3>
                            <p>
                                <a href='https://thechemicalbrothers.com' target='_blank'>
                                    thechemicalbrothers.com
                                </a>
                            </p>
                        </>
                    }
                />

                <CaseStudy
                    contentAlign='left'
                    projectName='Cycling for Softies'
                    projectLogo='/images/portfolio/cfs/cfs-logo.svg'
                    projectScreenshot='/images/portfolio/cfs/cfs-screenshot-full.jpg'
                    projectPoster='/images/portfolio/cfs/cfs-poster.jpg'
                    websiteUrl='https://cyclingforsofties.com'
                    content={
                        <>
                            <h3>Overview</h3>
                            <p>
                                Cycling for Softies is a cycling holiday company offering curated
                                leisurly tours across Europe. The website needed to blend elegant
                                design with real-time availability and tailored itinerary
                                options—while integrating smoothly with the company&apos;s bespoke
                                booking infrastructure.
                            </p>
                            <h3>My Role</h3>
                            <p>
                                I led the development of the website using a hybrid architecture: a
                                WordPress backend for content management and a Vue.js-powered
                                frontend to deliver a smooth, app-like experience. I also helped
                                design and build the custom Laravel property management system that
                                powers availability, and pricing data across the site.
                            </p>

                            <h3>Outcome</h3>
                            <p>
                                The hybrid approach enabled editors to manage content easily while
                                providing users with a modern, responsive interface. The tight
                                integration with internal systems allowed for greater operational
                                efficiency and a more engaging customer experience.
                            </p>
                            <h3>Check It Out</h3>
                            <p>
                                <a href='https://cyclingforsofties.com' target='_blank'>
                                    cyclingforsofties.com
                                </a>
                            </p>
                        </>
                    }
                />
            </div>
        </section>
    )
}

export default WorkSection
