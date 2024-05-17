import React from "react";
import { Box, Container } from "@mui/material";
import About from "../../../images/about.jpg";
import Navbar from "../navbar";
import Footer from "../footer";
import AboutSection from "./about-first-section";
import Testimonials from "../testimonials";
import AboutNumbers from "./about-numbers";
import { Breadcrumbs, PageTitle } from "@/utils/utils";

interface WidgetProps {
  pageTitle: string;
}
export default function AboutUs({ pageTitle = "Default Page" }: WidgetProps) {
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
          <Breadcrumbs currentPage={pageTitle} />
          <PageTitle title={pageTitle ? pageTitle.toUpperCase() : ""} />
        </Container>
      </Box>
      <AboutSection />
      <Testimonials />
      <AboutNumbers />
      <Footer />
    </>
  );
}
