import mongoose, { Schema, model } from 'mongoose'

interface Drivers {
    serial: string
    name?: string
    profileImage?: string
    fleet?: string
    location?: string
    phoneNumber?: string
    manager: string
    isApproved?: boolean
}

const driverSchema = new Schema<Drivers>({
    serial: { type: String, required: true },
    name: { type: String, required: true },
    profileImage: { type: String },
    fleet: { type: String },
    location: { type: String },
    phoneNumber: { type: String },
    manager: { type: String, required: true },
    isApproved: { type: Boolean },
}, {collection:'driver'})

const driverModel: Model<Drivers> = mongoose.models.Drivers || mongoose.model<Driver>('Drivers', driverSchema);
export default driverModel