import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import authRoutes  from './routes/auth.js'
import { register } from './controllers/auth.js';
import verifyToken from './middleware/verifyToken.js'

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));

mongoose.connect("mongodb://127.0.0.1:27017/SocioPedia")

app.use('/auth', authRoutes);

app.post('/auth/register', register);

// app.get('/', (req, res)=>{
//     res.send("This is the server side.")
// })

app.listen(3000, ()=>{
    console.log("Server is live at http://localhost:3000")
})

