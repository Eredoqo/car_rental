import { Box, Stack } from "@mui/material";
import Sidebar from "./sidebar";
import Layout from "../layout";
import ProfileCard from "../cards/profile";
import ExploreCard from "../cards/explore";
import CarListingCard from "../cards/car-listing";

export function Dashboard() {
  return (
    <Box sx={{ display: "flex", flexDirection: "row" }}>
      <Sidebar />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          bgcolor: "grey.100",
        }}
      >
        <Layout />
        <Box padding="0 90px 0 70px ">
          <Stack
            sx={{
              gap: 6,
              width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <ExploreCard />
            <ProfileCard />
          </Stack>
        </Box>
        <Box padding="0 90px 0 70px ">
          <Stack
            sx={{
              paddingTop: 6,
              gap: 6,
              width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <CarListingCard />
            <ProfileCard />
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}
