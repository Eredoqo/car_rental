import { Card, Box, Typography } from "@mui/material";

export default function StatisticsCard() {
  return (
    <>
      <Card sx={{ borderRadius: "20px" }}>
        <Box
          sx={{
            mt: 2,
            display: "flex",
            flexDirection: "column",
            padding: "20px",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
            width: "280px",
          }}
        >
          <Typography variant="h6">Statistics</Typography>
          <Typography variant="subtitle1" color="grey">
            5 Cars Available
          </Typography>
          <Typography variant="subtitle1" color="grey">
            3 Bookings Today
          </Typography>
          <Typography variant="subtitle1" color="grey">
            2 Bookings Pending
          </Typography>
          <Typography variant="subtitle1" color="grey">
            3 Cars Rented
          </Typography>
        </Box>
      </Card>
    </>
  );
}
