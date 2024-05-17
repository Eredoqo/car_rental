import { useEffect, useState } from "react";
import { jwtDecode, JwtPayload } from "jwt-decode";
import { UserDto } from "@/dtos/user/user";

type MyJwtPayload = JwtPayload & { data: UserDto };

export const useGetUser = (loginCompleted?: boolean) => {
  const [user, setUser] = useState<UserDto | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    try {
      if (!token) {
        setLoading(false);
        return;
      }
      const decodedToken = jwtDecode<MyJwtPayload>(token);
      setUser(decodedToken.data);
    } catch (err) {
      console.error("Error setting user:", err);
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  }, [loginCompleted]);

  return { user, error, loading };
};
