import {
  doc,
  getDoc,
  getFirestore,
  updateDoc,
} from "@react-native-firebase/firestore";

const db = getFirestore();

export const getUserProfile = async (userId: string) => {
  try {
    const userRef = doc(db, "Users", userId);
    const userSnap = await getDoc(userRef);
    if (!userSnap.exists()) throw new Error("User not found");
    return userSnap.data();
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
  }
) => {
  const userRef = doc(db, "Users", userId);
  await updateDoc(userRef, updates);
};
