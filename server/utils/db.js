import mongoose from "mongoose"

const URI="mongodb://127.0.0.1:27017/mern_admin"

const connectDB=async()=>{
    try {
        await mongoose.connect(URI)
        console.log("Connect successfully to MongoDB");
    } catch (error) {
        console.error("Failed to connect MongoDB")
        process.exit(0)
    }
}

export default connectDB