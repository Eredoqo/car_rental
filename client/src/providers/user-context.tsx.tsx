import { UserDto } from "@/dtos/user/user";
import React, { createContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

export interface AuthContextProps {
  user: UserDto | null;
  login: (token: string) => void;
  logout: () => void;
}

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthContext = createContext<AuthContextProps | undefined>(
  undefined
);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<UserDto | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      const decodedToken = jwtDecode(token);
      console.log(decodedToken, "decodedToken");
      setUser(decodedToken as UserDto);
    }

    setIsLoading(false);
  }, []);

  const login = (token: string) => {
    localStorage.setItem("token", token);
    const decodedToken = jwtDecode(token);
    setUser(decodedToken as UserDto);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
