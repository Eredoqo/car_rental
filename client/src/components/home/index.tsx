import HomeSingleCar from "./single-car-home/index";
import BlogHome from "../blog/blog-home";
import Footer from "../footer";
import Gallery from "../gallery";
import Navbar from "../navbar";
import ServiceHome from "../services/service-home";
import Testimonials from "../testimonials";
import { useAuth } from "@/contexts/useAuth";
import { useEffect } from "react";
import { toast } from "react-toastify";

const Home = () => {
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      toast(`Welcome, ${user.firstName}!`);
    }
  }, [user]);

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
