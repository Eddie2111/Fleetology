import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'

const HomeCard = dynamic(() => import('@/components/cards/HomeCard'))
const Lottie = dynamic(() => import('lottie-react'), { ssr: false })
import Uber from '@/animation/uber.json'

export default function Home() {
    return (
        <div className="text-black text-4xl">
            <motion.div
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-center justify-center"
            >
                <center>
                    <Lottie
                        animationData={Uber}
                        style={{ height: 500, width: 500, borderRadius: 10 }}
                        className="rounded-md"
                    />
                </center>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 200 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-center justify-center"
            >
                <div className="flex flex-row text-center justify-between w-[80%] mx-auto px-auto">
                    <HomeCard />
                </div>
            </motion.div>
        </div>
    )
}
