import axios from 'axios'
import dynamic from 'next/dynamic'
import { useState, useEffect } from 'react'

const Map = dynamic(() => import('@/components/map'), { ssr: false })

interface Props {
    message: string
}

export default function Test() {
    useEffect(() => {
        try {
            axios
                .get('http://localhost:8000')
                .then((res) => {
                    console.log(res)
                })
                .catch((err) => {
                    console.log(err)
                })
        } catch (err) {
            console.log(err)
        }
    }, [])
    return <Map />
}
