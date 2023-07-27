import mongoose from 'mongoose'

interface Error {
    message: string
}

class Database {
    private static instance: Database
    private constructor() {}
    static getInstance(): Database {
        if (!Database.instance) {
            Database.instance = new Database()
        }
        return Database.instance
    }

    async connectDB(): Promise<boolean> {
        try {
            if (mongoose.connection.readyState !== 1) {
                await mongoose.connect(
                'mongodb://localhost:27017/fleetology'
                )
                console.log('MongoDB connected')
                return true
            }
        } catch (error) {
            console.error(`Error connecting to MongoDB`)
        }
        return false
    }
}

const disconnectDB = async (): Promise<boolean | string> => {
    try {
        await mongoose.disconnect()
        return true
    } catch (err) {
        //const error = err<Error>;
        //console.log(error.message);
        return false
    }
}

const database = Database.getInstance()


export { database }

/*  → example implementation
import { database } from './mongo';
await database.connectDB(); // To connect to the database
await database.disconnect(); // To disconnect from the database
*/
