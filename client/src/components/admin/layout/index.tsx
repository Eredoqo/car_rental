import { Box, Typography, Avatar } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";

export default function Layout() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          padding: "30px 50px 30px 90px",
        }}
      >
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Overview
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <NotificationsIcon
            sx={{
              color: "grey",
              bgcolor: "white",
              fontSize: "2.5rem",
              borderRadius: "50%",
              p: 1,
            }}
          />
          <Avatar
            src="https://randomuser.me/api/portraits/men/1.jpg"
            sx={{ ml: 5, mr: 5 }}
          ></Avatar>
        </Box>
      </Box>
    </>
  );
}
