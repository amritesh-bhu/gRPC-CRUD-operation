import mongoose from "mongoose";

export const dbConn = async (MONGO_URI) => {
    try {
        await mongoose.connect(MONGO_URI)
        console.log("Database connected successfully!!")
    } catch (err) {
        throw new Error(`couldn't connect to DB ${err.message}`)
    }
}