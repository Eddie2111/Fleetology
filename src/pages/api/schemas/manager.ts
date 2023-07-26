import { Schema, model } from 'mongoose'

interface Manager {
    serial: string
    name: string
    email: string
    password: string
    profileImage?: string
    phoneNumber?: string
    isActive?: boolean
    drivers: string[]
}

const userSchema = new Schema<Manager>({
    serial: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    profileImage: { type: String },
    phoneNumber: { type: String },
    isActive: { type: Boolean },
    drivers: [{ type: Schema.Types.ObjectId, ref: 'Driver' }],
})

const ManagerModel = model<Manager>('Manager', userSchema)

export default ManagerModel
