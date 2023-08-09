import axios from 'axios';
import React from 'react';
import dynamic from 'next/dynamic';
import { Card, Loading } from "@nextui-org/react";
import { MapProps } from '@/components/map';

const Map = dynamic<MapProps>(() => import('@/components/map'), { ssr: false });

interface IDriverAuth{
    data:{
        email?:string;
        serial?:string;
        user_type?:string;
    }
}
interface IDriverCore{
    data?:{
        serial?:string;
        data?:{
            name?:string;
            phone?:string;
            serial?:string;
            drivers?:string[];
            manager?:string;
            isApproved?:any;
            location?:string[];
        }[];
    }
}
export default function Index() {
  const [driverdata, setDriverData] = React.useState<IDriverAuth | any>();
  const [driver, setDriver] = React.useState<IDriverCore | any>();

  React.useEffect(() => {
    const token = localStorage.getItem('fleetology-user');
    const driverAuth = axios.post<IDriverAuth>('api/usertoken', { token: token });

    async function getDriverData() {
      try {
        const driverData: any = await driverAuth;
        const driverCoreData: any = await axios.post<IDriverCore>('api/requests', {
          command: 'get driver',
          serial: driverData.data.data.serial,
        });
        setDriverData(driverData.data);
        setDriver(driverCoreData.data);
        console.log(driver,driverdata);
      } catch (error) {
        console.error(error);
      }
    }
    getDriverData();
  }, []);
  console.log(driver,driverdata)

  return (
    <center>
     {
         driverdata && driver && driver.data ? (
            <div className="flex flex-col md:flex-row mx-auto justify-center items-center text-center">
          <Card css={{ mw: '400px' }} isHoverable>
            <Card.Header>
              <div className="text-left flex flex-col">
                <p>{driver?.data[0]?.name}</p>
                <p>user type: {driverdata.data.user_type}</p>
              </div>
            </Card.Header>
            <Card.Body>
              <div className="p-2 w-full shadow-md bg-gray-200 h-[180px] overflow-y-auto">
                <p>Serial: {driver?.data[0]?.serial}</p>
                <p>Manager ID: {driver?.data[0]?.manager}</p>
                <p>Driver Location: {driver?.data[0]?.location}</p>
                <p>Driver Phone: {driver?.data[0]?.phoneNumber}</p>
                <p>Approval: {driver?.data[0]?.isApproved.toString()}</p>
              </div>
            </Card.Body>
            <Card.Footer></Card.Footer>
          </Card>
          <Map w="400" h="450" />
        </div>
         ) : (
            <Loading color="primary" size="lg" />
         )
     }
    </center>
  );
}