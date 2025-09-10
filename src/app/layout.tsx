import type { Metadata } from 'next'
import '@/styles/globals.css'
import { ooohBaby, notoSans, raleway } from './fonts'
import Script from 'next/script'
import { SpeedInsights } from '@vercel/speed-insights/next'

import SiteHeader from '@/components/layout/SiteHeader'
import SiteFooter from '@/components/layout/SiteFooter'
import clsx from 'clsx'
import { MobileMenuProvider } from '@/providers/MobileMenuProvider'
import { ScrollProvider } from '@/providers/ScrollProvider'

export const metadata: Metadata = {
    title: "Hi I'm Ryan | Full Stack Web Developer",
    description: 'Resume site for Ryan Griffiths - Full Stack Web Developer',
    openGraph: {
        type: 'website',
        url: 'https://ryangriffiths.me',
        title: "Hi I'm Ryan | Full Stack Web Developer",
        description: 'Resume site for Ryan Griffiths - Full Stack Web Developer',
        siteName: 'Ryan Griffiths - Full Stack Web Developer',
        images: [{ url: 'https://ryangriffiths.me/images/photoshoot-author-1440.avif' }]
    }
}

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang='en'>
            <head>
                {/* Preconnect for later GA requests (non-blocking) */}
                <link rel='preconnect' href='https://www.googletagmanager.com' />
                <link rel='preconnect' href='https://www.google-analytics.com' crossOrigin='' />

                {/* Load gtag lazily */}
                <Script
                    src='https://www.googletagmanager.com/gtag/js?id=G-BQJXSX1GXY'
                    strategy='lazyOnload'
                />
                <Script id='gtag-init' strategy='lazyOnload'>
                    {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-BQJXSX1GXY');
                `}
                </Script>
            </head>
            <MobileMenuProvider>
                <ScrollProvider>
                    <body
                        className={clsx(
                            ooohBaby.variable,
                            notoSans.variable,
                            raleway.variable,
                            'antialiased'
                        )}>
                        <SiteHeader />
                        {children}
                        <SiteFooter />
                        <SpeedInsights />
                    </body>
                </ScrollProvider>
            </MobileMenuProvider>
        </html>
    )
}
