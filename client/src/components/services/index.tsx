import { Container, Stack, Typography, Grid, Button } from "@mui/material";
import Service from "./../../images/services-route.jpg";
import styles from "./index.module.css";
import { useEffect } from "react";
import { useGetServices } from "./../../hooks/useGetServices";
import { data } from "./../../utils/data";
import Navbar from "../navbar";
import Footer from "../footer";

const ServiceHome = () => {
  const { services } = useGetServices();

  useEffect(() => {}, [services]);

  return (
    <>
      <Navbar></Navbar>
      <section
        className={styles.container}
        style={{ height: "auto", width: "100%", paddingBottom: "60px" }}
      >
        <div>
          <Container maxWidth="lg">
            <Stack alignItems="center">
              <Typography
                sx={{
                  marginTop: "110px",
                  fontSize: "12px",
                  color: "#1089ff",
                  fontWeight: 600,
                  letterSpacing: "2px",
                  marginBottom: "10px",
                }}
              >
                {data.serviceTitle}
              </Typography>
              <Typography
                sx={{
                  paddingBottom: "60px",
                  fontSize: "40px",
                  fontWeight: 600,
                }}
              >
                {data.serviceDesc}
              </Typography>
            </Stack>
            <Grid
              item
              xs={6}
              sx={{
                width: "100%",
                display: "flex",
                flexiDrection: "row",
                justifyContent: "space-between",
              }}
            >
              {services &&
                Array.isArray(services) &&
                services.map((service, index) => (
                  <Stack
                    key={index}
                    sx={{
                      width: "210px",
                    }}
                  >
                    <Typography
                      sx={{
                        marginTop: "40px",
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <img
                        style={{
                          height: "110px",
                          width: "110px",
                          borderRadius: "50%",
                        }}
                        src={Service}
                        alt=""
                      />
                    </Typography>
                    <Typography
                      sx={{
                        paddingTop: "20px",
                        paddingBottom: "10px",
                        display: "flex",
                        justifyContent: "center",
                        fontWeight: "600",
                      }}
                    >
                      {service.serviceTitle}
                    </Typography>
                    <Typography
                      style={{
                        height: "auto",
                        textAlign: "center",
                      }}
                    >
                      {service.description}
                    </Typography>
                  </Stack>
                ))}
            </Grid>
          </Container>
        </div>
      </section>
      <section
        style={{
          position: "relative",
          height: "400px",
          //backgroundImage: `url(${require("../../Images/about.jpg")})`,
          backgroundSize: "cover",
          backgroundPositionX: "center",
          backgroundPositionY: "top",
          backgroundRepeat: "no-repeat",
          overflow: "hidden",
          zIndex: 0,
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-151px",
            left: "-100px",
            right: 0,
            bottom: "-120px",
            width: "40%",
            content: '""',
            opacity: 1,
            backgroundColor: "#01d28e",
            transform: "rotate(20deg)",
            //webkitTransform: "rotate(20deg)",
          }}
        ></div>
        <Container sx={{ marginTop: "100px" }}>
          <Stack
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "flex-end",
              alignContent: "flex-end",
            }}
          >
            <Grid item xs={6}>
              <Typography
                style={{
                  fontSize: "30px",
                  maxWidth: "400px",
                  marginRight: "160px",
                  marginBottom: "1rem",
                }}
              >
                {data.serviceDriver.title}
              </Typography>
              <Button variant="contained" color="primary" size="large">
                {data.serviceDriver.buttonText}
              </Button>
            </Grid>
          </Stack>
        </Container>
      </section>
      <Footer></Footer>
    </>
  );
};

export default ServiceHome;
