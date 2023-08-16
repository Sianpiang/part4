import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv"
import blogs from "./routes/blogs.js";

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();

const URL = process.env.MONGODB_URI;
const PORT = process.env.PORT;
mongoose.connect(URL)
.then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server connected to PORT:${PORT}`);
    })
})
.catch((error)=>{
    console.log(error.message);
})

app.use('/blogs',blogs)