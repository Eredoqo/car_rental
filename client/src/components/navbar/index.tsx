/* eslint-disable @typescript-eslint/no-unused-vars */
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Logo from "./../../images/New.png";
import { Link } from "react-router-dom";
import { MenuSize } from "./menu-size";
import { SettingsMenu } from "./settings";
import { pages } from "./../../utils/data";
import { Button } from "@mui/material";
import LoginModal from "../login/login-modal";
import { RegisterModal } from "../login/register-modal";
import { useAuth } from "@/contexts/useAuth";
import { useEffect, useState } from "react";
import { UserDto } from "@/dtos/user/user";
// import { useNavigate } from "react-router-dom";
// import { useLocation } from "react-router-dom";

function Navbar() {
  const [navbarBackground, setNavbarBackground] =
    useState<string>("transparent");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoginOpen, setLoginOpen] = useState(false);
  const [isRegisterOpen, setRegisterOpen] = useState(false);
  const { user, logout } = useAuth();

  useEffect(() => {
    let isMounted = true; // add this line

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const threshold = 140;

      if (scrollTop > threshold) {
        if (isMounted) {
          // add this line
          setNavbarBackground("white");
          setIsScrolled(true);
        }
      } else {
        if (isMounted) {
          // add this line
          setNavbarBackground("transparent");
          setIsScrolled(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      isMounted = false; // add this line
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // //TODO test this code

  // const navigate = useNavigate();
  // const location = useLocation();
  // const path = location.pathname;

  // const handleNavigate = (path: string) => {
  //   navigate(path);
  // };

  // if (path === "/login") {
  //   return <LoginModal isOpen={true} onClose={() => handleNavigate("/")} />;
  // }
  // if (path === "/register") {
  //   return <RegisterModal isOpen={true} onClose={() => handleNavigate("/")} />;
  // }

  return (
    <AppBar style={{ background: navbarBackground, boxShadow: "none" }}>
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
          <img style={{ height: "80px", width: "80px" }} src={Logo} alt="" />
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
            gap: 1,
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

        <Box
          sx={{
            marginLeft: "30px",
            cursor: "pointer",
            display: "flex",
            flexDirection: "row",
            gap: 3,
          }}
        >
          {user ? (
            <>
              <SettingsMenu />
              <Button
                variant="contained"
                size="large"
                color="primary"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontFamily: '"Poppins", Arial, sans-serif',
                }}
                onClick={logout}
              >
                Log out
              </Button>
            </>
          ) : (
            <>
              <Button
                variant="contained"
                size="large"
                color="primary"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontFamily: '"Poppins", Arial, sans-serif',
                }}
                onClick={() => setLoginOpen(true)}
              >
                Log in
              </Button>
              <LoginModal
                isOpen={isLoginOpen}
                onClose={() => setLoginOpen(false)}
              />
              <Button
                variant="contained"
                size="large"
                color="primary"
                sx={{
                  marginRight: "30px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontFamily: '"Poppins", Arial, sans-serif',
                }}
                onClick={() => setRegisterOpen(true)}
              >
                Sign Up
              </Button>
              <RegisterModal
                isOpen={isRegisterOpen}
                onClose={() => setRegisterOpen(false)}
              />
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;
