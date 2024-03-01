import About from "../../../images/about.jpg";
import { Link as RouterLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import { Container, Typography, Box, Link } from "@mui/material";

const ServiceNavBar = () => {
  return (
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
            Services <FontAwesomeIcon icon={faChevronRight} />
          </Box>
        </Typography>
        <Typography sx={{ marginTop: "15px" }} variant="h3" color="white">
          Services
        </Typography>
      </Container>
    </Box>
  );
};

export default ServiceNavBar;
