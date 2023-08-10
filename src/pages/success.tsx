import axios from 'axios';
import { useRouter } from 'next/router';
import React from 'react';
import Link from 'next/link';

export default function Success(){
    const router = useRouter();
    const [users, setUsers] = React.useState<string>("");
    const {pay} = router.query;
    const {user} = router.query;
    React.useEffect(()=>{
        const jsonwebtoken = require('jsonwebtoken');
        const token = localStorage.getItem('fleetology-user');
        const decoded = jsonwebtoken.decode(token);
        axios.post("api/requests", { command: "update manager", serial: decoded.serial, data: { isPaid: true, plan:localStorage.getItem("paidforplan") } })
    })
    return(
        <div>
            <p>Payment:{pay || " "}</p>
            <p>User:{user || " "}</p>
            <Link href="/manager/index">
                Go to Manager
            </Link>
        </div>
    )
}