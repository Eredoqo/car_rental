import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import Navbar from "../navbar";
import Footer from "../footer";
import About from "../../images/about.jpg";
import {
  Container,
  Grid,
  Box,
  Typography,
  Card,
  CardContent,
  TextField,
  Button,
  Link,
} from "@mui/material";
import { ReactNode } from "react";

interface ContactCardProps {
  title: string;
  children: ReactNode;
}

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
      Contact <FontAwesomeIcon icon={faChevronRight} />
    </Box>
  </Typography>
);

const PageTitle = () => (
  <Typography sx={{ marginTop: "15px" }} variant="h3" color="white">
    CONTACT
  </Typography>
);

const ContactCard = ({ title, children }: ContactCardProps) => (
  <Grid item>
    <Card>
      <CardContent>
        <Typography variant="h6" component="div">
          {title}
        </Typography>
        <Typography color="text.secondary">{children}</Typography>
      </CardContent>
    </Card>
  </Grid>
);

const ContactForm = () => (
  <form noValidate autoComplete="off">
    <Box mb={2}>
      <TextField fullWidth label="Your Name" variant="outlined" />
    </Box>
    <Box mb={2}>
      <TextField fullWidth label="Your Email" variant="outlined" />
    </Box>
    <Box mb={2}>
      <TextField fullWidth label="Subject" variant="outlined" />
    </Box>
    <Box mb={2}>
      <TextField
        fullWidth
        label="Message"
        variant="outlined"
        multiline
        rows={4}
      />
    </Box>
    <Box>
      <Button
        sx={{ padding: "20px", width: "40%" }}
        variant="contained"
        color="primary"
      >
        Send Message
      </Button>
    </Box>
  </form>
);

export default function Widget() {
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
      <Container sx={{ paddingTop: "100px", paddingBottom: "100px" }}>
        <Grid container spacing={4}>
          <Grid padding="50px" item xs={6} lg={4}>
            <Grid container spacing={4} direction="column">
              <ContactCard title="Address">
                198 West 21th Street, Suite 721
                <br />
                New York NY 10016
              </ContactCard>
              <ContactCard title="Phone">+1235 2355 98</ContactCard>
              <ContactCard title="Email">info@yoursite.com</ContactCard>
            </Grid>
          </Grid>

          <Grid
            sx={{ backgroundColor: "#F8F9FA" }}
            padding="50px"
            item
            xs={12}
            lg={6}
          >
            <ContactForm />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}
