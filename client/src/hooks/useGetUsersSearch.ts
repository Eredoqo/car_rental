import { UserDto } from "@/dtos/user/user";
import { APIURL } from "./../utils/constants";
import { useEffect, useState } from "react";

export const useGetUsersSearch = () => {
  const [data, setData] = useState<UserDto[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCar = async () => {
      try {
        const response = await fetch(`${APIURL}/users`, {
          headers: {
            Cookie: `gp-necessary=true; gitpod-user=true; gp-analytical=true; gp-targeting=true; ajs_anonymous_id=faf87b4d-8a06-4107-8262-6c53b40066a1; gitpod-marketing-website-visited=true; _gitpod_io_ws_bc75bf1c-d7bf-4206-bd6e-cd54e6399a67_owner_=d52FF-j6lvHxqnbX`,
          },
        });
        if (!response.ok) {
          throw new Error("Failed to fetch car.");
        }
        const usersData = await response.json();
        setData(usersData);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };
    fetchCar();
  }, []);

  return { users: data, error, loading };
};
