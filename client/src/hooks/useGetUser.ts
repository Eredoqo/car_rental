import { useEffect, useState } from "react";
import { jwtDecode, JwtPayload } from "jwt-decode";
import { UserDto } from "@/dtos/user/user";

type MyJwtPayload = JwtPayload & { data: UserDto };

export const useGetUser = () => {
  const [user, setUser] = useState<UserDto | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem("token");

  console.log(user, "user useGetUser");

  useEffect(() => {
    try {
      console.log("Token:", token);
      if (!token) {
        throw new Error("No token found.");
      }
      const decodedToken = jwtDecode(token) as MyJwtPayload;
      setUser(decodedToken.data);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  }, [token]);

  return { user, error, loading };
};
