// eslint-disable-next-line no-unused-vars
import React from "react";
import Home from "./pages/HomePage/Home";
import Enquiry from "./pages/Enquiry";
import OTP from "./Components/OTP";
import SignUp from "./pages/SignUpPage/SignUp";
// import OTPBox from "./pages/OTPP";
import Login from "./pages/LoginPage/Login";

import ProductPrice from "./pages/Product_list_page_list_type/Productlist"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LoginRegistration from "./pages/LoginRegistration";
import ProductPage from "./pages/ProductPage/ProductPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import CartPage from "./pages/CartPage/CartPage";

import ProductListPage from "./pages/ProductListPage/ProductListPage"
function App() {
  return (
    <Router>
      {/* <Login/> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Signup" element={<SignUp />} />
        <Route path="/otp" element={<OTP />} />
        <Route path="/productPage" element={<ProductPage />} />

        <Route path="/productlisttype" element={<ProductPrice />} />
        <Route path="/productlistgrid" element={<ProductListPage />} />
        <Route />
      </Routes>
    </Router>
  );
}

export default App;
