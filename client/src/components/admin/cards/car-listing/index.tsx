import { Box, Card, Divider, Stack, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
// import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const carList = [
  {
    no: "1",
    clientName: "John Doe",
    carNumber: "ABC123",
    carType: "Sedan",
    status: "Available",
  },
  {
    no: "2",
    clientName: "John Doe",
    carNumber: "ABC123",
    carType: "Sedan",
    status: "Available",
  },
  {
    no: "3",
    clientName: "John Doe",
    carNumber: "ABC123",
    carType: "Sedan",
    status: "Available",
  },
  {
    no: "4",
    clientName: "John Doe",
    carNumber: "ABC123",
    carType: "Sedan",
    status: "Available",
  },
  {
    no: "5",
    clientName: "John Doe",
    carNumber: "ABC123",
    carType: "Sedan",
    status: "Available",
  },
];
export default function CarListingCard() {
  // const [carList, setCarList] = useState([]);

  // useEffect(() => {
  //   fetch('https://your-backend-url.com/cars')
  //     .then(response => response.json())
  //     .then(data => setCarList(data));
  // }, []);
  return (
    <>
      <Card sx={{ borderRadius: "20px" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            padding: "15px 30px 15px 30px",
          }}
        >
          <Typography>Car Listings</Typography>
          <Stack
            flexDirection="row"
            alignItems="center"
            onClick={() => console.log("clicked")}
            sx={{
              mt: 1,
              border: " 1px solid grey",
              borderRadius: "10px",
              cursor: "pointer",
            }}
          >
            <Typography sx={{ p: 1, fontSize: "14px", color: "grey" }}>
              This week
            </Typography>
            <Stack>
              <KeyboardArrowDownIcon sx={{ color: "grey" }} />
            </Stack>
          </Stack>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            padding: "10px 20px",
          }}
        >
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>No</TableCell>
                  <TableCell>Client Name</TableCell>
                  <TableCell>Car Number</TableCell>
                  <TableCell>Car Type</TableCell>
                  <TableCell>Status</TableCell>
                </TableRow>
              </TableHead>
              <Divider sx={{ width: "90%", margin: "auto" }} />
              <TableBody>
                {carList.map((car) => (
                  <TableRow key={car.no}>
                    <TableCell sx={{ border: 0 }}>{car.no}</TableCell>
                    <TableCell sx={{ border: 0 }}>{car.clientName}</TableCell>
                    <TableCell sx={{ border: 0 }}>{car.carNumber}</TableCell>
                    <TableCell sx={{ border: 0 }}>{car.carType}</TableCell>
                    <TableCell sx={{ border: 0 }}>{car.status}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Card>
    </>
  );
}
