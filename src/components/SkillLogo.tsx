import Image from 'next/image'

type SkillLogoProps = {
    image: string
    heading: string
}

export default function SkillLogo({ image, heading }: SkillLogoProps) {
    return (
        <div className='col-span-1 flex flex-col items-center font-bold gap-4 justify-between'>
            <div className='flex flex-col justify-center h-full max-h-[64px]'>
                <Image className='h-full' src={image} alt='Arrow' width={64} height={64} />
            </div>
            <div>{heading}</div>
        </div>
    )
}
