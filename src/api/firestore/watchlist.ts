import {doc,updateDoc,collection,setDoc,arrayRemove,getDoc, getFirestore, arrayUnion} from "@react-native-firebase/firestore"
export const addToWatchlist = async (userId: string, itemId: string) => {
  try {
    const db = getFirestore();
    const UserRef = doc(db,"users",userId);

    await updateDoc(UserRef, {
      watclist: arrayUnion(itemId),
    });

    console.log("Watchlist item added successfully");
  } catch (error) {
    console.error("Failed to add to watchlist:", error);
    throw error;
  }
};

export const removeFromWatchList = async (userId: string, itemId: string) => {
    const db = getFirestore();
    const userRef = doc(db,"users",userId);

    try{
        await updateDoc(userRef, {
            watchlist: arrayRemove(itemId),
        });
    } catch(error) {
        console.error("Error remobving from watchlist:", error);
        throw new Error("Failed to remove from watchlist.");
    }
};

export const getUserWatchList = async (UserId: string): Promise <string[]> => {

    try{
        const db = getFirestore();
        const userRef = doc(db,"users",UserId);
        const usersnap = await getDoc(userRef);
        if(usersnap.exists()) {
            const data = usersnap.data();
            return data?.watchlist?? [];
        } else{
            throw new Error("user not found");
        }
    } catch(error) {
        console.error("Error getting user watchlist:", error);
        throw new Error("Failed to retrieve watchlist.");
    }
};

export const getItemDetails = async (itemId: string): Promise<any | null> => {
    try{
        const db = getFirestore();
        const itemRef = doc(db,"items",itemId);
        const snapshot = await getDoc(itemRef);
       return snapshot.exists() ? snapshot.data() : null;
    } catch(error) {
        console.error("Error fetching item details: ",error);
        return null;
    }
};  