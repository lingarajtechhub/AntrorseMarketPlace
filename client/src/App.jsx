
import Home from "./pages/HomePage/Home";
import OTP from "./Components/OTP";
import SignUp from "./pages/SignUpPage/SignUp";
// import OTPBox from "./pages/OTPP";
import Login from "./pages/LoginPage/Login";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Category from "./components/Catagories/Category";
import Wishlist from "./pages/Wishlist/Wishlist";
function App() {
  return (
   
    <Router>
    <Navbar />
      {/* <Login/> */}
      <Routes>
   
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />} />
        <Route path="/wishlist" element={<Wishlist />} />
      
        <Route path="/login" element={<Login />} />
        <Route path="/Signup" element={<SignUp />} />
        <Route path="/otp" element={<OTP />} />
        <Route />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
