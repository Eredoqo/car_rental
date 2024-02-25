import { Route, Routes } from "react-router-dom";
import Cars from "./components/cars";
import Home from "./components/home";
import About from "./components/about/about-home";
import Services from "./components/services";
import Pricing from "./components/pricing";
import Contact from "./components/contact";
import Blog from "./components/blog";

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
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
