const cloudinary = require("cloudinary").v2;

cloudinary.config({
  api_secret: "SWmuaA6jdhrtiRdmsoNQGCv4LzY",
  api_key: 339361791885844,
  cloud_name: "dn8ymrr2t",
  secure: true,
});

cloudinary.uploader
  .destroy("thni6oohckogfntvfxjw")
  .then((result) => console.log(result));
