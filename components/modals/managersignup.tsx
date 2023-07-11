import axios from 'axios'
import React from 'react'
import { Modal, Button, Text, Input, Row, Checkbox } from '@nextui-org/react'

export default function ManagerSignup() {
    const [visible, setVisible] = React.useState(false)
    const [email, setEmail] = React.useState<string>('')
    const [password, setPassword] = React.useState<string>('')
    const [confirmPassword, setConfirmPassword] = React.useState<string>('')

    const handler = () => setVisible(true)
    const closeHandler = () => {
        setVisible(false)
        console.log('closed')
    }
    const SubmitHandler = () => {
        const uuid = require('uuid')
        const id = uuid.v4()
        console.log(email, password, confirmPassword)
        if (password !== confirmPassword) {
            alert('Passwords do not match')
        }
        else{
            // signup complete create response
            axios.post("http://localhost:3200/signup", {
                serial: id,
                email: email,
                password: password,
                user_type: 'manager',
            }).then((data)=>{console.log(data); closeHandler()})
              .catch((err)=>console.log(err))
        }
    }

    return (
        <div>
            <Button auto shadow color="warning" onPress={handler}>
                Manager
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
                            Manager
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
                    <div className="flex flex-row justify-between">
                        <Button auto flat color="error" onPress={closeHandler}>
                            Close
                        </Button>
                        <Button auto onPress={SubmitHandler}>
                            Sign Up
                        </Button>
                    </div>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
