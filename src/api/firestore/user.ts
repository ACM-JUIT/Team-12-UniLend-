import { doc, getDoc, updateDoc, getFirestore } from "firebase/firestore";

const db = getFirestore();

export const getUserProfile = async (userId: string) => {
  const userRef = doc(db, "Users", userId);
  const userSnap = await getDoc(userRef);
  if (!userSnap.exists()) throw new Error("User not found");
  return userSnap.data();
};

export const updateUserProfile = async (
  userId: string,
  updates: { 
    username?: string; 
    email?: string, 
    mobile?: string,
    hostel?: string,
    address?: string
    }
) => {
  const userRef = doc(db, "Users", userId);
  await updateDoc(userRef, updates);
};
