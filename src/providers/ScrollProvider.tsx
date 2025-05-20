'use client'

import React, { createContext, useContext, useRef } from 'react'

type ScrollContextType = {
    registerSection: (id: string, ref: React.RefObject<HTMLElement>) => void
    scrollTo: (id: string) => void
}

const ScrollContext = createContext<ScrollContextType | undefined>(undefined)

export const ScrollProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const sectionsRef = useRef<Record<string, React.RefObject<HTMLElement>>>({})

    const registerSection = (id: string, ref: React.RefObject<HTMLElement>) => {
        sectionsRef.current[id] = ref
    }

    const scrollTo = (id: string) => {
        const targetRef = sectionsRef.current[id]
        targetRef?.current?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <ScrollContext.Provider value={{ registerSection, scrollTo }}>
            {children}
        </ScrollContext.Provider>
    )
}

export const useScrollTo = () => {
    const context = useContext(ScrollContext)
    if (!context) throw new Error('useScroll must be used within a ScrollProvider')
    return context
}
