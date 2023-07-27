import React from 'react'
import { useRouter } from 'next/router'

export default function Logout(){
    const router = useRouter()
    React.useEffect(() => {
        localStorage.removeItem('fleetology-user')
        window.location.href = '/'
    })
    return <div></div>
}