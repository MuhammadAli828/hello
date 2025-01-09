
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './components/redusx/store.jsx'; // Ensure the path is correct
import './components/redusx/Counter.css'; // Import Counter CSS
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Features from "./components/Features/Features";
import AboutUs from "./components/AboutUs/AboutUs";
import Menu from "./components/Menu/Menu";
import TeamCard from "./components/TeamCard/TeamCard";
import ReservationForm from "./components/ReservationForm/ReservationForm";
import Testimonials from "./components/testimonials/testimonials";
import Footer from "./components/Footer/Footer";
import GoToTop from "./components/GoToTop/GoToTop";
import ContactUs from "./components/ContactUs/ContactUs"; // Import ContactUs component
import ContectForm from "./components/ContectForm/ContectForm";
import Counter from './components/redusx/Counter.jsx'; // Adjust the path

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Header />
        <Hero />
        <Features />
        <AboutUs />
        <Menu />
        <ReservationForm />
        <TeamCard />
        <Testimonials />
        <Counter /> {/* Render Counter here */}
        <Footer />
        <GoToTop />
      </div>
    ),
  },
  {
    path: "/contact-us",
    element: (
      <div>
        <Header />
        <ContactUs />
        <ContectForm />
        <Footer />
        <GoToTop />
      </div>
    ),
  },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
