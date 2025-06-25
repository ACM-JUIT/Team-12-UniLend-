import { getFirestore } from "@react-native-firebase/firestore";

export type tag = {
  id: string;
  createdAt: string;
  description: string;
  imageUrl: string;
  isActive: boolean;
  name: string;
  order: number;
  slug: string;
};

export const getActiveTags = async (): Promise<tag[]> => {
  const db = getFirestore()
  const snapshot = await db
  .collection('Tags')
  .where('isActive', '==',true) 
  .orderBy('order')
  .get();
  const tags: tag[] = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as Omit<tag, 'id'>)
  }));
  return tags;
};  
