import React from 'react'
import Image from 'next/image'
import type { ImageProps } from '@/types'
import { BackgroundGradient } from '@/components/ui/shadcn-io/background-gradient'

type CardProps = {
    image?: ImageProps
    heading?: string
    text?: string
}

const Card: React.FC<CardProps> = ({ heading, text, image }) => {
    return (
        <BackgroundGradient className='rounded-[22px] p-4 sm:p-10 bg-white dark:bg-zinc-900'>
            <div className='h-full py-8 lg:py-12 px-4 rounded-3xl bg-white/50 border-[#efe9dc] border-2 box-shadow-[rgb(239 233 220 / 80%) 0px 0px 30px'>
                <div className='flex-col items-center text-center mx-auto relative'>
                    {image?.url && (
                        <Image
                            className='mx-auto mb-12 max-h-[260px]'
                            src={image.url}
                            width={image.width}
                            height={image.height}
                            alt={image.alt}
                        />
                    )}
                    <div className='px-4'>
                        <h3 className='mb-6 text-3xl font-bold'>{heading}</h3>
                        <p className='md:text-lg xl:text-xl'>{text}</p>
                    </div>
                </div>
            </div>
        </BackgroundGradient>
    )
}

export default Card
