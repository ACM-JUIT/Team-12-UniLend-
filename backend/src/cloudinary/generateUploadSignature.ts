import cloudinary from "./cloudinary.js";
export default function generateUploadSignature(): {
  signature: string;
  timestamp: number;
  eager: object[];
  folder: string;
} {
  const SECRET = process.env.CLOUDINARY_API_SECRET;

  if (!SECRET) {
    console.error("NO SECRET DEFINED");
    throw new Error("NO CLOUDINARY_API_SECRET found");
  }

  const timestamp = Math.round(Date.now() / 1000);
  const eager = [
    {
      width: 1000,
      crop: "scale",
      quality: "auto",
      fetchformat: "auto",
    },
  ];
  const folder = "UniLend";

  const signature = cloudinary.utils.api_sign_request(
    {
      timestamp,
      eager,
      folder,
    },
    SECRET
  );

  return { signature, timestamp, eager, folder };
}
