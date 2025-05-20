'use client'

import React from 'react'
import Image from 'next/image'
import clsx from 'clsx'

type ScrollDownArrowProps = {
    className?: string
}

const ScrollDownArrow: React.FC<ScrollDownArrowProps> = ({ className }) => {
    return (
        <div className={clsx('button-link', className)}>
            <div className='relative flex justify-center'>
                <Image
                    className='mb-4 rotate-[45deg]'
                    src='/images/arrow.png'
                    alt=''
                    width='50'
                    height='40'
                />
            </div>
            <span className='font-script font-bold text-2xl whitespace-nowrap'>This way</span>
        </div>
    )
}
export default ScrollDownArrow
