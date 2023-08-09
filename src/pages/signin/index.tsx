import axios from 'axios'
import React from 'react'
import { Container } from '@nextui-org/react'

import dynamic from 'next/dynamic'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { useSession, signIn } from 'next-auth/react'
import { FcGoogle } from 'react-icons/fc'
import { FaFacebookF } from 'react-icons/fa'

import { Button, Text, Row, Col, Card } from '@nextui-org/react'


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
    <div className="mt-[-10px] md:mt-[0px]">
        <p className="justify-center text-center text-4xl font-semibold mb-5">
            Sign in to your account
        </p>
        <Container
            display="flex"
            justify="center"
            css={{ minHeight: '50vh' }}
        >
            <Card isPressable css={{w:"280px",h:"200px"}} style={{marginRight:"25px"}}>
                <Card.Body css={{ p: 0 }}>
                <Card.Image
                    src="/animations/manager.gif"
                    objectFit="cover"
                    width="40%"
                    height={140}
                    alt={"Orange"}
                />
                </Card.Body>
                <Card.Footer css={{ justifyItems: "flex-start" }}>
                <Row wrap="wrap" justify="space-between" align="center">
                    <Text b>Manager</Text>
                    <ManagerLogin />
                </Row>
                </Card.Footer>
            </Card>

            <Card isPressable css={{w:"280px",h:"200px"}}>
                <Card.Body css={{ p: 0 }}>
                <Card.Image
                    src="/animations/driver.gif"
                    objectFit="cover"
                    width="40%"
                    height="100%"
                    alt={"Orange"}
                />
                </Card.Body>
                <Card.Footer css={{ justifyItems: "flex-start" }}>
                <Row wrap="wrap" justify="space-between" align="center">
                    <Text b>Driver</Text>
                    <DriverLogin />
                </Row>
                </Card.Footer>
            </Card>

    </Container>

    <p className="justify-center text-center text-4xl font-semibold mb-5">
            No Account?  &nbsp;
            <Link href="/signup" className="text-blue-500 hover:text-blue-600 hover:underline hover:underline-offset-1 duration-300">
                Sign up today
            </Link>
        </p>

        </div>
    )
}
