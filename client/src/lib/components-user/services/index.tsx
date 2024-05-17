import LatestServices from "./latest-services";
import Navbar from "../navbar";
import Footer from "../footer";
import DriverService from "./driver-service";
import ServiceNavBar from "./service-navbar/indesx";

const ServiceHome = () => {
  return (
    <>
      <Navbar></Navbar>
      <ServiceNavBar />
      <LatestServices />
      <DriverService />
      <Footer></Footer>
    </>
  );
};

export default ServiceHome;
