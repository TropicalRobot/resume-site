import { Raleway, Noto_Sans, Oooh_Baby } from 'next/font/google'

const ooohBaby = Oooh_Baby({
    variable: '--font-script',
    subsets: ['latin'],
    weight: '400'
})

const notoSans = Noto_Sans({
    variable: '--font-heading',
    subsets: ['latin'],
    display: 'swap',
    weight: '900'
})

const raleway = Raleway({
    variable: '--font-body',
    subsets: ['latin'],
    display: 'swap',
    weight: ['400', '700']
})

export { ooohBaby, notoSans, raleway }
