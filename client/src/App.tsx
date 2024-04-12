import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cars from "./components/cars";
import Home from "./components/home";
import About from "./components/about";
import Services from "./components/services";
import Pricing from "./components/pricing";
import Contact from "./components/contact";
import Blog from "./components/blog";
import { RegisterModal } from "./components/login/register-modal";
import LoginModal from "./components/login/login-modal";
import { CssBaseline } from "@mui/material";

const router = createBrowserRouter([
  { path: "/home", element: <Home /> },
  { path: "/", element: <Home /> },
  { path: "/about", element: <About pageTitle="About Us" /> },
  { path: "/services", element: <Services pageTitle="Services" /> },
  { path: "/pricing", element: <Pricing pageTitle="Pricing" /> },
  { path: "/cars", element: <Cars pageTitle="Choose Your Car" /> },
  { path: "/blog", element: <Blog pageTitle="Our Blog" /> },
  { path: "/contact", element: <Contact pageTitle="Contact" /> },
  { path: "/login", element: <LoginModal /> },
  { path: "/register", element: <RegisterModal /> },
]);

function App() {
  return (
    <>
      <CssBaseline />
      <RouterProvider
        router={router}
        fallbackElement={<div>...Loading</div>}
      ></RouterProvider>
    </>
  );
}

export default App;
