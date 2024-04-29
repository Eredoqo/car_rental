import { RentalDto } from "./../dtos/rental/RentalDto";
import { APIURL } from "./../utils/constants";
import { useEffect, useState } from "react";
import axios from "axios";

export const useGetRentals = () => {
  const [data, setData] = useState<RentalDto[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchFilteredData = async (
    date?: string,
    hour?: string,
    carModel?: string
  ) => {
    setLoading(true);
    try {
      const response = await axios.get(`${APIURL}/rentals`, {
        params: {
          date,
          hour,
          carModel,
        },
        // headers: {
        //   Cookie: `gp-necessary=true; gitpod-user=true; gp-analytical=true; gp-targeting=true; ajs_anonymous_id=faf87b4d-8a06-4107-8262-6c53b40066a1; gitpod-marketing-website-visited=true; _gitpod_io_ws_bc75bf1c-d7bf-4206-bd6e-cd54e6399a67_owner_=d52FF-j6lvHxqnbX`,
        // },
      });
      if (response.status < 200 || response.status >= 300) {
        throw new Error("Failed to fetch car.");
      }
      const carData = await response.data;
      setData(carData);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFilteredData("", "", "");
  }, []);

  return { rentals: data, error, loading, fetchFilteredData };
};
