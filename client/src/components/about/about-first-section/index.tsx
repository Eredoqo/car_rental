import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import About from "./../../../images/about.jpg";

const AboutSection: React.FC = () => {
  return (
    <Box
      sx={{
        py: 5,
        backgroundImage:
          "linear-gradient(to left, #00D28D 70%, transparent 60%)",
        display: "flex",
        justifyContent: "flex-end",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          marginRight: "150px",
        }}
      >
        <Container>
          <Box
            sx={{ alignItems: "center" }}
            display="flex"
            flexWrap="wrap"
            p={0}
          >
            <Box
              sx={{
                flex: "1 0 auto",
                p: 5,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundImage: `url(${About})`,
                backgroundSize: "cover",
                width: "430px",
                height: "430px",
                borderRadius: "15px",
              }}
            />
            <Box sx={{ flex: "1 0 auto", p: 5 }}>
              <Box>
                <Typography color="white" variant="h4">
                  About us
                </Typography>
                <Typography color="white" variant="h2" sx={{ my: 3 }}>
                  Welcome to Carbook
                </Typography>
                <Typography
                  sx={{ width: "400px", color: "white" }}
                  variant="body1"
                >
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia. It is a paradisematic country,
                  in which roasted parts of sentences fly into your mouth. On
                  her way she met a copy. The copy warned the Little Blind Text,
                  that where it came from it would have been rewritten a
                  thousand times and everything that was left from its origin
                  would be the word "and" and the Little Blind Text should turn
                  around and return to its own, safe country. A small river
                  named Duden flows by their place and supplies it with the
                  necessary regelialia. It is a paradisematic country, in which
                  roasted parts of sentences fly into your mouth.
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ my: 3, px: 4 }}
                >
                  Search Vehicle
                </Button>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default AboutSection;
