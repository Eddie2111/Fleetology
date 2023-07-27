import dynamic from 'next/dynamic'
import React from 'react'

import IntroCard from '../cards/introcard'

const HomeCard: React.FC = () => {
    return (
        <div className="flex flex-col md:flex-row mx-auto p-2 justify-between w-[90%]">
            <IntroCard
                title="Welcome to the Fleetology"
                description="This is a fleet manager application that allows you to manage your fleet of vehicles."
            />
            <IntroCard
                title="Fleetology"
                description="This is a fleet manager application that allows you to manage your fleet of vehicles."
            />
            <IntroCard
                title="Fleetology"
                description="This is a fleet manager application that allows you to manage your fleet of vehicles."
            />
        </div>
    )
}
export default HomeCard
