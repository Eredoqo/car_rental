import { Box, Container, Grid, Typography } from "@mui/material";

import InformationSection from "./information";
import CustomeSupportSection from "./customer-support";
import QuestionsSection from "./questions";
import LogoSection from "./logo";

const styles = {
  footer: {
    width: "100%",
    height: "auto",
    background: "linear-gradient(to right, #EAEAEA, #DBDBDB, #F2F2F2, #ADA996)",
    paddingTop: "1rem",
    paddingBottom: "1rem",
    borderRadius: "5px",
  },
  gridItem: {
    width: "100%",
    flexDirection: "row",
    display: "flex",
    justifyContent: "space-between",
  },
  copyright: {
    padding: "40px 0 30px 0",
  },
};

const FooterSections = () => (
  <Grid item xs={12} sx={styles.gridItem}>
    <LogoSection />
    <InformationSection />
    <CustomeSupportSection />
    <QuestionsSection />
  </Grid>
);

const Copyright = () => (
  <Grid item xs={2} sx={styles.copyright}>
    <Typography color="main" variant="subtitle1">
      {` Copyright ©${new Date().getFullYear()}  All rights reserved | This template is made with by Eredo Qorri`}
    </Typography>
  </Grid>
);

export const Footer = () => {
  return (
    <Box sx={styles.footer}>
      <Container maxWidth="lg">
        <Grid container direction="column" alignItems="center">
          <FooterSections />
          <Copyright />
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
