import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import About from "./../../../../images/about.jpg";
import { data } from "../../../../utils/data";

const ImageBox = () => (
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
);

const TextBox = () => (
  <Box sx={{ flex: "1 0 auto", p: 5 }}>
    <Typography color="white" variant="h4">
      {data.aboutUs.about}
    </Typography>
    <Typography color="white" variant="h3" sx={{ my: 3 }}>
      {data.aboutUs.welcome}
    </Typography>
    <Typography sx={{ width: "400px", color: "white" }} variant="body1">
      {data.aboutUs.aboutText}
    </Typography>
    <Button variant="contained" color="primary" sx={{ my: 3, px: 4 }}>
      {data.aboutUs.searchVechile}
    </Button>
  </Box>
);

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
            <ImageBox />
            <TextBox />
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default AboutSection;
