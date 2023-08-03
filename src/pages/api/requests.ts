import type { NextApiRequest, NextApiResponse } from 'next';

import { rejectDriver, rejectManager, AcceptDriver, AcceptManager } from './controller/requests';
import { AddDriverByManager } from './controller/DriverAddByManager';

interface IDataset{
    serial: string;
    email: string;
}

interface Data{
    dataset?: IDataset;
    command?: string;
    error?: any;
    serial?: string;
}

interface IDriverByManager{
    serial: string;
    driver: string;
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
){

    const serial:string = " " || req.body.dataset.serial;
    const email:string = " " || req.body.dataset.email;
    const driver:string = " " || req.body.dataset.driver;
    const command:string[] = req.body.command.split(" ");
    //const splittedCommand = command.split(" ");
    
    if (serial && command.length != 2) {
        return res.status(400).json({ error: "Invalid command",  command: "null", dataset: {serial: 'null', email: 'null'} });
      }
      
      if (!serial) {
        return res.status(400).json({ error: "Invalid serial",  command: "null",  dataset: {serial: 'null', email: 'null'} });
      }
      
      if (!command) {
        return res.status(400).json({ error: "Invalid command",  command: "null",  dataset: {serial: 'null', email: 'null'} });
      }
      

    if ( command[0] === 'accept' && command[1] === 'driver' ) {
        AcceptDriver(serial);
        return res.status(200).json({serial: serial, command: 'accept driver'})
    }
    if ( command[0] === 'reject' && command[1] === 'driver' ) {
        return res.status(200).json({serial: serial, command: 'reject driver'})
    }
    if ( command[0] === 'accept' && command[1] === 'manager' ) {
        // await AcceptManager({serial,email});
        if ( await AcceptManager({serial,email}) === true) return res.status(200).json({serial: serial, command: 'accepted manager'})
        else return res.status(400).json({serial: serial, command: 'failed accepting manager'})
    }
    if ( command[0] === 'reject' && command[1] === 'manager' ) {
        return res.status(200).json({serial: serial, command: 'reject manager'})
    }
    if ( command[0] === "create" && command[1] === 'driver') {
        AddDriverByManager(req.body);
        return res.status(200).json({serial: 'test', command: 'create driver'})
    }

    //res.status(200).json({serial: serial, command: `${command[0]},${command[1]}`});
}