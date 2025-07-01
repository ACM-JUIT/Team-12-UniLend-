export interface CloudinaryUploadResult {
  public_id: string;
  secure_url: string;
  version: number;
  signature: string;
}

export async function uploadImage(file: File| string, authToken: string): Promise<CloudinaryUploadResult> {
  try {
    console.log("image uploading function started")
    // the signatureResponse contains other things apart from signature necessary for image upload, so change the parameters in backend
    const signatureResponse = await fetch("http://192.168.1.4:5000/get-signature", {
      method: "GET", 
      headers: {
        Authorization: `Bearer ${authToken}`
      }
    });
    const { signature, timestamp, eager, folder, cloudname, apikey } = await signatureResponse.json()
    console.log(signature, timestamp, eager, folder, cloudname, apikey)

     const image = {
      uri: file,
      name:  'photo.jpg',
      type:'image/jpeg',
    };

    const formData = new FormData();

    formData.append("file", image as any);
    formData.append("api_key", apikey);
    formData.append("timestamp", timestamp);
    formData.append("signature", signature);
    formData.append("folder", folder);
    // formData.append("eager", JSON.stringify(eager));

    const uploadResponse = await fetch(`https://api.cloudinary.com/v1_1/${cloudname}/image/upload`, 
        {
            method: "POST",
            body: formData
        }
    )
    if (!uploadResponse.ok) {
      console.log(uploadResponse)
        throw new Error("Upload Failed: " + uploadResponse.statusText)
    }

    return uploadResponse.json()

  } catch (error) {
    console.log("Error in upload function", error)
    console.error(error)
    throw error
  }
}
