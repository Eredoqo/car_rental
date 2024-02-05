import { Container, Grid, Typography, Button, Stack } from "@mui/material";
import Navbar from "../navbar";
import Footer from "../footer";
import styles from "./AboutPage.module.css";

const AboutPage = () => {
  return (
    <>
      <Navbar></Navbar>
      <section className={styles.heroSection}>
        <div className={styles.overlay}></div>
        <Container maxWidth="lg">
          <Grid container>
            <Grid item md={9}>
              <div className="ftco-animate pb-5">
                <Typography variant="body1">
                  <a href="/">
                    Home <i className="ion-ios-arrow-forward"></i>
                  </a>{" "}
                  <span>About us </span>
                </Typography>
                <Typography variant="h1" gutterBottom>
                  About Us
                </Typography>
              </div>
            </Grid>
          </Grid>
        </Container>
      </section>

      <section className={styles.aboutSection}>
        <Container maxWidth="lg">
          <Grid container>
            <Grid item md={6}>
              <div className={styles.aboutImage}></div>
            </Grid>
            <Grid item md={6} className={styles.aboutContent}>
              <div className="heading-section heading-section-white">
                <Typography variant="subtitle1">About us</Typography>
                <Typography variant="h2" gutterBottom>
                  Welcome to
                </Typography>
              </div>
            </Grid>
          </Grid>
        </Container>
      </section>
      <section className={styles.section}>
        <div className="overlay"></div>
        <Container className={styles.container}>
          <Grid container>
            <Grid item xs={12}>
              <div className={styles.heading}>
                <Typography variant="h1" align="center">
                  About Us
                </Typography>
              </div>
            </Grid>
          </Grid>
        </Container>
      </section>

      <section className={styles.section}>
        <Container className={styles.container}>
          <Grid container>
            <Grid item xs={12} md={6}>
              <div className={styles.subheading}>
                <Typography variant="h3" align="center">
                  Welcome to Carbook
                </Typography>
              </div>
              <div className={styles.description}>
                <Typography variant="body1">
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia. It is a paradisematic country,
                  in which roasted parts of sentences fly into your mouth.
                </Typography>
                <Typography variant="body1">
                  On her way she met a copy. The copy warned the Little Blind
                  Text, that where it came from it would have been rewritten a
                  thousand times and everything that was left from its origin
                  would be the word "and" and the Little Blind Text should turn
                  around and return to its own, safe country. A small river
                  named Duden flows by their place and supplies it with the
                  necessary regelialia. It is a paradisematic country, in which
                  roasted parts of sentences fly into your mouth.
                </Typography>
              </div>
              <div>
                <Button
                  variant="contained"
                  color="primary"
                  className={styles.button}
                >
                  Search Vehicle
                </Button>
              </div>
            </Grid>
          </Grid>
        </Container>
      </section>

      <section className={styles.section}>
        <div className="overlay"></div>
        <Container className={styles.container}>
          <Grid container></Grid>
        </Container>
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

export default AboutPage;
