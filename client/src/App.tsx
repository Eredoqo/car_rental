import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cars from "./lib/components-user/cars";
import Home from "./lib/components-user/home";
import About from "./lib/components-user/about";
import Services from "./lib/components-user/services";
import Pricing from "./lib/components-user/pricing";
import Contact from "./lib/components-user/contact";
import Blog from "./lib/components-user/blog";
import { RegisterModal } from "./lib/components-user/login/register-modal";
import LoginModal from "./lib/components-user/login/login-modal";
import { CssBaseline } from "@mui/material";
import { Dashboard } from "./lib/components-admin/admin-home";
import NewCar from "./lib/components-admin/cars/new-car";
import CarDetails from "./lib/components-admin/cars/car details";
import { UpdateCar } from "./lib/components-admin/cars/update-car";
import Inventory from "./lib/components-admin/components/inventory";
import Booking from "./lib/components-admin/components/bookings";
import Calendar from "./lib/components-admin/components/calendar";
import Transactions from "./lib/components-admin/components/transactions";
import Settings from "./lib/components-admin/components/settings";
import CarReports from "./lib/components-admin/components/car-reports";
import Users from "./lib/components-admin/components/users";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/home", element: <Home /> },
    { path: "/about", element: <About pageTitle="About Us" /> },
    { path: "/services", element: <Services /> },
    { path: "/pricing", element: <Pricing pageTitle="Pricing" /> },
    { path: "/cars", element: <Cars pageTitle="Choose Your Car" /> },
    { path: "/blog", element: <Blog pageTitle="Our Blog" /> },
    { path: "/contact", element: <Contact pageTitle="Contact" /> },
    { path: "/admin", element: <Dashboard /> },
    { path: "/addcarsadmin", element: <NewCar /> },
    { path: "/inventory", element: <Inventory /> },
    { path: "/bookings", element: <Booking /> },
    { path: "/calendar", element: <Calendar /> },
    { path: "/transactions", element: <Transactions /> },
    { path: "/users", element: <Users /> },
    { path: "/settings", element: <Settings /> },
    { path: "/car-reports", element: <CarReports /> },
    { path: "/cardetailsadmin", element: <CarDetails /> },
    { path: "/updatecars", element: <UpdateCar /> },
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
  return (
    <>
      <CssBaseline />
      <RouterProvider router={router} fallbackElement={<div>...Loading</div>} />
    </>
  );
}

export default App;
