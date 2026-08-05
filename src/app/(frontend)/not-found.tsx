import MobileMenu from '@/components/MobileMenu'
import Section from '@/components/Section'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
    return (
        <>
            <main>
                <Section id='main' className='h-screen'>
                    <div className='container h-full flex flex-col items-center justify-center text-center'>
                        <h1 className='h0'>404</h1>
                        <p className='h3'>
                            This page doesn&apos;t exist...
                            <br />
                            But the developer you&apos;re looking for does.
                        </p>

                        <Link href='/'>
                            <button className='flex justify-center items-center hover:bg-teal/20 focus:bg-teal/20 rounded-full py-3 px-8 text-base font-semibold outline-hidden border-2 border-teal ml-2 transition-all duration-200 ease-in-out'>
                                <ArrowLeft className='mr-3' />
                                Back Home
                            </button>
                        </Link>
                    </div>
                </Section>
            </main>
            <MobileMenu />
        </>
    )
}
