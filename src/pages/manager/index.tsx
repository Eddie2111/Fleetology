import axios from 'axios';
import React from 'react'
import { useRouter } from 'next/router';

import { Card, Text } from "@nextui-org/react";

import { FiRefreshCw } from 'react-icons/fi';

export default function Index(){
  const router = useRouter();
  const [userid, setUserid] = React.useState<string>('');
  const [driverCreate, setDriverCreate] = React.useState<boolean>(true);

  const [driverName, setDriverName] = React.useState<string>('');
  const [driverEmail, setDriverEmail] = React.useState<string>('');
  const [driverPassword, setDriverPassword] = React.useState<string>('');

  React.useEffect(()=>{
    try{
      const jsonwebtoken = require('jsonwebtoken');
      const token = localStorage.getItem("fleetology-user")
      const decoded = jsonwebtoken.decode(token)
      if (decoded.user_type !== 'manager') {
        router.push('/signin')
      }
    }
    catch(err) { 
        console.log(err); 
        router.push('/signin');
    }
  })
  const regenerateID = async() => {
    const uuid = require('uuid');
    const id = uuid.v4();
    setUserid(id); 
    setDriverCreate(driverCreate ? false : true);
    }
    const submitHandle = async() => {
        const jsonwebtoken = require('jsonwebtoken');
        const token = localStorage.getItem("fleetology-user")
        const decoded = jsonwebtoken.decode(token)
        const managerSerial = decoded.serial;
        const driverData= { serial: userid, name: driverName, email: driverEmail, password: driverPassword }
        const driverCreate = await axios.post(process.env.NEXT_PUBLIC_AUTHAPI+"signup", driverData)
        const managerUpdate = await axios.post("api/manager", { serial: managerSerial, driver: userid })
        Promise.all([driverCreate, managerUpdate]).then((data)=>console.log(data)).catch((err)=>console.log(err))
        console.log(driverEmail, driverName, driverPassword, userid)
    }

    return(
        <div>
            <div className="flex flex-col md:flex-row justify-between">

                <div className="h-[32rem] w-[32rem] p-10 mx-auto px-auto">
                    <Card css={{ mw: "400px" }} isHoverable>
                        <Card.Header>
                            <Text>Create Driver</Text>
                            <br/>
                            <Text>Add details here to create your driver</Text>
                        </Card.Header>
                        <Card.Body>
                            <div className="flex flex-row justify-between">
                            <Text>Driver Serial</Text>
                            <button className="bg-blue-500 text-white rounded-lg p-2 mb-2" onClick={regenerateID}><FiRefreshCw/></button>
                            </div>
                            <input type="text" disabled className="border rounded-lg bg-gray-200 p-2 text-gray-500" defaultValue={userid}/>
                            <Text>Driver Name</Text>
                            <input type="text" className="border rounded-lg bg-gray-200 p-2" placeholder="Enter driver name" onChange={(e)=>setDriverName(e.target.value)}/>
                            <Text>Driver Email</Text>
                            <input type="text" className="border rounded-lg bg-gray-200 p-2" placeholder="Enter driver email" onChange={(e)=>setDriverEmail(e.target.value)}/>
                            <Text>Default Password</Text>
                            <input type="text" className="border rounded-lg bg-gray-200 p-2" placeholder="Enter default password" onChange={(e)=>setDriverPassword(e.target.value)}/>
                        </Card.Body>
                        <Card.Footer>
                            <button className='w-32 h-12 bg-blue-400 hover:bg-blue-500 rounded-lg shadow-lg hover:shadow-blue-600 duration-300 disabled:bg-slate-400' disabled={driverCreate} onClick={submitHandle}>
                                Create Driver
                            </button>
                        </Card.Footer>
                    </Card>
                </div>

                
                <div className="h-[32rem] w-[32rem] p-10 mx-auto px-auto">
                    <Card css={{ mw: "400px" }} isHoverable>
                        <Card.Header>
                            <Text>Accept drivers</Text>
                        </Card.Header>
                        <Card.Body>
                            <Text>Accept drivers</Text>
                        </Card.Body>
                        <Card.Footer>
                            <Text>Accept drivers</Text>
                        </Card.Footer>
                    </Card>
                </div>

            </div>

            <div className="flex flex-col md:flex-row justify-between">

            <div className="h-[32rem] w-[32rem] p-10 mx-auto px-auto">
                <Card css={{ mw: "400px" }} isHoverable>
                    <Card.Header>
                        <Text>Show Driver Locations</Text>
                    </Card.Header>
                    <Card.Body>
                        <Text>~ ~</Text>
                    </Card.Body>
                    <Card.Footer>
                        <Text>~ ~</Text>
                    </Card.Footer>
                </Card>
            </div>


            <div className="h-[32rem] w-[32rem] p-2 mx-auto px-auto">
                <Card css={{ mw: "400px" }} isHoverable>
                    <Card.Header>
                        <Text>Show driver profiles</Text>
                    </Card.Header>
                    <Card.Body>
                        <Text>!! </Text>
                    </Card.Body>
                    <Card.Footer>
                        <Text>~ ! ~</Text>
                    </Card.Footer>
                </Card>
            </div>

            </div>


        </div>
    )
}