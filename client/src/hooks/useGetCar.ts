import { CarDto } from "./../dtos/car/CarDto";
import { APIURL } from "./../utils/constants";
import { useEffect, useState } from "react";

export const useGetCar = () => {
  const [data, setData] = useState<CarDto[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCar = async () => {
      try {
        const response = await fetch(`${APIURL}/car`, {
          headers: {
            Cookie: `gp-necessary=true; gitpod-user=true; gp-analytical=true; gp-targeting=true; ajs_anonymous_id=faf87b4d-8a06-4107-8262-6c53b40066a1; gitpod-marketing-website-visited=true; _gitpod_io_ws_bc75bf1c-d7bf-4206-bd6e-cd54e6399a67_owner_=d52FF-j6lvHxqnbX`,
          },
        });
        if (!response.ok) {
          throw new Error("Failed to fetch car.");
        }
        const carData = await response.json();
        setData(carData);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };
    fetchCar();
  }, []);

  return { cars: data, error, loading };
};
