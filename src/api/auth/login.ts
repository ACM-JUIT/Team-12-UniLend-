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

// const fetchUserData = async (uid: string) => {
//   try {
//     const db = getFirestore();
//     const userRef = doc(db, "Users", uid);
//     const userSnapshot = await getDoc(userRef);

//     if (userSnapshot.exists()) {
//       // console.log("User Data:", userSnapshot.data());
//       return userSnapshot.data();
//     } else {
//       // console.log("No such user!");
//       return null;
//     }
//   } catch (error) {
//     console.error("Error fetching user data:", error);
//     return null;
//   }
// };

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
