import axios from 'axios'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { useSession, signIn } from 'next-auth/react'
import React from 'react'

import { Container, Modal } from '@nextui-org/react'
import { FcGoogle } from 'react-icons/fc'
import { FaFacebookF } from 'react-icons/fa'

const Card = dynamic(
    () => import('@nextui-org/react').then((mod) => mod.Card),
    {
        ssr: false,
    }
)
const Text = dynamic(
    () => import('@nextui-org/react').then((mod) => mod.Text),
    {
        ssr: false,
    }
)
const Button = dynamic(
    () => import('@nextui-org/react').then((mod) => mod.Button),
    {
        ssr: false,
    }
)
const Input = dynamic(
    () => import('@nextui-org/react').then((mod) => mod.Input),
    {
        ssr: false,
    }
)
const Row = dynamic(() => import('@nextui-org/react').then((mod) => mod.Row), {
    ssr: false,
})
const Checkbox = dynamic(
    () => import('@nextui-org/react').then((mod) => mod.Checkbox),
    {
        ssr: false,
    }
)
const Spacer = dynamic(
    () => import('@nextui-org/react').then((mod) => mod.Spacer),
    {
        ssr: false,
    }
)

const ManagerLogin = () => {
    const [email, setEmail] = React.useState<string>('')
    const [password, setPassword] = React.useState<string>('')
    const [visible, setVisible] = React.useState(false)
    const router = useRouter();
    const handler = () => setVisible(true)
    const closeHandler = () => {
        setVisible(false)
        console.log('closed')
    }
    const handleSubmit = async () => {
        console.log(email, password)
        await axios
            .post(process.env.NEXT_PUBLIC_AUTHAPI+'login', {
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
                    router.push('/driver')
                } else {
                    alert(data.data.data.error)
                }
            })
            .catch((err) => console.log(err))
    }

    return (
        <div>
            <Button auto shadow color="warning" onPress={handler}>
                Driver
            </Button>
            <Modal
                closeButton
                aria-labelledby="modal-title"
                open={visible}
                onClose={closeHandler}
            >
                <Modal.Header>
                    <div className="flex flex-col items-center justify-center">
                        <Text
                            size={24}
                            weight="bold"
                            css={{ as: 'center', mb: '20px' }}
                        >
                            Driver Login
                        </Text>
                        <Button
                            icon={<FcGoogle />}
                            color="success"
                            onPress={() => signIn('google')}
                        >
                            Google
                        </Button>
                        <Spacer y={1} />
                        <Button
                            icon={<FaFacebookF />}
                            color="success"
                            onPress={() => signIn('facebook')}
                        >
                            Facebook
                        </Button>
                        <Spacer y={1} />
                    </div>
                </Modal.Header>
                <Modal.Body>
                    <Input
                        clearable
                        bordered
                        fullWidth
                        color="primary"
                        size="lg"
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <Input
                        clearable
                        bordered
                        fullWidth
                        color="primary"
                        size="lg"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <Row justify="space-between">
                        <Checkbox>
                            <Text size={14}>Remember me</Text>
                        </Checkbox>
                        <Text size={14}>Forgot password?</Text>
                    </Row>
                    <Spacer y={1} />
                    <Button onPress={handleSubmit}>Sign in</Button>
                </Modal.Body>
            </Modal>
        </div>
    )
}
export default ManagerLogin
