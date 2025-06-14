import type { Config } from 'tailwindcss'
import screens from './tailwind.screens'

export default {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}'
    ],
    theme: {
        screens: screens,
        container: {
            center: true,
            padding: {
                DEFAULT: '20px',
                xs: '30px',
                sm: '30px',
                lg: '48px',
                xl: '80px',
                '2xl': '80px'
            }
        },
        extend: {
            scale: {
                '120': '1.2'
            },
            colors: {
                background: 'var(--background)',
                foreground: 'var(--foreground)',
                'blue-dark': '#01010D',
                yellow: '#FECC2D',
                teal: '#26c7c4',
                red: '#FD3D39',
                cream: '#FCF8F4',
                white: '#FFFFFF',
                black: '#000000',
                slate: {
                    900: '#263238'
                }
            },
            fontSize: {
                'desktop-heading-0': ['130px', '140px'],
                'tablet-heading-0': ['90px', '100px'],
                'desktop-heading-1': ['64px', 'normal'],
                'tablet-heading-1': ['48px', '50px'],
                'heading-0': ['48px', '50px'],
                'heading-1': ['32px', 'normal']
            },
            lineHeight: {
                base: '1'
            },
            fontFamily: {
                script: ['var(--font-script)'],
                heading: ['var(--font-heading)'],
                body: ['var(--font-body)']
            }
        }
    },
    plugins: [
        ({ addComponents }: any) => {
            addComponents({
                '.container': {
                    maxWidth: '100%',
                    '@screen sm': {
                        maxWidth: '100%'
                    },
                    '@screen md': {
                        maxWidth: '640px'
                    },
                    '@screen lg': {
                        maxWidth: '100%'
                    },
                    '@screen xl': {
                        maxWidth: '1260px'
                    },
                    '@screen 2xl': {
                        maxWidth: '1560px'
                    }
                }
            })
        }
    ]
} satisfies Config
