import axios from 'axios'
import React from 'react'

import { Card } from '@nextui-org/react'

type ResponseData = {
    data: any
}

const AllowDriver: React.FC = () => {
    const [ requestList, setRequestList ] = React.useState<string[]>([]);
    // typesetting required
    React.useEffect(() => {
        try{
            const jsonwebtoken = require('jsonwebtoken')
            const token = localStorage.getItem('fleetology-user')
            const decoded = jsonwebtoken.decode(token)
            //console.log(decoded)
            const response = 
            axios.post<ResponseData>("api/requests",{command: "get drivers",serial:decoded.serial})
            .then((res)=>{ 
                //console.log(res.data)
                if (res.data.data[0]) {
                    setRequestList(res.data.data[0].drivers);
                } else {
                    setRequestList([]);
                }
            })
            .catch(res=>{
                //console.log(res)
                setRequestList([]);
            })
        }
        catch(err){
            //console.log(err)
        }
    },[]);
    return(
        <Card css={{ mw: '400px' }} isHoverable>
            <Card.Header>
                <p>Accept Driver Requests</p>
            </Card.Header>
            <Card.Body>
                <div className="p-2 w-full shadow-md bg-gray-200 h-[320px] overflow-y-auto">
                    { requestList.map((request,index) => (
                        <div className="" key={index}>
                        <p>Serial: 32r-43rf-43f-tre</p>
                        <p>Driver Name: John Doe</p>
                        <div className="flex flex-row justify-between">
                            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded active:bg-green-400 duration-300">
                                Accept
                            </button>
                            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded active:bg-red-400 duration-300">
                                Reject
                            </button>
                        </div>
                        <div className="h-[1px] w-full bg-gray-300 mt-1 rounded-md"></div>
                    </div>
                    ))}
                </div>
            </Card.Body>
            <Card.Footer>
                
            </Card.Footer>
        </Card>
    )
}
export interface AllowDriverProps {};
export default AllowDriver;