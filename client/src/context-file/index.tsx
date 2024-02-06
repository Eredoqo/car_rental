import { createContext } from "react";
import useFirebase from "../hooks/useFirebase";

type AuthContextType = {
  user: unknown;
  error: string;
  singnInWithGoogle: () => void;
  handleFacebookSignIN: () => void;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

const AuthProvider = ({ children }: any) => {
  const allContext = useFirebase();
  return (
    <AuthContext.Provider value={allContext}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
