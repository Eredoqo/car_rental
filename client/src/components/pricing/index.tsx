import { Box, Container } from "@mui/material";
import Navbar from "../navbar";
import Footer from "../footer";
import About from "../../images/about.jpg";
import CarTable from "./car-table/index";
import { Breadcrumbs, PageTitle, WidgetProps } from "@/utils/utils";

const Pricing = ({ pageTitle = "Default Page" }: WidgetProps) => {
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
      <CarTable />
      <Footer />
    </>
  );
};

export default Pricing;
