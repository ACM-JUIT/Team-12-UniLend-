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
  type: "sell" | "lend" | "both";
  ownerId: string;
  category: string;
  model: string;
  company: string;
  location: Location | null;
  viewcount?: number;
  createdAt?: string;
  images: File[] | string | null;
};

export async function createItemPost(postData: Omit<Item, "id">, idtoken: string): Promise<void> {
  try {
    const { images, ...otherData } = postData;
    const uploadedResults = await uploadImage(images as string, idtoken);
    
    console.log("IMAGES:" + JSON.stringify(uploadedResults));

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
