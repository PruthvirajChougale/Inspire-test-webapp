import express from 'express';
import dotenv from 'dotenv';
import Routes from './routes/route.js';
import mongoose from "mongoose";
import cors from 'cors';
import bodyParser from 'body-parser';
dotenv.config()
const app = express();

const PORT = process.env.PORT || 5000;
const MongoUri = process.env.MONGO_URL;

app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));

app.use(bodyParser.json());

const ConnectToDB =async () =>{
    try{
        console.log("Connecting to:", process.env.MONGO_URL);
        await mongoose.connect(MongoUri);
          console.log("Connected to MongoDB successfully");
    }
    catch(error){
        console.log(error);
    }
}
ConnectToDB();
app.use("/",Routes);

app.listen(PORT,()=>{
    console.log(`Server is listening to PORT ${PORT}`)
});