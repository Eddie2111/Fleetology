import dynamic from 'next/dynamic';
const ChakraProvider = dynamic(() => import('@chakra-ui/react').then((mod) => mod.ChakraProvider), { ssr: false });
//import { ChakraProvider } from '@chakra-ui/react';
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import Navbar from '../../components/navbar/main';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider>
            <Navbar/>
            <Component {...pageProps} />
        </ChakraProvider>
    )
}
