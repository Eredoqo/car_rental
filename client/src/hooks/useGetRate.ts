import { RateDto } from "@/dtos/rate/rateDto";
import { APIURL } from "./../utils/constants";
import { useEffect, useState } from "react";

export const useGetRate = () => {
  const [data, setData] = useState<RateDto[] | null>(null); // Changed to RateDto[]
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRate = async () => {
      try {
        const response = await fetch(`${APIURL}/rates`, {
          headers: {
            Cookie: `gp-necessary=true; gitpod-user=true; gp-analytical=true; gp-targeting=true; ajs_anonymous_id=faf87b4d-8a06-4107-8262-6c53b40066a1; gitpod-marketing-website-visited=true; _gitpod_io_ws_bc75bf1c-d7bf-4206-bd6e-cd54e6399a67_owner_=d52FF-j6lvHxqnbX`,
          },
        });
        if (!response.ok) {
          throw new Error("Failed to fetch rate.");
        }
        const rateData = await response.json();
        setData(rateData);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };
    fetchRate();
  }, []);

  return { rates: data, error, loading }; // Changed to rates
};
