import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Box, Container, Typography, Link } from "@mui/material";
import Navbar from "../navbar";
import Footer from "../footer";
import About from "../../images/about.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import CarTable from "./car-table/index";

const Breadcrumbs = () => (
  <Typography variant="h6" color="white">
    <Link
      sx={{ textDecoration: "none" }}
      component={RouterLink}
      to="/"
      color="inherit"
    >
      Home <FontAwesomeIcon icon={faChevronRight} />
    </Link>
    <Box component="span" sx={{ ml: 1, color: "white" }}>
      Pricing <FontAwesomeIcon icon={faChevronRight} />
    </Box>
  </Typography>
);

const PageTitle = () => (
  <Typography sx={{ marginTop: "15px" }} variant="h3" color="white">
    PRICING
  </Typography>
);
const Pricing = () => {
  return (
    <>
      <Navbar />
      <Box
        sx={{
          height: "100vh",
          backgroundImage: `url(${About})`,
          backgroundSize: "cover",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          pb: 3,
        }}
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
          <Breadcrumbs />
          <PageTitle />
        </Container>
      </Box>
      <CarTable />
      <Footer />
    </>
  );
};

export default Pricing;
