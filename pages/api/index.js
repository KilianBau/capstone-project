const cloudinary = require("cloudinary").v2;
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default async function handler(request, response) {
  const { publicIds } = request.body;

  if (request.method === "DELETE") {
    try {
      await cloudinary.api.delete_resources(publicIds);
      response.status(200).json({ message: "successfully deleted!" });
    } catch (error) {
      console.error("Error deleting image:", error);
      response
        .status(500)
        .json({ message: "An error occurred while deleting the image." });
    }
  }
}
