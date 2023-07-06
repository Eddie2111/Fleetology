import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'

import Services from './services'

const Lottie = dynamic(() => import('lottie-react'), { ssr: false })
const HomeCard = dynamic(() => import('@/components/home/HomeCard'))
import Uber from '@/animation/fleetlogo.json'

export default function Home() {
    return (
        <div className="text-black text-4xl my-2 py-5 pb-10 mb-10">
            <motion.div
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-center justify-center"
            >
                <center>
                    <Lottie
                        animationData={Uber}
                        style={{
                            height: '70%',
                            width: '70%',
                            marginTop: '-5rem',
                        }}
                        className="rounded-md"
                    />
                    <p className="text-4xl mb-[3rem]">
                        {' '}
                        Making your shipments secure and acknowledged
                    </p>
                    <p className="text-xl mb-[3rem]">
                        {' '}
                        What Fleetology Provides
                    </p>
                </center>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 200 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-center justify-center"
            >
                <div className="flex flex-row text-center justify-between w-[80%] mx-auto px-auto"></div>
                <Services />
            </motion.div>
        </div>
    )
}
