import {doc,updateDoc,arrayUnion,arrayRemove,getDoc, getFirestore} from "@react-native-firebase/firestore"

export const addToWatchList = async (userId: string, postId: string) => {
    const db = getFirestore();
    const userRef = doc(db,"users",userId);

    try{
        await updateDoc(userRef, {
            watchlist: arrayUnion(postId),
        });
    } catch(error) {
        console.error("Error removing form watchlist: ", error);
        throw new Error("Failed to remove from watchlist.");
    }
};

export const removeFromWatchList = async (userId: string, postId: string) => {
    const db = getFirestore();
    const userRef = doc(db,"users",userId);

    try{
        await updateDoc(userRef, {
            watchlist: arrayRemove(postId),
        });
    } catch(error) {
        console.error("Error remobving from watchlist:", error);
        throw new Error("Failed to remove from watchlist.");
    }
};

export const getUserWatchList = async (UserId: string): Promise <string[]> => {
    const db = getFirestore();
    const userRef = doc(db,"users","userId");

    try{
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
    const db = getFirestore();
    const itemRef = doc(db,"'items",itemId);
    const snapshot = await getDoc(itemRef);
    return snapshot.exists() ? snapshot.data() : null;
}