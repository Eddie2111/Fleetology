import mongoose, { Schema, Document, Model } from "mongoose";

interface Manager extends Document {
  serial: string;
  name: string;
  profileImage?: string;
  phoneNumber?: string;
  isActive?: boolean;
  drivers: string[];
}

const managerSchema = new Schema<Manager>({
  serial: { type: String, required: true },
  name: { type: String, required: true },
  profileImage: { type: String },
  phoneNumber: { type: String },
  isActive: { type: Boolean },
  drivers: [{ type: Schema.Types.ObjectId, ref: 'Driver' }],
}, { collection: 'managers' });

const ManagerModel: Model<Manager> = mongoose.models.Manager || mongoose.model<Manager>('Manager', managerSchema);

export default ManagerModel;
