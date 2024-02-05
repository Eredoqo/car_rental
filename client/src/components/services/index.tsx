import { Container, Stack, Typography, Grid, Button } from "@mui/material";
import styles from "./index.module.css";
import Navbar from "../navbar";
import Footer from "../footer";
import Service from "../../Images/services-route.jpg";

const Services = () => {
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
                variant="titleLarge"
                sx={{
                  marginTop: "110px",
                  fontSize: "12px",
                  color: "#1089ff",
                  fontWeight: 600,
                  letterSpacing: "2px",
                  marginBottom: "10px",
                }}
              >
                SERVICES
              </Typography>
              <Typography
                variant="large"
                sx={{
                  paddingBottom: "60px",
                  fontSize: "40px",
                  fontWeight: 600,
                }}
              >
                Our Latest Services
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
              <Stack
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
                  Wedding Ceremony
                </Typography>
                <Typography
                  style={{
                    height: "auto",
                    textAlign: "center",
                  }}
                >
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia.
                </Typography>
              </Stack>
              <Stack
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
                  City Transfer
                </Typography>
                <Typography
                  style={{
                    height: "auto",
                    textAlign: "center",
                  }}
                >
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia.
                </Typography>
              </Stack>
              <Stack
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
                  Airport Transfer
                </Typography>
                <Typography
                  style={{
                    height: "auto",
                    textAlign: "center",
                  }}
                >
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia.
                </Typography>
              </Stack>
              <Stack
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
                  Whole City Tour
                </Typography>
                <Typography
                  style={{
                    height: "auto",
                    textAlign: "center",
                  }}
                >
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia.
                </Typography>
              </Stack>
            </Grid>
          </Container>
        </div>
      </section>
      <section
        style={{
          position: "relative",
          height: "400px",
          backgroundImage: `url(${require("../../Images/about.jpg")})`,
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
            webkitTransform: "rotate(20deg)",
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
                Do You Want To Earn With Us? So Don't Be Late.
              </Typography>
              <Button variant="contained" color="primary" size="large">
                Become A Driver
              </Button>
            </Grid>
          </Stack>
        </Container>
      </section>
      <Footer></Footer>
    </>
  );
};

export default Services;
