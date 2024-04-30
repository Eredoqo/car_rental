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
              Manage Your Fleet Efficiently
            </Typography>
            <Typography width="95%">
              Gain a comprehensive overview of your vehicle inventory. Easily
              add, update, or remove vehicles to ensure your fleet meets
              customer demands. Use our intuitive admin dashboard to streamline
              your operations and enhance your service.
            </Typography>
            <Button variant="contained" sx={{ color: "white" }}>
              Go to Inventory
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
