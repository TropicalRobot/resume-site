'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'motion/react'

const MousePointer = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 })
    const [isHoveringLink, setIsHoveringLink] = useState(false)

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY })
        }

        const handleMouseOver = (e: MouseEvent) => {
            if ((e.target as HTMLElement).tagName.toLowerCase() === 'a') {
                setIsHoveringLink(true)
            }
        }

        const handleMouseOut = (e: MouseEvent) => {
            if ((e.target as HTMLElement).tagName.toLowerCase() === 'a') {
                setIsHoveringLink(false)
            }
        }

        window.addEventListener('mousemove', handleMouseMove)
        window.addEventListener('mouseover', handleMouseOver)
        window.addEventListener('mouseout', handleMouseOut)

        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
            window.removeEventListener('mouseover', handleMouseOver)
            window.removeEventListener('mouseout', handleMouseOut)
        }
    }, [])

    return (
        <motion.div
            className='fixed top-0 left-0 w-8 h-8 backdrop-invert backdrop-grayscale rounded-full pointer-events-none z-100'
            animate={{
                x: position.x,
                y: position.y,
                scale: isHoveringLink ? 1.5 : 1
            }}
            transition={{
                type: 'spring',
                stiffness: 2000,
                damping: 80
            }}
            style={{ translateX: '-50%', translateY: '-50%' }} // Center the dot on cursor
        />
    )
}

export default MousePointer
