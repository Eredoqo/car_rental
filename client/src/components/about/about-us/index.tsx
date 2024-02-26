import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Box, Container, Typography, Link } from "@mui/material";
import About from "../../../images/about.jpg";
import Navbar from "../../navbar";
import Footer from "../../footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import AboutSection from "../about-first-section";
import Testimonials from "./../../testimonials";
import AboutNumbers from "../about-numbers";

const AboutUs: React.FC = () => {
  return (
    <>
      <Navbar />
      <Box
        className="hero-wrap hero-wrap-2 js-fullheight"
        sx={{
          height: "100vh",
          backgroundImage: `url(${About})`,
          backgroundSize: "cover",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          pb: 3,
        }}
        data-stellar-background-ratio="0.5"
      >
        <Container
          maxWidth="lg"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            height: "100%",
            ml: 25,
            mb: 3,
          }}
        >
          <Typography variant="h6" color="white">
            <Link component={RouterLink} to="/" color="inherit">
              Home <FontAwesomeIcon icon={faChevronRight} />
            </Link>
            <Box component="span" sx={{ ml: 1, color: "white" }}>
              About us <FontAwesomeIcon icon={faChevronRight} />
            </Box>
          </Typography>
          <Typography sx={{ marginTop: "15px" }} variant="h3" color="white">
            About Us
          </Typography>
        </Container>
      </Box>
      <AboutSection />
      <Testimonials />
      <AboutNumbers />
      <Footer />
    </>
  );
};

export default AboutUs;
