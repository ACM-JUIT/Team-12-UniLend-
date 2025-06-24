import { getAuth, sendPasswordResetEmail } from "@react-native-firebase/auth";


export default async function forgetPassword(email: string) {
    return await sendPasswordResetEmail(getAuth(), email);
}
