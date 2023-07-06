import dynamic from 'next/dynamic'
import IntroCard from '@/components/cards/introcard'

const Lottie = dynamic(() => import('lottie-react'), { ssr: false })

import RouteFinding from '@/animation/routefinding.json'
import CarMovement from '@/animation/carmovement.json'
import TrackingPackage from '@/animation/trackingpage.json'

export default function Services(){
    return(
        <div className="m-auto p-auto justify-center md:w-[70%] w-[90%]">
            <div className="flex flex-col md:flex-row justify-between my-10">
                <div className="h-32 mt-10">
                <IntroCard
                    title="Route Finding"
                    description="We provide the best route for your package to be delivered in the fastest time possible"
                />
                </div>
                <Lottie
                        animationData={RouteFinding}
                        style={{ height: "50%", width: "50%" }}
                        className="mt-5"
                    />
            </div>

            <div className="flex flex-col md:flex-row justify-between my-10">
                <Lottie
                        animationData={CarMovement}
                        style={{ height: "50%", width: "50%" }}
                        className="mt-5"
                    />
            <div className="h-32 mt-10">
                <IntroCard
                    title="Hasselless tracking"
                    description="With Fleetology, you can track your package in real time and get notified when it is delivered"
                />
                </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between my-10">
            <div className="h-32 mt-10">
                <IntroCard
                    title="Asset Status Tracking"
                    description="With Fleetology, you can track your asset in real time in case of theft or any other mishap with emergency services"
                />
                </div>
                <Lottie
                        animationData={TrackingPackage}
                        style={{ height: "50%", width: "50%" }}
                        className="mt-5"
                    />
            </div>

        </div>
    )
}