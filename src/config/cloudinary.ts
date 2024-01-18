import cloud from "cloudinary";
import dotenv from "dotenv";
dotenv.config();
const cloudinary = cloud.v2;
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});


export const imageUpload =async (filePath:string) => {
  return cloudinary.uploader.upload(filePath, (err, result) => {
    if (err) {
      console.error(err);
      return;
    } else { 
      return {
        cloudinaryID: result!.public_id,
        url:result!.secure_url
      }
    }
  });
};


