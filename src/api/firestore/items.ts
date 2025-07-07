import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  limit,
  orderBy,
  query,
  where,
} from "@react-native-firebase/firestore";

import { Item } from "@/src/api/firestore/post";

export const fetchItemsByCategory = async (
  category?: string,
  orderByField: string = "createdAt",
  limitCount: number = 7
): Promise<Item[]> => {
  try {
    const firestore = getFirestore();

    let q;
    if (limitCount === -1) {
      q = query(
        collection(firestore, "Items"),
        where("category", "==", category),
        orderBy(orderByField, "desc")
      );
    } else if (category) {
      q = query(
        collection(firestore, "Items"),
        where("category", "==", category),
        orderBy(orderByField, "desc"),
        limit(limitCount)
      );
    } else {
      q = query(
        collection(firestore, "Items"),
        orderBy(orderByField, "desc"),
        limit(limitCount)
      );
    }

    const querySnapshot = await getDocs(q);
    const items: Item[] = [];
    querySnapshot.forEach((item) => {
      items.push({
        id: item.id,
        ...(item.data() as Omit<Item, "id">),
      });
    });
    return items;
  } catch (error: any) {
    console.error(error);
    throw error;
  }
};

export const fetchItem = async (itemId: string) => {
  try {
    const firestore = getFirestore();

    const itemSnap = await getDoc(doc(firestore, "Items", itemId));

    if (itemSnap.exists()) {
      return {
        id: itemSnap.id,
        ...(itemSnap.data() as Omit<Item, "id">),
      };
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error fetching single item: ", error);
    throw error;
  }
};
