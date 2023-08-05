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
const getDriverByManager = async (serial: string) => {
    try{
        // only get drivers 
        let driverList = [];
        const result = await ManagerModel.findOne({ serial: serial }).select('drivers').exec();
        // only get drivers that are not approved but has the same manager serial
        for (let i = 0; i < result[0].drivers.length; i++) {
            const driver = await driverModel.find({ serial: result[0].drivers[i], isApproved: false }).select("serial email name").exec();
            //if (driver.length > 0) driverList.push(driver[0])
            //driverList.push(driver);
            console.log(driver)
            if(driver.length > 0) {
                driverList.push(driver[0])}
            
            else{ console.log('not null')}
        }
        // console.log(driverList)
        return result;
    }
    catch(err){
        console.log(err); 
        return false;
    }
}

export { AcceptDriver, rejectDriver, AcceptManager, rejectManager, getDriverByManager }