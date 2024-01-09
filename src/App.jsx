import OTP from "./pages/OTP";
import SignUp from "./pages/SignUp";
// import OTPBox from "./pages/OTPP";
import Login from "./pages/Login";

import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
function App() {
  return (
   

<Router>
    {/* <Login/> */}
     <Routes>
     <Route path="/login" element={<Login/>}/>
     <Route path="/Signup" element={<SignUp/>}/>
     <Route path="/otp" element={<OTP/>}/>
       <Route/>
     </Routes>
     </Router>
  );
}

export default App;
