import axios from 'axios'
import React from 'react'
import { Container } from '@nextui-org/react'

import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'

import { useSession, signIn } from 'next-auth/react'
import { FcGoogle } from 'react-icons/fc'
import { FaFacebookF } from 'react-icons/fa'

import ManagerLogin from '@/components/forms/ManagerLogin'
import DriverLogin from '@/components/forms/DriverLogin'

export default function Signin() {
    const [email, setEmail] = React.useState<string>('')
    const [password, setPassword] = React.useState<string>('')
    const router = useRouter()

    React.useEffect(() => {
        try {
            const jsonwebtoken = require('jsonwebtoken')
            const token = localStorage.getItem('fleetology-user')
            const decoded = jsonwebtoken.decode(token)
            router.push(`/${decoded.user_type}`)
        } catch (err) {
            console.log(err)
        }
    })

    const handleSubmit = async () => {
        console.log(email, password)
        await axios
            .post('http://localhost:3200/login', {
                email: email,
                password: password,
            })
            .then((data) => {
                console.log(data.data.data)
                if (data.data.data.token) {
                    localStorage.setItem(
                        'fleetology-user',
                        data.data.data.token
                    )
                } else {
                    alert(data.data.data.error)
                }
            })
            .catch((err) => console.log(err))
    }

    const [visible, setVisible] = React.useState(false)
    const handler = () => setVisible(true)
    const closeHandler = () => {
        setVisible(false)
        console.log('closed')
    }
    return (
        <div>
            <Container
                display="flex"
                alignItems="center"
                justify="center"
                css={{ minHeight: '100vh' }}
            >
                <ManagerLogin />
                <DriverLogin />
            </Container>
        </div>
    )
}
