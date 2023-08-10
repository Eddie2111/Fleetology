import mongo from '@/lib/SingleMongo';

import ManagerModel from '../schemas/manager';
import driverModel from '../schemas/driver';

interface IDataset{
    serial: string;
    email: string;
}

mongo();

const AcceptDriver = async (serial: string) => {
    const result = await driverModel.findOneAndUpdate({ serial: serial }, { isApproved: true }).exec();
    return result;
}
const rejectDriver = async (serial: string) => {
    const result = await driverModel.findOneAndDelete({ serial: serial }).exec();
    return result;
}
const AcceptManager = async (data:IDataset) => {
    try{
        const result = await ManagerModel.create(data);
        console.log(result)
        return true;
    }
    catch(err){
        console.log(err); 
        return false;
    }
}
const rejectManager = async (serial: string) => {
    const result = await ManagerModel.findOneAndDelete({ serial: serial }).exec();
    console.log(result)
    return result;
}
interface Iresult{
    drivers?: any;
}
const getDriverByManager = async (serial: string) => {
    try {
        let driverList = [];
        const result:Iresult | null = await ManagerModel.findOne({ serial: serial }).select('drivers').exec();

        if (result) {
            for (let i = 0; i < result.drivers.length; i++) {
                const driver = await driverModel.find({ serial: result.drivers[i], isApproved: false }).select("serial email name").exec();

                if (driver.length > 0) {
                    driverList.push(driver[0]);
                } else {
                    console.log('not null');
                }
            }
            return driverList;
        } else {
            console.log('Manager not found');
            return null; // Return appropriate value or handle this case as needed
        }
    } catch (err) {
        console.log(err);
        return false;
    }
};


const getDriver = async (serial: string) => {
    try{
        const result = await driverModel.find({ serial: serial }).exec();
        return result;
    }
    catch(err){
        console.log(err); 
        return false;
    }
}

const getManager = async (serial: string) => {
    try{
        const result = await ManagerModel.find({ serial: serial }).exec();
        //console.log(result);
        return result;
    }
    catch(err){
        console.log(err);
        return false;
    }
}

export { 
    AcceptDriver, 
    rejectDriver, 
    AcceptManager, 
    rejectManager, 
    getDriverByManager,
    getDriver,
    getManager 
}