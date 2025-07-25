import {
  getAuth,
  signInWithEmailAndPassword,
} from "@react-native-firebase/auth";

import {
  doc,
  getFirestore,
  serverTimestamp,
  updateDoc,
} from "@react-native-firebase/firestore";

export default async function logIn({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<{ success: boolean; error?: any }> {
  try {
    const userCredential = await signInWithEmailAndPassword(
      getAuth(),
      email,
      password
    );
    const user = userCredential.user;
    const db = getFirestore();
    const userDocRef = doc(db, "Users", user.uid);

    await updateDoc(userDocRef, {
      lastLoggedIn: serverTimestamp(),
    });
    return { success: true };
  } catch (error) {
    console.dir(error)
    return { success: false, error: String(error) };
  }
}
