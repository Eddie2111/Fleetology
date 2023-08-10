import dynamic from 'next/dynamic'
import React, { useState } from 'react'
import { Transition } from '@headlessui/react'
import Link from 'next/link'
import { Container, Button, Text, Row, Col, Card } from '@nextui-org/react'

const ManagerSignup = dynamic(() => import('@/components/modals/managersignup'))
const DriverSignup = dynamic(() => import('@/components/modals/driversignup'))

interface Props {
    role: string
    email: string
    password: string
    confirmPassword: string
}

const SignupPage = () => {
    const [role, setRole] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState({
        role: '',
        email: '',
        password: '',
        confirmPassword: '',
    })
    const handleSignup = () => {
        // TODO: Add signup logic here
        const data: Props = {
            role: role,
            email: email,
            password: password,
            confirmPassword: confirmPassword,
        }
        console.log(data)
    }

    return (
        <div className="mt-[-10px] md:mt-[0px]">
        <p className="justify-center text-center text-4xl font-semibold mb-5">
            Sign up as
        </p>
        <Container
            display="flex"
            justify="center"
            css={{ minHeight: '50vh' }}
        >
            <Card isPressable css={{w:"280px",h:"200px"}} style={{marginRight:"25px"}}>
                <Card.Body css={{ p: 0 }}>
                    <Card.Header>
                        <Text b>Have fleet?</Text>
                    </Card.Header>
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
                    <ManagerSignup />
                </Row>
                </Card.Footer>
            </Card>

            <Card isPressable css={{w:"280px",h:"200px"}}>
                <Card.Body css={{ p: 0 }}>
                    <Card.Header>
                        <Text b>Have a car?</Text>
                    </Card.Header>
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
                    <DriverSignup />
                </Row>
                </Card.Footer>
            </Card>

    </Container>

    <p className="justify-center text-center text-4xl font-semibold mb-5">
            Have Account?  &nbsp;
            <Link href="/signin" className="text-blue-500 hover:text-blue-600 hover:underline hover:underline-offset-1 duration-300">
                Login Here
            </Link>
        </p>

        </div>
    
    )
}

export default SignupPage
/*
            <div className="w-80 mx-auto p-6 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-6">Sign up</h2>
                <div>
                    <label
                        htmlFor="role"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Role
                    </label>
                    <select
                        id="role"
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                    >
                        <option value="">Select Role</option>
                        <option value="manager">Manager</option>
                        <option value="driver">Driver</option>
                    </select>
                </div>
                <div className="mt-4">
                    <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Email
                    </label>
                    <input
                        id="email"
                        type="email"
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="mt-4">
                    <label
                        htmlFor="password"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Password
                    </label>
                    <input
                        id="password"
                        type="password"
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="mt-4">
                    <label
                        htmlFor="confirmPassword"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Confirm Password
                    </label>
                    <input
                        id="confirmPassword"
                        type="password"
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </div>
                <div className="mt-6">
                    <button
                        className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                        onClick={handleSignup}
                    >
                        Sign up
                    </button>
                </div>
            </div>
*/
