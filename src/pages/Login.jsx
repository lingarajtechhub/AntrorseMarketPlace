import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {faTwitter,faFacebook, faInstagram,faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaXTwitter } from "react-icons/fa6";
import {  NavLink } from 'react-router-dom'; 
// import { useNavigate } from 'react-router-dom';

// C:\Users\kayus\OneDrive\Desktop\Html,css\create react\my-projec\src
import logo from './logo.png'



const Login = () => {

    // const navigate = useNavigate();
    const [password,setPassword]=useState('');
    const [userName,setUserName]=useState('');
    const [error, setError] = useState('');

   
   
    // const handleFormSubmit = async (e) => {
    //     e.preventDefault();
    //     const response = await fetch('url/demo', {
    //       method: 'POST',
    //       mode: 'cors',
    //       cache: 'no-cache',
    //       credentials: 'same-origin',
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //       body: JSON.stringify({
    //         email: userName,
    //         password: password,
    //       }),
    //     });
    //     const json = await response.json();
    //     console.log(json);
    
    //     if (json.sucess===true) {
    //       localStorage.setItem('token', json.authtoken);
    //       navigate('/'); // Use navigate for navigation
    //     } else {
    //       alert('Invalid credentials');
    //     }
    
    
    //   };


    const handleSubmit = (e) => {
        e.preventDefault();
    
        if(userName.type==='number')
        // Simple validation
        if (!userName||!password){
            setError('Please enter both username and password.');
        } 
        else{
            return;
        }
    }    
  return (
  
    <div className='font-serif h-screen flex items-center justify-center flex-col bg-gradient-to-tl from-gray-200 to-gray-200'>
  <div className='w-48  px-6 bg-none mb-3'>
    <img src={logo} alt="Antrose Logo" className='w-lvw' />
  </div>
  
  <div className='flex flex-col justify-center items-center bg-cover rounded-lg shadow-2xl w-full md:w-1/2 lg:w-1/3 xl:w-1/4 bg-white p-4'>

    <span className="text-2xl font-semibold mt-7 mb-3">Login</span>

    <form className='m-3 flex flex-col w-full p-5 px-' onSubmit={handleSubmit}>
      <label className="text-md">Username / Mobile</label>
      <input className='p-2 bg-white outline-none border-b border-red-400 mb-2' type="text" value={userName} onChange={(e) => setUserName(e.target.value)} placeholder='Enter your username or mobile' />
      <label className="text-md mt-2">Password</label>
      <input className='p-2 bg-white border-b border-red-400 outline-none mb-2' type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter your password..' />

      {error && <p className="text-sm text-red-500 mb-2">{error}</p>}

      <button className='mt-4 mb-3 p-2 from-lightcoral via-lightcoral to-darkcoral border-none text-white rounded-full bg-red-600' type='submit' >
        Login
      </button>
      
      <div className="mb-4">
        <NavLink to="/forgot-password" className="text-sm text-gray-600 hover:underline">
          Forgot Password?
        </NavLink>
      </div>
      
    </form>

    <h4> or Login with</h4>

    <div className="mt-6 grid grid-cols-3 gap-3">
              <div>
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                >
                  <FaFacebook fill="blue" size={"1.5rem"} />
                </a>
              </div>
              <div>
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                >
                  <FaXTwitter size={"1.5rem"} />
                </a>
              </div>
              <div>
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                >
                  <FcGoogle size={"1.5rem"} />
                </a>
              </div>
            </div>

    <div className="mb-4">
      <span>Create Account ? </span>
      <NavLink to="/forgot-password" className="text-md text-red-600 hover:underline">
        Sign up
      </NavLink>
    </div>

  </div>
</div>

  );
};

export default Login;