'use client'

import React from 'react'
import SectionHeader from '@/components/SectionHeader'
import CaseStudy from '@/components/CaseStudy'
import { ThreeDMarquee } from '@/components/ui/shadcn-io/3d-marquee'

const images = [
    '/images/portfolio/ot/ot-screenshot.avif',
    '/images/portfolio/chem-bros/chem-bros-screenshot.avif',
    '/images/portfolio/cfs/cfs-screenshot.avif',
    '/images/portfolio/beyond-dharma/beyond-dharma-screenshot.avif',
    '/images/portfolio/ski-solutions/ski-solutions-screenshot.avif',
    '/images/portfolio/sing-up/sing-up-screenshot.avif'
]

const WorkSection: React.FC = () => {
    return (
        <section className='bg-blue-dark  text-white  py-16 lg:py-20 lg:pt-0 relative'>
            <div className='relative mx-auto flex mb-10 w-full flex-col items-center justify-center overflow-hidden'>
                <SectionHeader
                    className='container mb-0 z-20 py-20 lg:py-50'
                    heading='My Work'
                    justify='center'
                    intro="Highlights from 11 years of shaping and shipping work at 3ev,<br>to more recent projects I've branded, designed, and built myself."
                />
                {/* overlay */}
                <div className='absolute inset-0 z-10 h-full w-full bg-black/80  ' />
                <ThreeDMarquee
                    className='pointer-events-none absolute inset-0 h-full w-full overflow-hidden'
                    images={images}
                />
            </div>
            <div className='border-solid border-t-white border-b-0 border-l-0 border-r-[100vw] border-t-30 lg:border-t-60 border-transparent absolute w-full left-0 top-0 z-10'></div>

            <div className='flex flex-col gap-4 bg-blue-dark'>
                <CaseStudy
                    contentAlign='left'
                    projectName='Beyond Dharma'
                    projectAgency='Independent'
                    projectLogo={{
                        url: '/images/portfolio/beyond-dharma/beyond-dharma-logo.svg',
                        width: 149,
                        height: 50
                    }}
                    projectScreenshot='/images/portfolio/beyond-dharma/beyond-dharma-screenshot-full.avif'
                    projectPoster='/images/portfolio/beyond-dharma/beyond-dharma-poster.avif'
                    websiteUrl='https://www.beyonddharma.com'
                    content={
                        <>
                            <h3>Overview</h3>
                            <p>
                                Beyond Dharma is a purpose-driven consultancy founded to support
                                yoga teachers, retreat leaders, sustainable properties, and local
                                tour operators. Its mission is to shake up the wellness and
                                sustainable travel world with authentic, conscious, and impactful
                                experiences — rejecting cookie-cutter retreats and greenwashing in
                                favor of real, transformative journeys.
                            </p>
                            <p>
                                To help establish a strong market presence and build credibility, I
                                worked directly with the founder to create a complete brand identity
                                and digital presence from the ground up.
                            </p>

                            <h3>My Role</h3>
                            <p>
                                I worked closely with the founder to create the Beyond Dharma brand
                                and digital presence from the ground up. This included developing
                                the brand identity, designing and building a custom WordPress site,
                                and tailoring it to reflect the company&apos;s mission and services.
                                I also set up deployment to ethical managed hosting with Krystal,
                                ensuring a reliable and sustainable hosting solution. The result was
                                a flexible platform that the founder could manage independently,
                                with the technical foundation aligned to the business&apos;s values
                                and growth plans.
                            </p>

                            <h3>Outcome</h3>
                            <p>
                                The brand and website launched successfully in time for Beyond
                                Dharma&apos;s market debut, providing a professional platform to sit
                                alongside its social media presence. The site received positive
                                feedback for its clear design and usability, while the custom
                                WordPress build gave the founder full control over content updates -
                                from publishing blog posts to refining service details - without
                                relying on a developer. This solid foundation allowed the business
                                to confidently promote its services and begin building an audience
                                from day one.
                            </p>
                            <h3>Check It Out</h3>
                            <p>
                                <a href='https://www.beyonddharma.com' target='_blank'>
                                    beyonddharma.com
                                </a>
                            </p>
                        </>
                    }
                />
                <CaseStudy
                    contentAlign='right'
                    projectName="Oliver's Travels"
                    projectLogo={{
                        url: '/images/portfolio/ot/ot-logo.svg'
                    }}
                    projectAgency='3ev'
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
                    contentAlign='left'
                    projectName='The Chemical Brothers'
                    projectLogo={{
                        url: '/images/portfolio/chem-bros/chem-bros-logo.svg'
                    }}
                    projectAgency='3ev'
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
                    contentAlign='right'
                    projectName='Cycling for Softies'
                    projectLogo={{
                        url: '/images/portfolio/cfs/cfs-logo.svg',
                        width: 360,
                        height: 145
                    }}
                    projectAgency='3ev'
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

                <CaseStudy
                    contentAlign='left'
                    projectName='Sing Up'
                    projectLogo={{
                        url: '/images/portfolio/sing-up/sing-up-logo.svg',
                        width: 360,
                        height: 145
                    }}
                    projectAgency='3ev'
                    projectScreenshot='/images/portfolio/sing-up/sing-up-screenshot-full.avif'
                    projectPoster='/images/portfolio/sing-up/sing-up-poster.jpg'
                    websiteUrl='https://www.singup.org/'
                    content={
                        <>
                            <h3>Overview</h3>
                            <p>
                                Sing Up is a national initiative dedicated to promoting singing in
                                schools, providing resources, training, and digital tools to support
                                teachers and students. The platform is used by thousands of schools
                                and educators across the UK. During my 11 years at 3ev, I worked
                                extensively on Sing Up, supporting and enhancing the site while also
                                playing a key role in a major redesign project.
                            </p>
                            <h3>My Role</h3>
                            <p>
                                Over more than a decade, I supported and enhanced Sing Up’s platform
                                through ongoing development work, while also playing a key role in a
                                major redesign that modernised the site. My work involved navigating
                                a complex technical stack, integrating TYPO3 as the CMS, Magento for
                                e-commerce, Salesforce for CRM, and maintaining extensive legacy
                                code. I collaborated closely with stakeholders to ensure the
                                platform stayed reliable and user-friendly, while evolving to meet
                                the needs of a large and growing educational user base.
                            </p>

                            <h3>Outcome</h3>
                            <p>
                                Sing Up&apos;s platform remained reliable, scalable, and
                                user-friendly throughout more than a decade of continuous growth.
                                The redesign project provided a refreshed experience for educators
                                and onboarding for a student area, while careful integration work
                                ensured legacy systems and third-party platforms worked together
                                seamlessly. My long-term involvement helped the organisation
                                maintain technical stability while evolving to meet the needs of its
                                large educational user base.
                            </p>
                            <h3>Check It Out</h3>
                            <p>
                                <a href='https://www.singup.org/' target='_blank'>
                                    www.singup.org
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
