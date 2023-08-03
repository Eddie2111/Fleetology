import axios from 'axios'
import React from 'react'
import dynamic from 'next/dynamic'
import { Modal } from '@nextui-org/react'

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
const Text = dynamic(
    () => import('@nextui-org/react').then((mod) => mod.Text),
    {
        ssr: false,
    }
)
const Checkbox = dynamic(
    () => import('@nextui-org/react').then((mod) => mod.Checkbox),
    {
        ssr: false,
    }
)
const Row = dynamic(() => import('@nextui-org/react').then((mod) => mod.Row), {
    ssr: false,
})
// investigate why is this here
export function getServerSideProps() {
    const uuid = require('uuid')
    const id = uuid.v4()
    return {
        props: {
            id,
        },
    }
}
////////////////////////////////

export default function DriverSignup() {
    const [visible, setVisible] = React.useState(false)
    const [email, setEmail] = React.useState<string>('')
    const [password, setPassword] = React.useState<string>('')
    const [confirmPassword, setConfirmPassword] = React.useState<string>('')

    const handler = () => setVisible(true)

    const SubmitHandler = () => {
        const id = require('uuid').v4()
        console.log(email, password, confirmPassword)
        if (password !== confirmPassword) {
            alert('Passwords do not match')
        } else {
            // signup complete create response
            axios
                .post(process.env.NEXT_PUBLIC_AUTHAPI+'signup', {
                    serial: id,
                    email: email,
                    password: password,
                    user_type: 'driver',
                })
                .then((data) => console.log(data))
                .catch((err) => console.log(err))
        }

        //closeHandler()
    }
    const closeHandler = () => {
        setVisible(false)
        console.log('closed')
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
                    <Text id="modal-title" size={18}>
                        Signup as a{' '}
                        <Text b size={18}>
                            Driver
                        </Text>
                    </Text>
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
                    <Input
                        clearable
                        bordered
                        fullWidth
                        color="primary"
                        size="lg"
                        placeholder="Confirm Password"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <Row justify="space-between"></Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button auto flat color="error" onPress={closeHandler}>
                        Close
                    </Button>
                    <Button auto onPress={SubmitHandler}>
                        Sign Up
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
