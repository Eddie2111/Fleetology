import dynamic from 'next/dynamic'
import type { AppProps } from 'next/app'
import { NextUIProvider } from '@nextui-org/react'
import { SessionProvider } from 'next-auth/react'

import '../styles/globals.css'
import 'mapbox-gl/dist/mapbox-gl.css'

const Navbar = dynamic(() => import('@/components/navbar'), { ssr: false })
const Footer = dynamic(() => import('@/components/footer'), { ssr: false })

export default function App({
    Component,
    pageProps: { session, ...pageProps },
}: AppProps & { Component: React.ComponentType }) {
    return (
        <>
            <NextUIProvider>
                <SessionProvider session={session}>
                    <Navbar />
                    <Component {...pageProps} />
                    <Footer />
                </SessionProvider>
            </NextUIProvider>
        </>
    )
}
