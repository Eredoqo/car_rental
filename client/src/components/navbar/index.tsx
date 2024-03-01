import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Logo from "./../../images/New.png";
import { Link } from "react-router-dom";
import { MenuSize } from "./menu-size";
import { SettingsMenu } from "./settings";
import { pages } from "./../../utils/data";

function Navbar() {
  const [navbarBackground, setNavbarBackground] =
    React.useState<string>("transparent");
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const threshold = 140;

      if (scrollTop > threshold) {
        setNavbarBackground("white");
        setIsScrolled(true);
      } else {
        setNavbarBackground("transparent");
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AppBar style={{ background: navbarBackground }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <img
              style={{ height: "120px", width: "120px", borderRadius: "5px" }}
              src={Logo}
              alt=""
            />
          </Typography>
          <MenuSize />

          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
              gap: 3,
            }}
          >
            {pages.map((page) => (
              <Box
                component={Link}
                key={page}
                to={`/${page.toLowerCase()}`}
                sx={{
                  color: isScrolled ? "black" : "white",
                  marginLeft: "20px",
                  fontSize: "16px",
                  textDecoration: "none",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontFamily: '"Poppins", Arial, sans-serif',
                  transition: "color 0.3s ease",
                  "&:hover": {
                    color: isScrolled ? "blue" : "#00D28D",
                  },
                }}
              >
                {page}
              </Box>
            ))}
          </Box>
          <SettingsMenu />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
