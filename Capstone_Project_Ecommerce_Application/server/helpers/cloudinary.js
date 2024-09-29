import cloudinary from "cloudinary";
import multer from "multer";
import dotenv from "dotenv";

dotenv.config();

cloudinary.config({
  cloud_name: process.env.cloud_name,
  api_key: process.env.api_key,
  api_secret: process.env.api_secret,
});

// Configure multer to store files in memory
const storage = new multer.memoryStorage();

async function imageUploadUtil(file) {
  // Upload the file to Cloudinary
  const result = await cloudinary.uploader.upload(file, {
    resource_type: "auto",
  });

  return result;
}

// Setup multer middleware
const upload = multer({ storage });

// Export the multer upload and image upload utility function
export { upload, imageUploadUtil };
