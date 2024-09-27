import cloudinary from "cloudinary";
import multer from "multer";

cloudinary.config({
  cloud_name: "your_cloud_name",
  api_key: "your_api_key",
  api_secret: "your_api_secret",
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
