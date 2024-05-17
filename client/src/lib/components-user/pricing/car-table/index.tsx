import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useGetCar } from "../../../../hooks/useGetCar";
import { useGetRate } from "../../../../hooks/useGetRate";

import { data } from "../../../../utils/data";
import HeaderCell from "./header-cell";
import CarRow from "./car-row";

const CarTable = () => {
  const { cars } = useGetCar();
  const { rates } = useGetRate();

  return (
    <TableContainer
      sx={{
        display: "flex",
        justifyContent: "center",
        marginTop: "100px",
        marginBottom: "100px",
      }}
    >
      <Table
        sx={{ width: "auto", borderCollapse: "collapse" }}
        aria-label="simple table"
      >
        <TableHead sx={{ height: "120px" }}>
          <TableRow>
            <TableCell style={{ background: "white", borderBottom: "none" }} />
            <HeaderCell background="#0E89FF" label={data.pricing.hour} />
            <HeaderCell background="grey" label={data.pricing.day} />
            <HeaderCell background="#00D28D" label={data.pricing.week} />
          </TableRow>
        </TableHead>
        <TableBody>
          {cars?.map((car, i) => {
            const carRate = rates?.find((rate) => rate.carId === car.id);
            return (
              <CarRow
                car={car}
                carRate={carRate || { dailyRate: 0, weeklyRate: 0 }}
                i={i}
              />
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CarTable;
