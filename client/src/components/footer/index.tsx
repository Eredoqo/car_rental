import { Box, Container, Grid, Typography, Stack } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LogoNew from "./../../images/Logo_New.png";
import { Link } from "react-router-dom";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

export const Footer = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        backgroundColor: "black",
        paddingTop: "1rem",
        paddingBottom: "1rem",
        borderRadius: "20px",
      }}
    >
      <Container maxWidth="lg">
        <Grid container direction="column" alignItems="center">
          <Grid
            item
            xs={12}
            sx={{
              width: "100%",
              flexdDirection: "row",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Stack color="black" sx={{ height: "auto", width: "200px" }}>
              <img
                style={{
                  height: "130px",
                  width: "180px",
                  paddingBottom: "1rem",
                }}
                src={LogoNew}
                alt=""
              />
              <Typography
                style={{
                  height: "auto",
                  width: "250px",
                  textAlign: "justify",
                  color: "white",
                }}
              >
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
                <Typography
                  sx={{
                    width: "100%",
                    flexdDirection: "row",
                    display: "flex",
                    justifyContent: "space-evenly",
                    paddingTop: "1rem",
                  }}
                >
                  <FacebookIcon color="primary" />
                  <InstagramIcon style={{ color: "#C13584" }} />
                  <TwitterIcon style={{ color: "#1DA1F2" }} />
                </Typography>
              </Typography>
            </Stack>
            <Stack>
              <Typography
                color="black"
                variant="h5"
                sx={{ paddingBottom: "30px", color: "white" }}
              >
                Information
              </Typography>
              <Link to="" style={{ padding: "0 7px 7px 0", color: "white" }}>
                About
              </Link>
              <Link to="" style={{ padding: "7px 7px 7px 0", color: "white" }}>
                Services
              </Link>
              <Link to="" style={{ padding: "7px 7px 7px 0", color: "white" }}>
                Terms and Conditions
              </Link>
              <Link to="" style={{ padding: "7px 7px 7px 0", color: "white" }}>
                Best Price Guarantee
              </Link>
              <Link to="" style={{ padding: "7px 7px 7px 0", color: "white" }}>
                Privacy & Cookies Policy
              </Link>
            </Stack>
            <Stack>
              <Typography
                color="black"
                variant="h5"
                sx={{ paddingBottom: "30px", color: "white" }}
              >
                Customer Support
              </Typography>
              <Link to="" style={{ padding: "0 7px 7px 0", color: "white" }}>
                FAQ
              </Link>
              <Link to="" style={{ padding: "7px 7px 7px 0", color: "white" }}>
                Payment Option
              </Link>
              <Link to="" style={{ padding: "7px 7px 7px 0", color: "white" }}>
                Booking Tips
              </Link>
              <Link to="" style={{ padding: "7px 7px 7px 0", color: "white" }}>
                How it works
              </Link>
              <Link to="" style={{ padding: "7px 7px 7px 0", color: "white" }}>
                Contact Us
              </Link>
            </Stack>
            <Stack>
              <Typography
                color="black"
                variant="h5"
                sx={{ paddingBottom: "30px", color: "white" }}
              >
                Have a Questions?
              </Typography>
              <Stack direction="row">
                <Box sx={{ paddingRight: "5px", color: "white" }}>
                  <LocationOnIcon />
                </Box>
                <Typography sx={{ width: "200px", color: "white" }}>
                  203 Fake St. Mountain View, San Francisco, California, USA
                </Typography>
              </Stack>
              <Typography
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  padding: "10px 7px 7px 0",
                  color: "white",
                }}
              >
                <Box sx={{ paddingRight: "5px", color: "white" }}>
                  <PhoneIcon />
                </Box>
                <Link style={{ color: "white" }} to="">
                  +2 392 3929 210
                </Link>
              </Typography>

              <Typography
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  padding: "10px 7px 7px 0",
                  color: "white",
                }}
              >
                <Box sx={{ paddingRight: "5px", color: "white" }}>
                  <EmailIcon />
                </Box>
                <Link style={{ color: "white" }} to="">
                  {" "}
                  info@yourdomain.com
                </Link>
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={2} sx={{ padding: "40px 0 30px 0" }}>
            <Typography color="main" variant="subtitle1">
              {` Copyright ©${new Date().getFullYear()}  All rights reserved | This template is made with by Eredo Qorri`}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
