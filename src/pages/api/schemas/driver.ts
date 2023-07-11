import { Schema, model } from 'mongoose'

interface Drivers {
    serial: string
    name?: string
    profileImage?: string
    fleet?: string
    location?: string
    phoneNumber?: string
    isActive?: boolean
}

const driverSchema = new Schema<Drivers>({
    serial: { type: String, required: true },
    name: { type: String, required: true },
    profileImage: { type: String },
    fleet: { type: String },
    location: { type: String },
    phoneNumber: { type: String },
    isActive: { type: Boolean },
})

const driverModel = model<Drivers>('Driver', driverSchema)

export default driverModel
