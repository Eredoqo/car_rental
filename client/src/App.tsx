import { Route, Routes } from "react-router-dom";
import Cars from "./components/cars";
import Home from "./components/home";
import About from "./components/about/about-home";
import Services from "./components/services";
import Pricing from "./components/pricing";
import BlogHome from "./components/blog/blog-home";
import Contact from "./components/contact";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/blog" element={<BlogHome />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
