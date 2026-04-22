import express from "express";
import cors from "cors";

const app = express();

//middleware;

app.use(express.json());
app.use(cors());

//test route

app.get("/", (req,res)=>{
    res.send("experss working");;
});

export default app;
