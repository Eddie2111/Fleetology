import mongoose, { Schema, Document, Model } from "mongoose";

interface Manager extends Document {
  serial: string;
  name?: string;
  email: string;
  profileImage?: string;
  phoneNumber?: string;
  isActive?: boolean;
  drivers?: string[];
  isApproved?: boolean;
  isPaid?: boolean;
  plan?: string;
}

const managerSchema = new Schema<Manager>({
  serial: { type: String, required: true, unique: true },
  name: { type: String },
  email: { type: String, required: true, unique: true },
  profileImage: { type: String },
  phoneNumber: { type: String },
  isActive: { type: Boolean },
  isApproved: { type: Boolean },
  drivers: [{ type: String }],
  isPaid: { type: Boolean },
  plan: { type: String },
}, { collection: 'manager' });

const ManagerModel: Model<Manager> = mongoose.models.Managers || mongoose.model<Manager>('Managers', managerSchema);

export default ManagerModel;
