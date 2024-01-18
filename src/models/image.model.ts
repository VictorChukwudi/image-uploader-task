import { Schema, model} from "mongoose"

interface IImage{
    url: string
}

const imageSchema= new Schema<IImage>({
    url:{type: String, required:true}
})

export const Image= model<IImage>('Image', imageSchema)
