import {
  doc,
  getDoc,
  getFirestore,
  updateDoc,
} from "@react-native-firebase/firestore";

export interface UserProfile {
  name?: string;
  username?: string;
  sales?: number;
  hostel?: string;
  mobile?: string;
  email?: string;
  address: string;
  photoURL?: string;
}


export const getUserProfile = async (userId: string): Promise<UserProfile> => {
  try {
    const db = getFirestore();
    const userRef = doc(db, "Users", userId);
    const userSnap = await getDoc(userRef);
    if (!userSnap.exists()) throw new Error("User not found");
    return userSnap.data() as UserProfile;
  } catch (error) {
    console.error("Error getting user profile", error);
    throw error;
  }
};

export const updateUserProfile = async (
  userId: string,
  updates: {
    username?: string;
    email?: string;
    mobile?: string;
    hostel?: string;
    address?: string;
    photoURL?: string;
  }
) => {
  try {
    const db = getFirestore();
    const userRef = doc(db, "Users", userId);
    await updateDoc(userRef, updates);
  } catch (error) {
    console.error("Error updating user profile", String(error));
  }
};
