import {
  createUserWithEmailAndPassword,
  getAuth,
} from "@react-native-firebase/auth";
import {
  doc,
  getFirestore,
  serverTimestamp,
  setDoc,
} from "@react-native-firebase/firestore";

async function creatUserInFirestore(
  uid: string,
  {
    username,
    email,
    privacyPolicy,
  }: { username: string; email: string; privacyPolicy: boolean;}
) {
  const db = getFirestore();
  const userRef = doc(db, "Users", uid);

  await setDoc(userRef, {
    email,
    username,
    createdAt: serverTimestamp(),
    lastLoggedIn: serverTimestamp(),
    privacyPolicy,
    watchList: [],
  });
}

export default async function signUp({
  username, 
  email,
  password,
  privacyPolicy,
}: {
  username: string;
  email: string;
  password: string;
  privacyPolicy: boolean;
}) {
  try {
    const account = await createUserWithEmailAndPassword(
      getAuth(),
      email,
      password
    );

    const uid = account.user.uid;
    await creatUserInFirestore(uid, {
      username,
      email,
      privacyPolicy,
    });
    console.log("User account created & signed in!");
  } catch (error) {
    throw error;
  }
}
