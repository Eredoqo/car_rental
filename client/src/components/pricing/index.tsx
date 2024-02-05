import { Container, Grid, Typography, Stack, TableHead } from "@mui/material";
import styles from "./index.module.css";
import backgroundImage from "../../Images/bg_1.jpg";
import Navbar from "../navbar";
import Footer from "../footer";

const Services = () => {
  return (
    <>
      <Navbar></Navbar>
      <section
        style={{
          paddingTop: "50px",
          position: "relative",
          height: "100vh",
          backgroundImage: `url(${backgroundImage})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className={styles.overlay}></div>
        <Container maxWidth="lg">
          <Grid container>
            <Grid item md={9}>
              <div className="ftco-animate pb-5">
                <Typography variant="body1">
                  <a href="/">
                    Home <i className="ion-ios-arrow-forward"></i>
                  </a>{" "}
                  <span>Pricing</span>
                </Typography>
                <Typography variant="h1" gutterBottom>
                  Pricing
                </Typography>
              </div>
            </Grid>
          </Grid>
        </Container>
      </section>
      <section>
        <Container maxWidth="lg">
          <Grid>
            <Stack>
              <div>
                <TableHead>hshh</TableHead>
              </div>
            </Stack>
          </Grid>
        </Container>
      </section>
      <Footer></Footer>
    </>
  );
};

export default Services;
