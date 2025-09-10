import { motion, useScroll, useReducedMotion, useMotionValue } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

type HorizontalScrollCarouselProps = {
    children: React.ReactNode
}

const HorizontalScrollCarousel: React.FC<HorizontalScrollCarouselProps> = ({ children }) => {
    const sectionRef = useRef<HTMLElement | null>(null)
    const stickyRef = useRef<HTMLDivElement | null>(null)
    const trackRef = useRef<HTMLDivElement | null>(null)

    const prefersReducedMotion = useReducedMotion()

    // Use a linear, invertible scroll progress mapping
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start start', 'end end']
    })

    // We drive x in pixels based on maxShift
    const x = useMotionValue(0)
    const [maxShift, setMaxShift] = useState(0)
    const [leftPad, setLeftPad] = useState(0)

    // Measure the horizontal track and viewport to compute maxShift
    useEffect(() => {
        const measure = () => {
            const track = trackRef.current
            const sticky = stickyRef.current
            if (!track || !sticky) return
            const pad = parseFloat(getComputedStyle(track).paddingLeft || '0')
            setLeftPad(pad)

            const trackWidth = track.scrollWidth // full content width
            const viewportWidth = sticky.clientWidth
            const desired = Math.max(0, trackWidth - viewportWidth) // how far we need to translate to reveal all content
            setMaxShift(desired)
        }

        measure()
        window.addEventListener('resize', measure)
        return () => window.removeEventListener('resize', measure)
    }, [])

    // Link vertical scroll progress to horizontal translate
    useEffect(() => {
        const unsub = scrollYProgress.on('change', (p) => {
            x.set(-p * maxShift)
        })
        return () => unsub()
    }, [scrollYProgress, x, maxShift])

    // When any focusable child receives focus, scroll the page so that item is revealed
    const handleFocusCapture = (e: React.FocusEvent<HTMLDivElement>) => {
        const el = e.target as HTMLElement
        const track = trackRef.current
        const sticky = stickyRef.current
        const section = sectionRef.current
        if (!track || !sticky || !section || !track.contains(el)) return

        // Compute desired horizontal shift to center (or at least reveal) the focused element
        // offsetLeft is relative to the track
        const itemLeft = (el as any).offsetLeft ?? 0
        const itemWidth = (el as any).offsetWidth ?? 0
        const viewportWidth = sticky.clientWidth

        // Try to center the item; clamp to [0, maxShift]
        const desiredShift = Math.min(
            Math.max(0, itemLeft - (viewportWidth - itemWidth) / 2 - leftPad),
            maxShift
        )

        // Convert desired horizontal shift to vertical scroll progress
        const targetProgress = maxShift > 0 ? desiredShift / maxShift : 0

        // Map progress back to page scroll within this section (linear due to our offset above)
        const sectionRect = section.getBoundingClientRect()
        const sectionTop = sectionRect.top + window.scrollY
        const availableY = section.offsetHeight - window.innerHeight
        const targetY = sectionTop + targetProgress * Math.max(availableY, 0)

        window.scrollTo({ top: targetY, behavior: 'smooth' })
    }

    // Reduced motion = native horizontal scroll with scroll snapping, which is automatically keyboard-friendly
    if (prefersReducedMotion) {
        return (
            <section ref={sectionRef} className='relative'>
                <div
                    ref={stickyRef}
                    className='relative w-full overflow-x-auto overflow-y-visible snap-x snap-mandatory'
                    role='region'
                    aria-label='Image carousel'
                    onFocusCapture={handleFocusCapture}>
                    <div ref={trackRef} className='flex gap-10 pl-[20px] lg:pl-[50%]'>
                        {children}
                    </div>
                </div>
            </section>
        )
    }

    return (
        <section ref={sectionRef} className='relative h-[300vh]' aria-label='Image carousel'>
            <div
                ref={stickyRef}
                className='sticky top-0 flex h-screen items-center overflow-x-hidden overflow-y-visible'
                role='region'
                aria-roledescription='carousel'
                onFocusCapture={handleFocusCapture}>
                <div
                    className='absolute top-0 left-0 bottom-0 flex align-middle pointer-events-none'
                    aria-hidden='true'>
                    <Image
                        className='m-auto opacity-40'
                        src='/images/mention-bro.svg'
                        width={600}
                        height={400}
                        alt=''
                    />
                </div>

                <motion.div
                    ref={trackRef}
                    style={{ x }}
                    className='flex gap-10 pl-[20px] lg:pl-[50%] relative z-10'>
                    {children}
                </motion.div>
            </div>
        </section>
    )
}

export default HorizontalScrollCarousel
