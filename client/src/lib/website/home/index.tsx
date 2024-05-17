import HomeSingleCar from "./single-car-home/index";
import { useAuth } from "@/contexts/useAuth";
import BlogHome from "@/lib/components-user/blog/blog-home";
import Footer from "@/lib/components-user/footer";
import Gallery from "@/lib/components-user/gallery";
import Navbar from "@/lib/components-user/navbar";
import ServiceHome from "@/lib/components-user/services";
import Testimonials from "@/lib/components-user/testimonials";
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
