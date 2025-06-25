export interface CloudinaryUploadResult {
  public_id: string;
  secure_url: string;
  version: number;
  signature: string;
}

export async function uploadImage(file: File): Promise<CloudinaryUploadResult> {
  try {
    // the signatureResponse contains other things apart from signature necessary for image upload, so change the parameters in backend
    const signatureResponse = await fetch("https://localhost:5000//get-signature");
    const { signature, timestamp, eager, folder, cloudname, apikey } = await signatureResponse.json()

    const formData = new FormData();

    formData.append("file", file);
    formData.append("api_key", apikey);
    formData.append("timestamp", timestamp);
    formData.append("signature", signature);
    formData.append("folder", folder);
    formData.append("eager", JSON.stringify(eager));

    const uploadResponse = await fetch(`https://api.cloudinary.com/v1_1/${cloudname}/image/upload`, 
        {
            method: "POST",
            body: formData
        }
    )
    if (!uploadResponse.ok) {
        throw new Error("Upload Failed: " + uploadResponse.statusText)
    }

    return uploadResponse.json()

  } catch (error) {
    throw error
  }
}
