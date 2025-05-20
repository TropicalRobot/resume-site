'use client'

import React, { useRef, useEffect } from 'react'
import { useScrollTo } from '@/providers//ScrollProvider'

type SectionProps = {
    className?: string
    id: string
    children?: React.ReactNode
}
const Section: React.FC<SectionProps> = ({ className, id, children }) => {
    const ref = useRef<HTMLDivElement>(null)
    const { registerSection } = useScrollTo()

    useEffect(() => {
        if (ref.current) {
            registerSection(id, ref as React.RefObject<HTMLElement>)
        }
    }, [id, registerSection])

    return (
        <div className={className} ref={ref}>
            {children}
        </div>
    )
}

export default Section
