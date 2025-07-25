import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  increment,
  limit,
  orderBy,
  query,
  startAt,
  updateDoc,
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
export const fetchOrderItem = async (itemId: string): Promise<Item | null> => {
  try {
    const firestore = getFirestore();

    const q = query(
      collection(firestore, "Orders"),
      where("itemId", "==", itemId)
    );
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      const docSnap = querySnapshot.docs[0];
      return {
        id: docSnap.id,
        ...(docSnap.data().item as Omit<Item, "id">),
      };
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error fetching single item: ", error);
    throw error;
  }
};

export async function deleteItem(
  itemId: string
): Promise<{ success: boolean; error?: string }> {
  try {
    const db = getFirestore();
    const itemRef = doc(db, "Items", itemId);

    const itemSnap = await getDoc(itemRef);
    if (!itemSnap.exists()) {
      console.log(`Item ${itemId} does not exist`);
      return { success: false, error: "Item not found" };
    }

    await deleteDoc(itemRef);
    console.log(`Item ${itemId} successfully deleted`);
    return { success: true };
  } catch (error) {
    console.error("Error deleting Item in deleteItem: ", error);
    return { success: false, error: String(error) };
  }
}

export async function updateViewCount(
  itemId: string
): Promise<{ success: boolean; error?: string }> {
  try {
    const db = getFirestore();
    const itemRef = doc(db, "Items", itemId);

    await updateDoc(itemRef, {
      viewcount: increment(1),
    });

    return { success: true };
  } catch (error) {
    console.error("Error updating viewCount", error);
    return { success: false, error: String(error) };
  }
}

export async function fetchItemsByUser(
  userId: string
): Promise<{ success: boolean; data?: Item[]; error?: string }> {
  try {
    const firestore = getFirestore();

    const q = query(
      collection(firestore, "Items"),
      where("ownerId", "==", userId)
    );

    const querySnapshot = await getDocs(q);
    const items: Item[] = [];
    querySnapshot.forEach((doc) => {
      items.push({
        id: doc.id,
        ...(doc.data() as Omit<Item, "id">),
      });
    });

    return { success: true, data: items };
  } catch (error) {
    console.error(error);
    return { success: false, error: String(error) };
  }
}

// for search

export async function fetchItemByQuery(
  searchQuery: string,
  categoryType: string
): Promise<{ success: boolean; data?: Item[]; error?: string }> {
  try {
    const firestore = getFirestore();

    if (!searchQuery || searchQuery.trim() === "") {
      return { success: false, error: "Search query is empty" };
    }

    const searchTerm = searchQuery.trim();

    let q;

    if (categoryType) {
      q = query(
        collection(firestore, "Items"),
        orderBy("title"),
        where("category", "==", categoryType),
        startAt(searchTerm)
      );
    } else {
      q = query(
        collection(firestore, "Items"),
        orderBy("title"),
        startAt(searchTerm)
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
    console.log(items);
    return { success: true, data: items };
  } catch (error) {
    console.error("Error in fetchItemsByQuery ", error);
    return { success: false, error: String(error) };
  }
}
