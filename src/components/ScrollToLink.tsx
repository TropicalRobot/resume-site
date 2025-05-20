'use client'

import React from 'react'
import clsx from 'clsx'
import { useScrollTo } from '@/providers/ScrollProvider'

type ScrollToLinkProps = {
    className?: string
    label: string
    target: string
}

const ScrollToLink: React.FC<ScrollToLinkProps> = ({ className, label, target }) => {
    const { scrollTo } = useScrollTo()
    return (
        <button
            className={clsx('text-lg font-bold button-link', className)}
            onClick={() => scrollTo(target)}>
            {label}
        </button>
    )
}

export default ScrollToLink
