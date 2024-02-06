import About from "../about/about-home";
import BlogHome from "../blog/blog-home";
import Footer from "../footer";
import Gallery from "../gallery";
import Navbar from "../navbar";
import ServiceHome from "../services/service-home";
import Testimonials from "../testimonials";

const Home = () => {
  return (
    <div>
      <Navbar />
      <About />
      <Gallery />
      <ServiceHome />
      <Testimonials />
      <BlogHome />
      <Footer />
    </div>
  );
};
export default Home;
