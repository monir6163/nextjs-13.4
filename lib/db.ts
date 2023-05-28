import mongoose from "mongoose";

const connectDB = async () => {
    if (!mongoose.connections[0].readyState) {
        console.log("DB is connecting...");
        return await mongoose.connect("mongodb://localhost:27017");
    }
};

export default connectDB;
