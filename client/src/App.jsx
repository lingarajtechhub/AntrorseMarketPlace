
import Home from "./pages/HomePage/Home";
import OTP from "./Components/OTP";
import SignUp from "./pages/SignUpPage/SignUp";
// import OTPBox from "./pages/OTPP";
import Login from "./pages/LoginPage/Login";


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Category from "./pages/Catagories/Category";
import Wishlist from "./pages/Wishlist/Wishlist";
import Cart from "./pages/CartPage/CartPage";
import Profile from "./pages/ProfilePage/ProfilePage";
import ProductPage from "./pages/ProductPage/ProductPage";
import ProductListPage from "./pages/ProductListPage/ProductListPage"
import ProductList_Page from "./pages/Product_list_page_list_type/Productlist"
import MyProfile from "./Components/Myprofile/Myprofile";

function App() {
  return (
   
    <Router>
    <Navbar />
      {/* <Login/> */}
      <Routes>
   
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/productpage" element={<ProductPage/>} />
        <Route path="/productlistpage" element={<ProductListPage/>} />
        <Route path="/productlist_page" element={<ProductList_Page/>} />
        
      
      
        <Route path="/login" element={<Login />} />
        <Route path="/Signup" element={<SignUp />} />
        <Route path="/otp" element={<OTP/>} />
        <Route path="/productlist" element={<ProductListPage />} />
        <Route path="/myprofile" element={<MyProfile/>} />
      
        

        <Route />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
