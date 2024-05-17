import { Box } from "@mui/material";
import CarTable from "./car-table";
import { LayoutWrapper } from "../../admin-home";

export default function CarDetails() {
  return (
    <LayoutWrapper>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>Car Details</h1>
        <CarTable />
      </Box>
    </LayoutWrapper>
  );
}
