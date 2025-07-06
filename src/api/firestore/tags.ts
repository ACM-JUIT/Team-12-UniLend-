import { collection, getDocs, getFirestore, orderBy, query, where } from "@react-native-firebase/firestore";

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
  const db = getFirestore();
  const q = query(
    collection(db, 'Tags'),
    where('isActive', '==', true),
    orderBy('order')
  );
  const snapshot = await getDocs(q);
  const tags: Tag[] = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as Omit<Tag, 'id'>)
  }));
  return tags;
};
