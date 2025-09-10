import React from 'react'
import clsx from 'clsx'
import { useScrollTo } from '@/providers/ScrollProvider'

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
    const { scrollTo } = useScrollTo()
    return (
        <>
            {type === 'link' ? (
                <a href={`#${target}`} onClick={() => scrollTo(target)}>
                    {label}
                </a>
            ) : (
                <button
                    className={clsx('text-lg font-bold button-link', className)}
                    onClick={() => scrollTo(target)}>
                    {label}
                </button>
            )}
        </>
    )
}

export default ScrollToLink
