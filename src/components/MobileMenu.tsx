'use client'

import React, { useRef } from 'react'
import clsx from 'clsx'
import ScrollToLink from '@/components/ScrollToLink'
import { useMobileMenuContext } from '@/providers/MobileMenuProvider'

const MobileMenu: React.FC = () => {
    const { showMobileMenu, setShowMobileMenu } = useMobileMenuContext()
    const navRef = useRef<HTMLDivElement>(null)

    const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (navRef.current && !navRef.current.contains(e.target as Node)) {
            setShowMobileMenu(false)
        }
    }

    return (
        <div
            className={clsx(
                'fixed top-0 left-0 w-full h-screen bg-black/80 z-25 transition-all duration-300',
                showMobileMenu ? 'visible' : 'invisible'
            )}
            onClick={handleOverlayClick}>
            <div className='container overflow-hidden'>
                <nav
                    ref={navRef}
                    className='overflow-hidden flex max-lg:flex-col gap-4 lg:gap-10 lg:mr-10 max-lg:py-[70px] text-white ml-[54px] pl-[30px] items-start'>
                    <ScrollToLink
                        className={clsx(
                            'text-lg font-bold transition-all ease-in-out',
                            showMobileMenu
                                ? 'translate-x-0 opacity-1 duration-200 delay-100'
                                : '-translate-x-[50%] duration-100 delay-0 opacity-0'
                        )}
                        label='About'
                        target='about'
                    />

                    <ScrollToLink
                        className={clsx(
                            'text-lg font-bold transition-all ease-in-out',
                            showMobileMenu
                                ? 'translate-x-0 opacity-1 duration-200 delay-100'
                                : '-translate-x-[50%] duration-100 delay-0 opacity-0'
                        )}
                        label='Work'
                        target='work'
                    />

                    <ScrollToLink
                        className={clsx(
                            'text-lg font-bold transition-all ease-in-out',
                            showMobileMenu
                                ? 'translate-x-0 opacity-1 duration-200 delay-100'
                                : '-translate-x-[50%] duration-100 delay-0 opacity-0'
                        )}
                        label='Contact'
                        target='contact'
                    />
                </nav>
            </div>
        </div>
    )
}

export default MobileMenu
