import { Schema, model } from 'mongoose';

interface Admin {
    email: string
    password: string
}

const AdminSchema = new Schema<Admin>({
    email: { type: String, required: true },
    password: { type: String, required: true },
})

const AdminModel = model<Admin>('Admin', AdminSchema);

export default AdminModel;