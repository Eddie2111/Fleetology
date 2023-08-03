import mongo from '@/lib/SingleMongo';
import ManagerModel from '../schemas/manager';
import driverModel from '../schemas/driver';
import mongoose from 'mongoose';

interface IManagerData{
    serial: string;
    driver: string;
}
interface IdriverData{
    serial: string;
    name: string;
}

interface IDataset{
    managerData: IManagerData;
    driverData: IdriverData;
}

export const AddDriverByManager = async (data:IDataset) => {
    await mongo();
    try{
        const driverData = new driverModel({
            serial: data.driverData.serial,
            name: data.driverData.name,
            isApproved: true,
            manager: data.managerData.serial
        });
        const driversData = await driverData.save();

        const managerData = await ManagerModel.findOneAndUpdate(
                { serial: data.managerData.serial }, 
                { $push: { drivers: data.driverData.serial } 
            })
            .exec();

        Promise.all([driversData, managerData])
        .then((data:any):any => {
            console.log('done');
        })
        .catch((err:any):any => {
            console.log(err);
        })
        console.log(data); 
        return true;
    }
    catch(err){
        console.log(err); 
        return false;
    }
}