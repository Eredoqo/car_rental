import { Box, Button, Card, Stack, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { Avatar } from "@mui/material";

const StatusButton = ({ status }: { status: string }) => {
  let backgroundColor;
  switch (status) {
    case "Available":
      backgroundColor = "#ADFF2F";
      break;
    case "On Going":
      backgroundColor = "#E0B0FF";
      break;
    case "Canceled":
      backgroundColor = "#FFA07A";
      break;
    default:
      backgroundColor = "#808080";
  }

  return (
    <Button
      variant="outlined"
      sx={{
        border: "1px solid currentColor",
        background: backgroundColor,
        color: "white",
      }}
    >
      {status}
    </Button>
  );
};

const carList = [
  {
    no: "1",
    clientName: "John Doe",
    clientAvatar: "https://randomuser.me/api/portraits/men/1.jpg",
    carNumber: "ABC123",
    carType: "Sedan",
    status: "Available",
  },
  {
    no: "2",
    clientName: "John Doe",
    clientAvatar: "https://randomuser.me/api/portraits/men/1.jpg",
    carNumber: "ABC123",
    carType: "Sedan",
    status: "Canceled",
  },
  {
    no: "3",
    clientName: "John Doe",
    clientAvatar: "https://randomuser.me/api/portraits/men/1.jpg",
    carNumber: "ABC123",
    carType: "Sedan",
    status: "On Going",
  },
  {
    no: "4",
    clientName: "John Doe",
    clientAvatar: "https://randomuser.me/api/portraits/men/1.jpg",
    carNumber: "ABC123",
    carType: "Sedan",
    status: "Available",
  },
  {
    no: "5",
    clientName: "John Doe",
    clientAvatar: "https://randomuser.me/api/portraits/men/1.jpg",
    carNumber: "ABC123",
    carType: "Sedan",
    status: "Canceled",
  },
  {
    no: "6",
    clientName: "John Doe",
    clientAvatar: "https://randomuser.me/api/portraits/men/1.jpg",
    carNumber: "ABC123",
    carType: "Sedan",
    status: "Available",
  },
  {
    no: "7",
    clientName: "John Doe",
    clientAvatar: "https://randomuser.me/api/portraits/men/1.jpg",
    carNumber: "ABC123",
    carType: "Sedan",
    status: "On Going",
  },
];
export default function CarListingCard() {
  return (
    <>
      <Card sx={{ borderRadius: "20px", width: "760px", flexShrink: 0 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            padding: "10px 30px 10px 30px",
          }}
        >
          <Typography
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            Car Listings
          </Typography>
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
            padding: "0 20px 0 20px",
            height: "auto",
          }}
        >
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ textAlign: "center" }}>No</TableCell>
                  <TableCell sx={{ textAlign: "center" }}>
                    Client Name
                  </TableCell>
                  <TableCell sx={{ textAlign: "center" }}>Car Number</TableCell>
                  <TableCell sx={{ textAlign: "center" }}>Car Type</TableCell>
                  <TableCell sx={{ textAlign: "center" }}>Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {carList.map((car) => (
                  <TableRow key={car.no}>
                    <TableCell sx={{ border: 0, textAlign: "center" }}>
                      {car.no}
                    </TableCell>
                    <TableCell sx={{ border: 0, textAlign: "center" }}>
                      <Stack
                        direction="row"
                        gap="10px"
                        alignItems="center"
                        justifyContent="center"
                      >
                        <Avatar src={car.clientAvatar} alt={car.clientName} />
                        {car.clientName}
                      </Stack>
                    </TableCell>
                    <TableCell sx={{ border: 0, textAlign: "center" }}>
                      {car.carNumber}
                    </TableCell>
                    <TableCell sx={{ border: 0, textAlign: "center" }}>
                      {car.carType}
                    </TableCell>
                    <TableCell sx={{ border: 0, textAlign: "center" }}>
                      <StatusButton status={car.status} />
                    </TableCell>
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
