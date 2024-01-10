import Enquiry from "./pages/Enquiry";
import OTP from "./Components/OTP";
import SignUp from "./Components/SignUp";
// import OTPBox from "./pages/OTPP";
import Login from "./Components/Login";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LoginRegistration from "./pages/LoginRegistration";
import Home from "./home/Home/Home";
function App() {
  return (
    <Router>
      {/* <Login/> */}
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginRegistration />} />
        {/* <Route path="/login" element={<Login />} />
        <Route path="/Signup" element={<SignUp />} /> */}
        <Route path="/otp" element={<OTP />} />
        <Route />
      </Routes>
    </Router>
  );
}

export default App;
