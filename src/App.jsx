import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutUs from "./components/AboutUs/AboutUs";
import Features from "./components/Features/Features";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Menu from "./components/Menu/Menu";
import TeamCard from "./components/TeamCard/TeamCard";
import ReservationForm from "./components/ReservationForm/ReservationForm";
import Testimonials from "./components/testimonials/testimonials";
import ContactUs from "./components/ContactUs/ContactUs"; // Import ContactUs component
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ContectForm from "./components/ContectForm/ContectForm";
import Footer from "./components/Footer/Footer";
import Navbar from "./Navbar/Navbar";

// Define router with routes for Home and Contact Us pages
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
      
        <Header />
        <Hero/>
        <Features />
        <AboutUs />
        <Menu />
        <ReservationForm />
        <ToastContainer />
        <TeamCard />
        <Testimonials />
        <Footer/>
      
        
      </div>
    ),
  },
  {
    path: "/contact-us",
    element: (
      <div>
        <Header />
        <ContactUs />
        <ContectForm/>
        <Footer/>
      </div>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
