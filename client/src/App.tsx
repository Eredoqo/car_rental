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
import NewCar from "./components/admin/cars/new-car";
import CarDetails from "./components/admin/cars/car details";
import { UpdateCar } from "./components/admin/cars/update-car";
import Inventory from "./components/admin/components/inventory";
import Booking from "./components/admin/components/bookings";
import Calendar from "./components/admin/components/calendar";
import Transactions from "./components/admin/components/transactions";
import Settings from "./components/admin/components/settings";
import CarReports from "./components/admin/components/car-reports";
import Users from "./components/admin/components/users";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
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
