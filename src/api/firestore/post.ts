import {
  addDoc,
  collection,
  getFirestore,
} from "@react-native-firebase/firestore";
import { uploadImage } from "../cloudinary/upload";

interface Location  {
  city: string;
  state: string;
  country: string;
  lat: number;
  lng: number;
};

export interface Item  {
  id: string;
  title: string;
  description: string;
  price: number;
  type: "sell" | "lend" | "both" | null;
  ownerId: string;
  category: string;
  model: string;
  company: string;
  location: Location | null;
  viewcount?: number;
  createdAt?: string;
  images: File[] | string | null;
};

export async function createBookPost(postData: Omit<Item, "id">): Promise<void> {
  try {
    const { ownerId, images, ...otherData } = postData;
    if (!ownerId) throw new Error("User not authenticated");
    console.log("createBookPost function started");
    // const uploadedResults: CloudinaryUploadResult[] = await Promise.all(
    //   images?.map((file) => uploadImage(file, ownerId))
    // );
    const uploadedResults = await uploadImage(images as string, ownerId);
    console.log("IMAGES:" + JSON.stringify(uploadedResults));

    // const imageIds = uploadedResults.map((res) => res.public_id);
    const bookPost = {
      ...otherData,
      images: uploadedResults.public_id.toString(),
      viewcount: otherData.viewcount ?? 0,
      createdAt: otherData.createdAt ?? new Date().toISOString(),
    };
    console.log(bookPost)

    const firestore = getFirestore();
    await addDoc(collection(firestore, "Items"), bookPost);
    console.log("Item posted");
  } catch (error) {
    console.log("Item posting error ", error);
    throw new Error(
      `Error while creating book post: ${(error as Error).message}`
    );
  }
}
