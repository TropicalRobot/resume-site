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
        const target = targetRef?.current
        if (!target) return

        // Smooth scroll into view
        target.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' })

        const focusTarget = () => {
            const hadTabIndex = target.hasAttribute('tabindex')
            if (!hadTabIndex) target.setAttribute('tabindex', '-1') // make programmatically focusable
            target.focus({ preventScroll: true })
            if (!hadTabIndex) {
                target.addEventListener('blur', () => target.removeAttribute('tabindex'), {
                    once: true
                })
            }
        }

        // Prefer IntersectionObserver to know when it’s visible
        if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
            const io = new IntersectionObserver(
                (entries) => {
                    if (entries.some((e) => e.isIntersecting)) {
                        io.disconnect()
                        focusTarget()
                    }
                },
                { root: null, threshold: 0.25 }
            )
            io.observe(target)

            // Safety fallback if observer doesn’t fire (e.g., already visible)
            setTimeout(() => {
                try {
                    io.disconnect()
                } catch {}
                focusTarget()
            }, 700)
        } else {
            // Fallback: delay then focus
            setTimeout(focusTarget, 400)
        }
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
