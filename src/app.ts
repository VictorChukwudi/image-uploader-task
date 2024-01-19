import express, {Request, Response} from "express"
import mongoose from "mongoose"
import dotenv from "dotenv";
import connectDB from "./config/db";
import { upload } from "./config/multer";
import { imageUpload } from "./config/cloudinary";
import { Image } from "./models/image.model";
dotenv.config();

const app= express()
const port= process.env.PORT || 2000;

connectDB()

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.post("/upload", upload.single("image"),async(req: Request,res: Response)=>{      
    try {
        
        if(!req.file){
            res.status(400)
            throw new Error("No image uploaded")
        }
        
        const mimetypes: string[]=["image/jpeg", "image/png", "image/gif"]
        if(!mimetypes.includes(req.file!.mimetype)){
            res.status(400)
            throw new Error("Invalid image selected") 
        }else{
            const uploader= await imageUpload(req.file!.path)
            const saveImageUrl= await new Image({
                url:uploader.url
            }).save()
            res.json({
                status:"success",
                data:{
                    id:saveImageUrl._id,
                    url:uploader.url
                }
            })
        }    
    } catch (error:any) {
        res.json({
            status:"error",
            msg:error.message
        })
    }
})

app.get("/get_image/:id", async(req: Request,res: Response)=>{
    try {
        const id=req.params.id
        const isValid=mongoose.Types.ObjectId.isValid(id)

        if(!isValid){
            res.status(400)
            throw new Error("Invalid image id passed as request parameter")
        }
        const findImage= await Image.findById(id)
        if(!findImage){
            res.status(404)
            throw new Error(`Image with ID: ${id} not found.`)
        }else{
            res.json({
                status:"success",
                msg:"image retrieved",
                data:findImage
            })
        }
    } catch (error: any) {
        res.json({
            status:"error",
            msg:error.message
        })
    }
})

app.listen(port,()=>{
    console.log(`Server listening on port ${port}...`)
})