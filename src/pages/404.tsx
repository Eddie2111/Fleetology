import dynamic from 'next/dynamic'

const Lottie = dynamic(() => import('lottie-react'), { ssr: false })

import Error404 from '@/animation/page404.json'

export default function Custom404() {
    return (
        <>
            <center>
                <Lottie
                    animationData={Error404}
                    style={{ height: '80%', width: '80%', marginTop: '-5rem' }}
                    className="rounded-md"
                />
            </center>
        </>
    )
}
