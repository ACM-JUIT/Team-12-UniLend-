import {
  arrayRemove,
  arrayUnion,
  doc,
  getDoc,
  getFirestore,
  updateDoc
} from "@react-native-firebase/firestore";

export const addToWatchlist = async (userId: string, itemId: string) => {
  try {
    const db = getFirestore();
    const userRef = doc(db, "Users", userId);

    await updateDoc(userRef, {
      watchlist: arrayUnion(itemId), 
    });

    console.log("Watchlist item added successfully");
  } catch (error) {
    console.error("Failed to add to watchlist:", error);
    throw error;
  }
};

export const removeFromWatchlist = async (userId: string, itemId: string) => { 
  const db = getFirestore();
  const userRef = doc(db, "Users", userId);

  try {
    await updateDoc(userRef, {
      watchlist: arrayRemove(itemId),
    });
  } catch (error) {
    console.error("Error removing from watchlist:", error);  
    throw new Error("Failed to remove from watchlist.");
  }
};

export const getUserWatchlist = async (userId: string): Promise<string[]> => {  
  try {
    const db = getFirestore();
    const userRef = doc(db, "Users", userId);
    const userSnap = await getDoc(userRef);
    
    if (userSnap.exists()) {
      const data = userSnap.data();
      return data?.watchlist ?? [];
    } else {
      throw new Error("User not found");
    }
  } catch (error) {
    console.error("Error getting user watchlist:", error);
    throw new Error("Failed to retrieve watchlist.");
  }
};