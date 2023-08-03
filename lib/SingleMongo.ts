import mongoose from 'mongoose';

export default async function mongo() {
    if (mongoose.connection.readyState !== 1) {
      await mongoose
        .connect( ' ' || process.env.MONGODB_URL)
        .then((data) => console.log('connected to MongoDB'))
        .catch((err) => console.log(err));
    }
    else{
      console.log('connection avoided')
    }
  }