import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs"; 
import ContactUs from "./pages/ContactUs";
import SignUpStepOne from "./pages/SignUpStepOne";
import SignUpStepTwo from "./pages/SignUpStepTwo"; 
import SignUpStepThree from "./pages/SignUpStepThree"; 
import SignUpStepFour from "./pages/SignUpStepFour"; 


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} /> {}
        <Route path="/contactus" element={<ContactUs />} /> {}
        <Route path="/signupstepone" element={<SignUpStepOne />} /> {}
        <Route path="/signup/location" element={<SignUpStepTwo />} />
        <Route path="/signup/salary" element={<SignUpStepThree />} />
        <Route path="/signup/position" element={<SignUpStepFour />} />


      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);