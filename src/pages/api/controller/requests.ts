import mongo from '@/lib/SingleMongo';

import ManagerModel from '../schemas/manager';
import driverModel from '../schemas/driver';

interface IDataset{
    serial: string;
    email: string;
}

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
    return result;
}

export { AcceptDriver, rejectDriver, AcceptManager, rejectManager }