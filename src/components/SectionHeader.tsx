// import { ReactNode } from "react";
import clsx from 'clsx'

interface SectionHeaderProps {
    className?: string
    justify?: 'start' | 'center' | 'end'
    headerJustify?: 'start' | 'center' | 'end'
    heading: string
    intro?: string
}

export default function SectionHeader({
    className,
    justify = 'start',
    heading,
    intro = ''
}: SectionHeaderProps) {
    return (
        <div className={clsx(className, 'flex flex-col', `items-${justify}`)}>
            <h2 className='text-heading-1 lg:text-tablet-heading-1 xl:text-desktop-heading-1 mb-4 pb-2 border-b-[3px] border-teal'>
                {heading}
            </h2>
            {intro && <p className='font-semibold text-lg'>{intro}</p>}
        </div>
    )
}
