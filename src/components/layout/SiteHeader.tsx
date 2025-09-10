'use client'

import Image from 'next/image'
import GithubIcon from '@/images/icons/github.svg'
import LinkedInIcon from '@/images/icons/linkedIn.svg'
import { useMobileMenuToggle, useMobileMenuContext } from '@/providers/MobileMenuProvider'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import { useScrollDirection } from '@/hooks/useScrollDirection'
import ScrollToLink from '@/components/ScrollToLink'
import { useScrollTo } from '@/providers/ScrollProvider'
import { usePathname, useRouter } from 'next/navigation'

export default function SiteHeader({}) {
    const router = useRouter()
    const pathname = usePathname()
    const { forceDirection, scrollDirection } = useScrollDirection({
        tolerance: 100
    })
    const toggleMobileMenu = useMobileMenuToggle(forceDirection)
    const { showMobileMenu } = useMobileMenuContext()
    const { scrollTo } = useScrollTo()

    return (
        <>
            <motion.header
                animate={{
                    y: scrollDirection === 'down' && !showMobileMenu ? -100 : 0
                }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className={clsx(
                    'container fixed top-0 left-0 flex items-center justify-center w-full z-50 right-0'
                )}>
                <div
                    className={clsx(
                        'bg-white/75 backdrop-blur-[3px] rounded-full p-[5px] w-full mt-4 flex justify-between items-center border border-black/50 transition-transform duration-300 origin-[27px_27px]',
                        showMobileMenu && 'rotate-90'
                    )}>
                    <div className='flex items-center'>
                        <button
                            className={clsx(
                                'w-[42px] h-[42px] rounded-full bg-[#FFB69D] overflow-hidden transition-transform duration-300 hover:border border-black',
                                showMobileMenu && '-rotate-90'
                            )}
                            onClick={() => {
                                if (pathname === '/') {
                                    scrollTo('home')
                                } else {
                                    router.push('/')
                                }
                            }}>
                            <Image
                                src='/images/avatar.jpg'
                                width={42}
                                height={42}
                                alt='Profile picture of Ryan Griffiths'
                            />
                        </button>
                        <div className='ml-4 font-script text-2xl'>Ryan G</div>
                    </div>

                    <div className='lg:hidden'>
                        <button
                            className={clsx(
                                'hamburger hamburger--spin',
                                showMobileMenu && 'is-active'
                            )}
                            type='button'
                            onClick={() => toggleMobileMenu()}
                            role='button'
                            aria-label='Open main menu'
                            aria-expanded={showMobileMenu}>
                            <span className='hamburger-box mr-2'>
                                <span className='hamburger-inner'></span>
                            </span>
                        </button>
                    </div>

                    <div
                        className={clsx(
                            'relative max-lg:hidden max-lg:fixed lg:flex lg:items-center max-lg:h-svh max-lg:-top-[17px] max-lg:-left-[43px] max-lg:-right-[43px]',
                            !showMobileMenu && 'hidden'
                        )}>
                        <nav
                            className='flex max-lg:flex-col items-center justify-center gap-4 lg:gap-10 lg:mr-10 max-lg:py-10'
                            onFocusCapture={() => forceDirection('up')}>
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
                        <div className='flex items-center space-x-2'>
                            <a
                                className='hover:scale-120 focus:scale-120 transition-transform duration-200'
                                href='https://www.linkedin.com/in/ryan-griffiths-04649075/'
                                aria-label="Visit Ryan Griffiths' LinkedIn"
                                target='_blank'>
                                <LinkedInIcon className='fill-black w-10 h-10' />
                            </a>
                            <a
                                className='hover:scale-120 focus:scale-120 transition-transform duration-200'
                                href='https://github.com/TropicalRobot'
                                aria-label="Visit Ryan Griffiths' GitHub"
                                target='_blank'>
                                <GithubIcon className='fill-black w-10 h-10' />
                            </a>
                        </div>
                    </div>
                </div>
            </motion.header>
        </>
    )
}
