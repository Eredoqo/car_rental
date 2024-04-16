/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from "react";
import { styled, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Logo from "./../../../../images/Logo_New.png";
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

const drawerWidth = 270;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

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

interface MenuItemProps {
  text: string;
  icon: JSX.Element;
}

const MenuItem: FC<MenuItemProps> = ({ text, icon }) => (
  <ListItem disablePadding>
    <ListItemButton>
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText primary={text} />
    </ListItemButton>
  </ListItem>
);

export default function Sidebar() {
  const [open, setOpen] = React.useState(true);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Drawer variant="permanent" open={open}>
        <DrawerHeader
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Rental Car
        </DrawerHeader>
        <Divider />
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
      </Drawer>
    </Box>
  );
}
