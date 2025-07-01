import { CloudinaryUploadResult, uploadImage } from "../cloudinary/upload";

type Location = {
  city: string;
  state: string;
  country: string;
  lat: number;
  lng: number;
};

type BookPostInput = {
  title: string;
  description: string;
  price: number;
  type: "sell" | "lend" | "both",
  ownerId: string;
  category: string;
  location: Location;
  viewcount?: number;
  createdAt?: string;
  images: File[];
};

export async function createBookPost(postData: BookPostInput): Promise<void> {
  try {
    const {ownerId, images, ...otherData } = postData;

    if (!ownerId) throw new Error("User not authenticated");
    const uploadedResults: CloudinaryUploadResult[] = await Promise.all(
      images.map((file) => uploadImage(file, ownerId))
    );
    console.log("IMAGES:" + JSON.stringify(uploadedResults))

    // const imageIds = uploadedResults.map((res) => res.public_id);

    // const bookPost = {
    //   ...otherData,
    //   images: imageIds,
    //   viewcount: otherData.viewcount ?? 0,
    //   createdAt: otherData.createdAt ?? new Date().toISOString(),
    // };

    // const firestore = getFirestore();
    // await addDoc(collection(firestore, "bookPosts"), bookPost);
  } catch (error) {
    throw new Error(`Error while creating book post: ${(error as Error).message}`);
  }
}

