'use client'

import GithubIcon from '@/images/icons/github.svg'
import LinkedInIcon from '@/images/icons/linkedIn.svg'
import ScrollToLink from '@/components/ScrollToLink'

export default function SiteFooter({}) {
    return (
        <footer className='w-full bg-blue-dark text-white py-10 relative'>
            <div className='container mx-auto'>
                <div className='flex justify-between items-end'>
                    <div>
                        <div className='flex flex-col gap-4'>
                            <div className='font-script text-2xl'>Ryan G</div>
                            <div className='flex items-center space-x-2'>
                                <a
                                    className='hover:scale-120 focus:scale-120 transition-transform duration-200'
                                    href='https://github.com/TropicalRobot'
                                    aria-label="Visit Ryan Griffiths' GitHub"
                                    target='_blank'>
                                    <GithubIcon className='fill-white w-10 h-10' />
                                </a>
                                <a
                                    className='hover:scale-120 focus:scale-120 transition-transform duration-200'
                                    href='https://www.linkedin.com/in/ryan-griffiths-04649075/'
                                    aria-label="Visit Ryan Griffiths' LinkedIn"
                                    target='_blank'>
                                    <LinkedInIcon className='fill-white w-10 h-10' />
                                </a>
                            </div>
                            <div className='mb-0'>
                                &copy; Ryan Griffiths {new Date().getFullYear()}
                            </div>
                        </div>
                        <p className='text-xs'>
                            Illustrations by{' '}
                            <a href='https://storyset.com/education' target='_blank'>
                                Storyset
                            </a>
                        </p>
                    </div>
                    <div>
                        <nav
                            className='flex flex-col items-end gap-2'
                            aria-label='Footer navigation'>
                            <ScrollToLink
                                className='text-lg font-bold'
                                label='About'
                                target='about'
                            />
                            <ScrollToLink
                                className='text-lg font-bold'
                                label='Work'
                                target='work'
                            />
                            <ScrollToLink
                                className='text-lg font-bold'
                                label='Contact'
                                target='contact'
                            />
                        </nav>
                    </div>
                </div>
            </div>
        </footer>
    )
}
