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
import { Dashboard } from "./components/admin/admin-home";

const router = createBrowserRouter([
  { path: "/home", element: <Home /> },
  { path: "/", element: <Home /> },
  { path: "/about", element: <About pageTitle="About Us" /> },
  { path: "/services", element: <Services /> },
  { path: "/pricing", element: <Pricing pageTitle="Pricing" /> },
  { path: "/cars", element: <Cars pageTitle="Choose Your Car" /> },
  { path: "/blog", element: <Blog pageTitle="Our Blog" /> },
  { path: "/contact", element: <Contact pageTitle="Contact" /> },
  { path: "/admin", element: <Dashboard /> },
  {
    path: "/login",
    element: (
      <LoginModal
        isOpen={false}
        onClose={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
    ),
  },
  {
    path: "/register",
    element: (
      <RegisterModal
        isOpen={false}
        onClose={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
    ),
  },
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
