import app from "./app.js";
import connectDB from "/home/akshay-gopal/projects/EventMonitor/src/config/db.js"
const PORT = 3000;

const connectServer = async()=>{
    try{
        await connectDB();
        app.listen(PORT,()=>{
            console.log("server listening");
        });
    }catch(error){

        console.log("connection failed");
    }
};

connectServer();