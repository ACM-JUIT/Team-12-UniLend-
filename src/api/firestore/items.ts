import {
  collection,
  deleteDoc,
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

export const fetchItem = async (itemId: string): Promise<Item | null> => {
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

export  async function deleteItem(itemId: string): Promise<{success: boolean; error?: string}> {
  try {;
    
    const db = getFirestore();
    const itemRef = doc(db, "Items", itemId);
    
    const itemSnap = await getDoc(itemRef);
    if (!itemSnap.exists()) {
      console.log(`Item ${itemId} does not exist`);
      return {success: false, error: "Item not found"};
    }
    
    await deleteDoc(itemRef);
    console.log(`Item ${itemId} successfully deleted`);
    return {success: true};
  } catch (error) {
    console.error("Error deleting Item in deleteItem: ", error);
    return {success: false, error: String(error)};
  }
}