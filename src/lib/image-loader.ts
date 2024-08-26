import { v2 as cloudinary } from "cloudinary";
import "dotenv/config";
console.log(process.env.CLOUDINARY_CLOUD_NAME);
console.log(process.env.CLOUDINARY_API_KEY);
console.log(process.env.CLOUDINARY_API_SECRET);

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const uploadImage = async (base64Image: string): Promise<string> => {
  try {
    const result = await cloudinary.uploader.upload(base64Image, {
      folder: "litebox",
      use_filename: true,
      unique_filename: false,
      overwrite: true,
    });

    return result.secure_url;
  } catch (error) {
    console.error(error);
    throw new Error("Error on image upload");
  }
};
