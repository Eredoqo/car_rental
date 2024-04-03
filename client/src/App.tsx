import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cars from "./components/cars";
import Home from "./components/home";
import About from "./components/about";
import Services from "./components/services";
import Pricing from "./components/pricing";
import Contact from "./components/contact";
import Blog from "./components/blog";

const router = createBrowserRouter([
  { path: "/home", element: <Home /> },
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/services", element: <Services /> },
  { path: "/pricing", element: <Pricing /> },
  { path: "/cars", element: <Cars /> },
  { path: "/blog", element: <Blog /> },
  { path: "/contact", element: <Contact /> },
]);

function App() {
  return (
    <RouterProvider router={router} fallbackElement={<div>...Loading</div>} />
  );
}

export default App;
