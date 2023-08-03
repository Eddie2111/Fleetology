import axios from 'axios';
import React from 'react'

export default function Index() {
    React.useEffect(()=>{
        try{
            const jsonwebtoken = require('jsonwebtoken');
            const token = localStorage.getItem('fleetology-user');
            const response = (async ()=>{
                const userData = await axios.post("api/usertoken",{token})
                const managerData = await axios.post("api/driver",{serial:userData.data.data.serial})
                console.log(userData.data, managerData.data)
            })
            response();
        }
        catch(err){ console.log(err) }
    },[])
    return (
        <div>
            <h1>Dashboard</h1>
        </div>
    )
}
