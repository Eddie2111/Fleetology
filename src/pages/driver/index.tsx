import axios from 'axios';
import React from 'react';
import dynamic from 'next/dynamic';
import { Card, Loading } from "@nextui-org/react";
import {MapProps} from '@/components/map';
const Map = dynamic<MapProps>(() => import('@/components/map'), { ssr: false });

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

interface IdriverCore{
    data: {
        data: {
            serial?: string,
            command?: string,
            data?: string[]
        }
    }
}
interface Idriver {
    data: {
        name: string;
        serial: string;
        manager: string;
        location: string;
        phoneNumber: string;
        isApproved: boolean;
        // ... other properties
    };
}

export default function Index() {
    const [driverdata, setDriverData] = React.useState<IDriverData>();
    const [driver, setDriver] = React.useState<Idriver>();

    React.useEffect(() => {
        const token = localStorage.getItem('fleetology-user');
        const driverAuth = axios.post<IDriverData>("api/usertoken", { token: token });

        async function getDriverData() {
            try {
                const driverData = await driverAuth;
                const driverCoreData = await axios.post<Idriverdata>("api/requests", {
                    command: "get driver",
                    serial: driverData.data.data.serial
                });

                console.log(driverCoreData.data.data, driverData.data.data);

                setDriverData(driverData.data);
                setDriver({ data: driverCoreData.data.data }); // Modify this line
            } catch (error) {
                console.error(error);
            }
        }

        getDriverData();
    }, []);

    return (
        <center>
        {driverdata && driver ?
            <div className="flex flex-col md:flex-row mx-auto justify-center items-center text-center">
            <Card css={{ mw: '400px' }} isHoverable>

                <Card.Header>
                    <div className="text-left flex flex-col">
                    <p>{driver[0].name}</p>
                    <p>user type: {driverdata.data.user_type}</p>
                    </div>
                </Card.Header>

                <Card.Body>
                    <div className="p-2 w-full shadow-md bg-gray-200 h-[180px] overflow-y-auto">
                        <p>Serial: {driver[0].serial}</p>
                        <p>Manager ID: {driver[0].manager}</p>
                        <p>Driver Location: {driver[0].location}</p>
                        <p>Driver Phone: {driver[0].phoneNumber}</p>
                        <p>Approval: {driver[0].isApproved.toString()}</p>
                    </div>

                </Card.Body>

                <Card.Footer>
                </Card.Footer>
            </Card>
            <Map w="400" h="450"/>
            </div>
            :
            <Loading color="primary" size="large" />
        }
        </center>

    )
}
