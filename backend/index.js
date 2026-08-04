import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import studentRoutes from './routes/student/route.js';
import prisma from './config/db.js';
dotenv.config()
const app = express();

const PORT = process.env.PORT || 5000;
const PGURI = process.env.PGURI

app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));

app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.json());

// const ConnectToDB =async () =>{
    
// }
const startDB = async() => {
  try {
    // Attempt a lightweight test query to check DB connectivity
    await prisma.$connect();
    console.log('✅ Connected to PostgreSQL database successfully!');

    app.listen(PORT, () => {
      console.log(`🚀 Express server running on port ${PORT}`);
    });
  } catch (error) {
    console.error('❌ Unable to connect to the database:', error);
    process.exit(1);
  }
}
// ConnectToDB();
startDB()
app.use("/",studentRoutes);

app.listen(PORT,()=>{
    console.log(`Server is listening to PORT ${PORT}`)
});