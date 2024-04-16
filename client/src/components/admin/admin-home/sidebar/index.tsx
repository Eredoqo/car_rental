import {
  Box,
  Button,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import GridViewIcon from "@mui/icons-material/GridView";
import InventoryIcon from "@mui/icons-material/Inventory";
import CarRentalIcon from "@mui/icons-material/CarRental";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LogoutIcon from "@mui/icons-material/Logout";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import SettingsIcon from "@mui/icons-material/Settings";
import Logo from "./../../../../images/Logo_New.png";

const menuItems1 = [
  { text: "Dashboard", icon: <GridViewIcon /> },
  { text: "Cars", icon: <AccessibilityIcon /> },
  { text: "Inventory", icon: <InventoryIcon /> },
  { text: "Bookings", icon: <BookmarksIcon /> },
  { text: "Calendar", icon: <CalendarMonthIcon /> },
];

const menuItems2 = [
  { text: "Transactions", icon: <AccountBalanceIcon /> },
  { text: "Settings", icon: <SettingsIcon /> },
  { text: "Car Reports", icon: <CarRentalIcon /> },
];

const logoutItem = { text: "Logout", icon: <LogoutIcon color="warning" /> };

export default function Sidebar() {
  const drawer = (
    <>
      <List>
        <Typography sx={{ padding: "20px" }}>Admin panel</Typography>
        {menuItems1.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        <Typography sx={{ padding: "20px" }}>Reports</Typography>
        {menuItems2.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem key={logoutItem.text} disablePadding>
          <ListItemButton>
            <ListItemIcon>{logoutItem.icon}</ListItemIcon>
            <Button color="warning">{logoutItem.text} </Button>
          </ListItemButton>
        </ListItem>
      </List>
    </>
  );
  return (
    <Box sx={{ display: "flex" }}>
      <Box sx={{ width: 300, paddingLeft: "30px" }}>
        <img style={{ height: "10%" }} src={Logo} />
        {drawer}
      </Box>
    </Box>
  );
}
