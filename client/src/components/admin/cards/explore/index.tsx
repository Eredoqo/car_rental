import { Box, Button, Card, Stack, Typography } from "@mui/material";
import ExploreImg from "./../../../../images/explore.png";

export default function ExploreCard() {
  return (
    <>
      <Card sx={{ borderRadius: "20px" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            padding: "30px",
          }}
        >
          <Stack
            alignItems="flex-start"
            justifyContent="center"
            height="100%"
            width="400px"
            spacing={3}
          >
            <Typography width="80%" variant="h5">
              Get Where you need to go with our service
            </Typography>
            <Typography width="95%">
              Budget-frinedly car rentals for road trips, city visits, and more.
              Book now and start exploring
            </Typography>
            <Button variant="contained" sx={{ color: "white" }}>
              Start Exploring
            </Button>
          </Stack>
          <Stack width="40%">
            <img
              style={{
                width: " 250px",
                height: "250px",
              }}
              src={ExploreImg}
            />
          </Stack>
        </Box>
      </Card>
    </>
  );
}
