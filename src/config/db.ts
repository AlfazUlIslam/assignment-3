import mongoose from "mongoose";

const connectDatabase = async (uri: string) => {
    try {
        const conn = await mongoose.connect(uri);
        console.log(`Database connected: ${conn.connection.host}`);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

export default connectDatabase;