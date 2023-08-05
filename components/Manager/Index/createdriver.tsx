import axios from 'axios';
import React from 'react';
import { NextPage } from 'next';

import { Card, Text } from '@nextui-org/react';

import { FiRefreshCw } from 'react-icons/fi';

const CreateDriver: NextPage = () => {
    const [userid, setUserid] = React.useState<string>('')
    const [driverCreate, setDriverCreate] = React.useState<boolean>(true)

    const [driverName, setDriverName] = React.useState<string>('')
    const [driverEmail, setDriverEmail] = React.useState<string>('')
    const [driverPassword, setDriverPassword] = React.useState<string>('')

        const regenerateID = async () => {
        const uuid = require('uuid')
        const id = uuid.v4()
        setUserid(id)
        setDriverCreate(driverCreate ? false : true)
    }
    const submitHandle = async () => {
        const jsonwebtoken = require('jsonwebtoken')
        const token = localStorage.getItem('fleetology-user')
        const decoded = jsonwebtoken.decode(token)
        const managerSerial = decoded.serial
        const driverData = {
            serial: userid,
            user_type: 'driver',
            email: driverEmail,
            password: driverPassword,
        }
        const driverCreate = await axios.post(
            process.env.NEXT_PUBLIC_AUTHAPI + 'signup',
            driverData
        )
        .then(()=>console.log('driver created'))
        .catch((err:any):any=>console.log(err))
        console.log(managerSerial)
        const managerUpdate = await axios.post('api/requests', 
        {
            command:"create driver",
            managerData:{
                serial: managerSerial,
                driver: userid,
            },
            driverData: {
                serial:driverData.serial,
                name:driverName
            }
        }
        )
        Promise.all([driverCreate, managerUpdate])
            .then((data) => {
                //gett all the data returned from the promises
                console.log(data)
        })
            .catch((err) => console.log(err))
        setDriverEmail('')
        setDriverName('')
        setDriverPassword('')
        setUserid('')
        setDriverCreate(true)
        console.log(driverEmail, driverName, driverPassword, userid)
    }

    return(
                    <Card css={{ mw: '400px' }} isHoverable>
                        <Card.Header>
                            <Text>Create Driver</Text>
                            <br />
                            <Text>Add details here to create your driver</Text>
                        </Card.Header>
                        <Card.Body>
                            <div className="flex flex-row justify-between">
                                <Text>Driver Serial</Text>
                                <button
                                    className="bg-blue-500 text-white rounded-lg p-2 mb-2"
                                    onClick={regenerateID}
                                >
                                    <FiRefreshCw />
                                </button>
                            </div>
                            <input
                                type="text"
                                disabled
                                className="border rounded-lg bg-gray-200 p-2 text-gray-500"
                                defaultValue={userid}
                            />
                            <Text>Driver Name</Text>
                            <input
                                type="text"
                                className="border rounded-lg bg-gray-200 p-2"
                                placeholder="Enter driver name"
                                value={driverName}
                                onChange={(e) => setDriverName(e.target.value)}
                            />
                            <Text>Driver Email</Text>
                            <input
                                type="text"
                                className="border rounded-lg bg-gray-200 p-2"
                                placeholder="Enter driver email"
                                value={driverEmail}
                                onChange={(e) => setDriverEmail(e.target.value)}
                            />
                            <Text>Default Password</Text>
                            <input
                                type="text"
                                className="border rounded-lg bg-gray-200 p-2"
                                placeholder="Enter default password"
                                value={driverPassword}
                                onChange={(e) =>
                                    setDriverPassword(e.target.value)
                                }
                            />
                        </Card.Body>
                        <Card.Footer>
                            <button
                                className="w-32 h-12 bg-blue-400 hover:bg-blue-500 rounded-lg shadow-lg hover:shadow-blue-600 duration-300 disabled:bg-slate-400"
                                disabled={driverCreate}
                                onClick={submitHandle}
                            >
                                Create Driver
                            </button>
                        </Card.Footer>
                    </Card>
    )
}

export interface CreateDriverProps {};
export default CreateDriver;