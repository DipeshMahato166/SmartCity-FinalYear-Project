const cloudinary = require("cloudinary").v2;
const multer = require("multer");
const dotenv = require("dotenv");
const fs = require("fs");

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadFileToCloudinary = (file) => {
  const options = {
    resource_type: file.mimetype.startsWith("video") ? "video" : "image",
  };

  return new Promise((resolve, reject) => {
    const uploader = file.mimetype.startsWith("video")
      ? cloudinary.uploader.upload_large
      : cloudinary.uploader.upload;

    uploader(file.path, options, (error, result) => {
      fs.unlink(file.path, () => {});
      if (error) {
        return reject(error);
      }
      resolve(result);
    });
  });
};

// Multer (Max 5 Images)
const upload = multer({
  dest: "uploads/",
})

const multerMiddleware = upload.array("images", 5);

module.exports = {
  uploadFileToCloudinary,
  multerMiddleware,
};
