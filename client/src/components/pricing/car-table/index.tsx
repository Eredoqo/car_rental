import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { useGetCar } from "./../../../hooks/useGetCar";
import { useGetRate } from "./../../../hooks/useGetRate";

const CarTable = () => {
  const { cars } = useGetCar();
  const { rates } = useGetRate();
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Car Photo</TableCell>
            <TableCell>Name</TableCell>
            <TableCell align="right">Rated</TableCell>
            <TableCell align="right">Per Hour Rate</TableCell>
            <TableCell align="right">Per Day Rate</TableCell>
            <TableCell align="right">Leasing</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Mileage</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cars?.map((car) => {
            const carRate = rates?.find((rate) => rate.carId === car.id);
            return (
              <TableRow key={car.brand}>
                <TableCell component="th" scope="row">
                  <img src="" alt={car.model} />
                </TableCell>
                <TableCell>{car.price}</TableCell>
                <TableCell align="right">{carRate?.dailyRate}</TableCell>
                <TableCell align="right">{carRate?.weeklyRate}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CarTable;
