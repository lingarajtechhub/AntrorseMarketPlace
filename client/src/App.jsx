// eslint-disable-next-line no-unused-vars
import React from "react";
import Home from "./pages/HomePage/Home";
import OTP from "./Components/OTP";
import SignUp from "./pages/SignUpPage/SignUp";
// import OTPBox from "./pages/OTPP";
import Login from "./pages/LoginPage/Login";

import Category from "./components/Catagories/Category";
import Wishlist from "./components/Wishlist/Wishlist";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
   
    <Router>
    <Navbar />
      {/* <Login/> */}
      <Routes>
   
        <Route path="/" element={<Home />} />
      
        <Route path="/login" element={<Login />} />
        <Route path="/Signup" element={<SignUp />} />
        <Route path="/otp" element={<OTP />} />
        <Route path="/category" element={<Category />} />
        <Route path="/wishlist" element={<Wishlist />} />
 
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
