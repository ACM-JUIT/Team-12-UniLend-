import { getFirestore } from "@react-native-firebase/firestore";

export type Tag = {
  id: string;
  createdAt: string;
  description: string;
  imageUrl: string;
  isActive: boolean;
  name: string;
  order: number;
  slug: string;
};

export const getActiveTags = async (): Promise<Tag[]> => {
  const db = getFirestore()
  const snapshot = await db
  .collection('Tags')
  .where('isActive', '==',true) 
  .orderBy('order')
  .get();
  const tags: Tag[] = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as Omit<Tag, 'id'>)
  }));
  return tags;
};  
