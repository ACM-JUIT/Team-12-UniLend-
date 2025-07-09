import {
  getAuth,
  signInWithEmailAndPassword
} from "@react-native-firebase/auth";

import {
  doc,
  getFirestore,
  serverTimestamp,
  updateDoc
} from "@react-native-firebase/firestore";


export default async function logIn({email, password}: {email: string, password: string}) {
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
  } catch (error) {
    throw error
  }
}
