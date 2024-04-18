/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { APIURL } from "@/utils/constants";
import axios from "axios";
import { Car } from "@/components/admin/utils";

export default function CarTable() {
  const [cardetails, setCarDetails] = useState<Car[]>([]);
  const navigate = useNavigate();
  const [carDeleted, setCarDeleted] = useState(false);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await axios.get(`${APIURL}/cars`);
        setCarDetails(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCars();
  }, []);

  const handleDelete = async (id: string) => {
    try {
      await axios.delete(`${APIURL}/cardetailsadmin/${id}`);
      setCarDetails((prevCars) => prevCars.filter((car: Car) => car.id !== id));
      setCarDeleted(true);
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdate = () => {
    navigate("/updatecars");
  };
  return (
    <>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Make</TableCell>
              <TableCell>Model</TableCell>
              <TableCell>Year</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Car Title</TableCell>
              <TableCell>Image</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Rated</TableCell>
              <TableCell>Body</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Mileage</TableCell>
              <TableCell>Transmission</TableCell>
              <TableCell>Seats</TableCell>
              <TableCell>Fuel</TableCell>
              <TableCell>GPS</TableCell>
              <TableCell>Child Seat</TableCell>
              <TableCell>Aircondition</TableCell>
              <TableCell>Music</TableCell>
              <TableCell>Car Kit</TableCell>
              <TableCell>Audio</TableCell>
              <TableCell>Climate Control</TableCell>{" "}
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cardetails.map((car) => (
              <TableRow key={car.id}>
                <TableCell>{car.make}</TableCell>
                <TableCell>{car.model}</TableCell>
                <TableCell>{car.year}</TableCell>
                <TableCell>{car.status}</TableCell>
                <TableCell>{car.CarSpec?.carTitle}</TableCell>
                <TableCell>{car.CarSpec?.image}</TableCell>
                <TableCell>{car.CarSpec?.description}</TableCell>
                <TableCell>{car.CarSpec?.rated}</TableCell>
                <TableCell>{car.CarSpec?.body}</TableCell>
                <TableCell>{car.CarSpec?.price}</TableCell>
                <TableCell>{car.CarSpec?.mileage}</TableCell>
                <TableCell>{car.CarSpec?.transmission}</TableCell>
                <TableCell>{car.CarSpec?.seats}</TableCell>
                <TableCell>{car.CarSpec?.fuel}</TableCell>
                <TableCell>{car.CarSpec?.gps ? "Yes" : "No"}</TableCell>
                <TableCell>{car.CarSpec?.childSeat}</TableCell>
                <TableCell>
                  {car.CarSpec?.aircondition ? "Yes" : "No"}
                </TableCell>
                <TableCell>{car.CarSpec?.music ? "Yes" : "No"}</TableCell>
                <TableCell>{car.CarSpec?.carKit ? "Yes" : "No"}</TableCell>
                <TableCell>{car.CarSpec?.audio ? "Yes" : "No"}</TableCell>
                <TableCell>
                  {car.CarSpec?.climateControl ? "Yes" : "No"}
                </TableCell>
                <TableCell>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <Button
                      color="secondary"
                      variant="outlined"
                      onClick={handleUpdate}
                    >
                      Update
                    </Button>
                    <Button
                      sx={{ marginLeft: "30px" }}
                      color="error"
                      variant="contained"
                      onClick={() => handleDelete(car.id)}
                    >
                      Delete
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
