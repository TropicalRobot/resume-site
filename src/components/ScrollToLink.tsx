'use client'

import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation'
import React from 'react'
import clsx from 'clsx'
import { useScrollTo } from '@/providers/ScrollProvider'
import Link from 'next/link'

type ScrollToLinkProps = {
    type?: 'button' | 'link'
    className?: string
    label: string
    target: string
}

const ScrollToLink: React.FC<ScrollToLinkProps> = ({
    type = 'button',
    className,
    label,
    target
}) => {
    const homePage = '/'
    const { scrollTo } = useScrollTo()
    const pathname = usePathname()
    const router = useRouter()
    const isOnTargetPage = pathname === homePage

    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault()

        if (isOnTargetPage) {
            // We're on the right page - use scroll context
            scrollTo(target)
        } else {
            // Navigate to the target page with hash
            router.push(`${homePage}#${target}`)
        }
    }

    return (
        <>
            {type === 'link' ? (
                <Link
                    href={isOnTargetPage ? `#${target}` : `${homePage}#${target}`}
                    onClick={handleClick}>
                    {label}
                </Link>
            ) : (
                <button
                    className={clsx('text-lg font-bold button-link', className)}
                    onClick={handleClick}>
                    {label}
                </button>
            )}
        </>
    )
}

export default ScrollToLink
