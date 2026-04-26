import mongoose from "mongoose";

const connectDB = async ()=>{
    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/event-monitor");
        console.log("mongoose connected");
    }catch(error){
        console.log("connection failed");
    }

}

export default connectDB;