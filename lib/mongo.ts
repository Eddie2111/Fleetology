import mongoose from "mongoose";

interface Error {
  message: string;
}

const connectDB = async (): Promise<boolean> => {
  try {
    if (mongoose.connection.readyState !== 1) {
      await mongoose.connect("http://localhost:27137/weride");
      console.log("MongoDB connected");
      return true;
    }
  } catch (error) {
    console.error(`Error connecting to MongoDB`);
  }
  return false;
};

const disconnectDB = async (): Promise<boolean | string> => {
  try {
    await mongoose.disconnect();
    return true;
  } catch (err) {
    //const error = err<Error>;
    //console.log(error.message);
    return false;
  }
};

export { connectDB, disconnectDB };
