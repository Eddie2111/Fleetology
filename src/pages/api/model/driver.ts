import { Schema, model } from 'mongoose';

interface History {
  serial: string;
  from: string;
  to: string;
  client: string; // client serial here
  fare: string;
  time: string;
}

interface Drivers {
  serial: string;
  name: string;
  email: string;
  password: string;
  profileImage?: string;
  location?: string;
  phoneNumber: string;
  isActive: boolean;
  rating: number;
  rideHistory: History;
}

const driverSchema = new Schema<Drivers>({
  serial: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  profileImage: { type: String },
  location: { type: String },
  phoneNumber: { type: String, required: true },
  isActive: { type: Boolean, required: true },
  rideHistory: { type: Object },
  rating: { type: Number }
});

const driverModel = model<Drivers>('Driver', driverSchema);

export default driverModel;