import HomeSingleCar from "./single-car-home/index";
import BlogHome from "../blog/blog-home";
import Footer from "../footer";
import Gallery from "../gallery";
import Navbar from "../navbar";
import ServiceHome from "../services/service-home";
import Testimonials from "../testimonials";

const Home = () => {
  return (
    <>
      <Navbar />
      <HomeSingleCar />
      <Gallery />
      <ServiceHome />
      <Testimonials />
      <BlogHome />
      <Footer />
    </>
  );
};
export default Home;
