import axios from 'axios';
import React from 'react'

interface IDriverData{
    data: {
        email:string;
        serial:string;
        user_type:string;
    };
}
interface Idriverdata{
    data:IDriverData;
}

export default function Index() {
    const [driverdata,setDriverData] = React.useState<IDriverData>();
    React.useEffect(()=>{
        const token = localStorage.getItem('fleetology-user');
        async function main(){
            const driverdata = await axios.post<IDriverData>("api/usertoken",{token:token})
            console.log(driverdata.data.data);
            setDriverData(driverdata.data);
        }
        try{
            main();       
        }
        catch(err){ console.log(err) }

    },[])
    return (
        <div>
            <h1>Dashboard</h1>
            <div className="w-64 h-48 border-2 border-gray-400 rounded-lg text-left mx-5">
                <h1 className="text-sm">Driver</h1>
                <h1 className="text-[21px]">Email: {driverdata?.data.email}</h1>
                <h1 className="text-[21px]">Serial: {driverdata?.data.serial}</h1>
                <h1 className="text-[21px]">User_type: {driverdata?.data.user_type}</h1>
            </div>
        </div>
    )
}
