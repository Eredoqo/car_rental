import React from "react";
import bgImage from "./../../../images/bg_1.jpg";
import { Box, Container, Typography, Link } from "@mui/material";
import { PlayCircleOutline } from "@mui/icons-material";
import LocationForm from "./../../location-form";

const HomeSingleCar: React.FC = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        position: "relative",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
      />
      <Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <Box
            sx={{
              textAlign: "center",
              width: "50%",
              mb: 5,
              pb: 5,
            }}
          >
            <Typography
              variant="h4"
              mb={4}
              sx={{ color: "common.white", fontWeight: "bold" }}
            >
              Fast &amp; Easy Way To Rent A Car
            </Typography>
            <Typography
              variant="body1"
              mb={4}
              sx={{ color: "common.white", fontSize: 18, fontWeight: "bold" }}
            >
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia. It is a paradisematic country, in
              which roasted parts
            </Typography>
            <Link
              //To do for opeing video in modal
              // href="https://vimeo.com/45830194"
              sx={{
                color: "common.white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textDecoration: "none",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 50,
                  height: 50,
                  borderRadius: "50%",
                  backgroundColor: "common.white",
                  color: "common.black",
                  mr: 2,
                  background: "#00D28D",
                }}
              >
                <PlayCircleOutline />
              </Box>
              <Typography sx={{ color: "common.white" }}>
                Easy steps for renting a car
              </Typography>
            </Link>
          </Box>
        </Box>
      </Container>
      <Box
        sx={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          width: "100%",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "-380px",
          }}
        >
          <LocationForm />
        </Box>
      </Box>
    </Box>
  );
};

export default HomeSingleCar;
