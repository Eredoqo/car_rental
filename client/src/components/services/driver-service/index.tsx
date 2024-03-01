import { Container, Typography, Button, Box } from "@mui/material";
import { data } from "./../../../utils/data";
import About from "../../../images/about.jpg";

const DriverService = () => {
  return (
    <Box
      sx={{
        position: "relative",
        height: "450px",
        backgroundColor: "#00D28D",
        borderRadius: "20px",
      }}
    >
      <Container
        sx={{
          height: "100%",
          backgroundImage: `url(${About})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          marginRight: "0",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginRight: "300px",
          }}
        >
          <Typography
            style={{
              fontSize: "30px",
              maxWidth: "400px",
              marginBottom: "1rem",
              color: "white",
              fontWeight: 600,
              marginTop: "120px",
            }}
          >
            {data.serviceDriver.title}
          </Typography>
          <Button variant="contained" color="primary" size="large">
            {data.serviceDriver.buttonText}
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default DriverService;
