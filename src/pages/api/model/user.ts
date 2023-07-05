import { Schema, model } from 'mongoose'

interface History {
    serial: string
    from: string
    to: string
    driver: string // driver serial
    fare: string
    time: string
}

interface User {
    serial: string
    name: string
    email: string
    password: string
    profileImage?: string
    location?: string
    phoneNumber: string
    isActive: boolean
    rideHistory: History
}

const userSchema = new Schema<User>({
    serial: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    profileImage: { type: String },
    location: { type: String },
    phoneNumber: { type: String, required: true },
    isActive: { type: Boolean, required: true },
    rideHistory: { type: Object },
})

const UserModel = model<User>('User', userSchema)

export default UserModel
