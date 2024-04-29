import { Box, Stack } from "@mui/material";
import { LayoutWrapper } from "../../admin-home";
import BookedCard from "./booked-card";
import BookingsDetailsCard from "./bookings-details-card";

export default function Booking() {
  return (
    <LayoutWrapper>
      <Box
        sx={{ padding: "30px", display: "flex", flexDirection: "column" }}
        gap={2}
      >
        <h1 style={{ display: "flex", justifyContent: "center" }}>Bookings</h1>

        <Stack flexDirection="row" justifyContent="space-between" gap={4}>
          <BookingsDetailsCard />
          <BookedCard />
        </Stack>
      </Box>
    </LayoutWrapper>
  );
}
