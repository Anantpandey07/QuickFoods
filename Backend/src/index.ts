import express, {Request, Response} from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import MyUserRoutes from "./routes/MyUserRoutes";
import{v2 as cloudinary} from "cloudinary";

mongoose.connect(process.env.MONGO as string).then(() => 
console.log("connected to database"));

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,

})

const app = express();
app.use(express.json())
app.use(cors())

app.get("/health", async(req: Request, res: Response) => {
    res.send({message: "health OK!"})
});

app.use("/api/my/user", MyUserRoutes);

app.listen(7000, ()=>{
    console.log("server started on localhost:7000");
})