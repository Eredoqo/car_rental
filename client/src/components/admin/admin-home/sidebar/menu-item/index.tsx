import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { FC } from "react";
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import GridViewIcon from "@mui/icons-material/GridView";
import InventoryIcon from "@mui/icons-material/Inventory";
import CarRentalIcon from "@mui/icons-material/CarRental";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LogoutIcon from "@mui/icons-material/Logout";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import SettingsIcon from "@mui/icons-material/Settings";
import { Link } from "react-router-dom";
import { List, Typography, Divider } from "@mui/material";

export default function MenuItems() {
  const menuItems1 = [
    { text: "Dashboard", icon: <GridViewIcon /> },
    { text: "Cars", icon: <AccessibilityIcon />, path: "/cardetailsadmin" },
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

  interface MenuItemProps {
    text: string;
    icon: JSX.Element;
    path?: string;
  }

  const MenuItem: FC<MenuItemProps> = ({ text, icon, path }) => (
    <ListItem disablePadding>
      {path ? (
        <Link to={path}>
          <ListItemButton>
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItemButton>
        </Link>
      ) : (
        <ListItemButton>
          <ListItemIcon>{icon}</ListItemIcon>
          <ListItemText primary={text} />
        </ListItemButton>
      )}
    </ListItem>
  );
  return (
    <>
      <List sx={{ marginLeft: "20px" }}>
        <Typography sx={{ padding: "20px" }}>Admin Overview</Typography>
        {menuItems1.map((item) => (
          <MenuItem key={item.text} {...item} />
        ))}
      </List>
      <Divider />
      <List>
        <Typography sx={{ padding: "20px" }}>Reports</Typography>
        {menuItems2.map((item) => (
          <MenuItem key={item.text} {...item} />
        ))}
        <MenuItem key={logoutItem.text} {...logoutItem} />
      </List>
    </>
  );
}
