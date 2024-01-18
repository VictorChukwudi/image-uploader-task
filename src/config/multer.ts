import multer from "multer"

export const upload= multer({
    storage:multer.diskStorage({}),
    fileFilter: (req,file,cb)=>{
    if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
        cb(null, true);
    }else{
        // return cb(new Error("Only .png, .jpg and .jpeg format allowed!"));
        return cb(null, false);
    } 
    }
})