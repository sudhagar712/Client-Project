import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Services from "../pages/Services";
import Contact from "../pages/Contact";
import HowItWorks from "../pages/HowitsWorks";
import AdminLogin from "../adminPanel/component/adminLogin/AdminLogin";
import LawyerLogin from "../lawyerPanel/component/lawyerLogin/LawyerLogin";
import LawyerRegister from "../lawyerPanel/component/lawyerRegister/LawyerRegister";
import ForgotPassword from "../lawyerPanel/component/forgotPassword/ForgotPassword";
import LawyerDashboard from "../lawyerPanel/component/lawyerDashboard/LawyerDashboard";
import RegisterComplaint from "../clientPanel/component/registerComplaint/RegisterComplaint";
import TrackComplaint from "../clientPanel/component/trackComplaint/TrackComplaint";


const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/service" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<HowItWorks />} />

      <Route path="/admin/login" element={<AdminLogin />} />

      
      <Route path="/lawyer/login" element={<LawyerLogin />} />
      <Route path="/lawyer/register" element={<LawyerRegister />} />
      <Route path="/lawyer/forgot-password" element={<ForgotPassword />} />
      <Route path="/lawyer/dashboard" element={<LawyerDashboard />} />

      <Route path="/client/register" element={<RegisterComplaint />} />
      <Route path="/track-complaint" element={<TrackComplaint />} />
      
    </Routes>
  );
};

export default AppRoutes;
