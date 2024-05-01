import { APIURL } from "./../utils/constants";
import { useState } from "react";

export const useUserLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      const response = await fetch(`${APIURL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Cookie: `gp-necessary=true; gitpod-user=true; gp-analytical=true; gp-targeting=true; ajs_anonymous_id=faf87b4d-8a06-4107-8262-6c53b40066a1; gitpod-marketing-website-visited=true; _gitpod_io_ws_bc75bf1c-d7bf-4206-bd6e-cd54e6399a67_owner_=d52FF-j6lvHxqnbX`,
        },
        body: JSON.stringify({ email, password }),
      });
      console.log("Server response:", response);
      if (!response.ok) {
        if (response.status === 400) {
          throw new Error("Invalid email or password");
        } else {
          throw new Error("Server error");
        }
      }
      const data = await response.json();
      if (data.data && data.data.id) {
        localStorage.setItem("userId", data.data.id);
      }
      if (data.token) {
        localStorage.setItem("token", data.token);
      }
      if (data.username) {
        localStorage.setItem("username", data.username);
      }
      console.log("Data:", data);

      return data;
    } catch (err) {
      console.error(err, "err");
      setError((err as Error).message);
    } finally {
      setIsLoading(false);
    }
  };

  return { login, isLoading, error };
};
