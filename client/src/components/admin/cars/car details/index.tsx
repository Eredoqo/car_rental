/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect } from "react";
import axios from "axios";
import { Card } from "@mui/material";
import { APIURL } from "@/utils/constants";
import { useGetCar } from "@/hooks/useGetCar";
import { useNavigate } from "react-router-dom";
import CarTable from "./car-table";
import { Car } from "../../utils";

export default function CarDetails() {
  const { cars } = useGetCar();
  const [cardetails, setCarDetails] = useState<Car[]>([]);
  const navigate = useNavigate();
  const [carDeleted, setCarDeleted] = useState(false);

  useEffect(() => {
    if (cars) {
      setCarDetails(cars);
    }
  }, [cars]);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await axios.get(`${APIURL}/cars`);
        setCarDetails(response.data);
        setCarDeleted(false);
      } catch (error) {
        console.error(error);
      }
    };

    if (carDeleted) {
      fetchCars();
    }
  }, [carDeleted]);

  if (!cars) {
    return <div>Loading...</div>;
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>Car Details</h1>
      <Card
        sx={{
          width: "80%",
          padding: "20px",
        }}
      >
        <CarTable />
      </Card>
    </div>
  );
}
