import {
    FirebaseAuthTypes,
    getAuth,
    onAuthStateChanged,
} from "@react-native-firebase/auth";
import React, { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext<{
  user: FirebaseAuthTypes.User | null;
  loading: boolean;
}>({
  user: null,
  loading: true,
});
export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
    //   console.log("USER: ", user);
      setUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  return <AuthContext value={{ user, loading }}>{children}</AuthContext>;
}
