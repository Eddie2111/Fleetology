import mongoose from 'mongoose';

export default async function mongo() {
    if (mongoose.connection.readyState !== 1) {
      await mongoose
        .connect( process.env.MONGODB_URL || " ")
        .then(() => console.log('connected to MongoDB'))
        .catch((err:any):any => console.log(err));
    }
    else{
      console.log('connection avoided')
    }
  }