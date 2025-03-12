import React from "react";
import { useState } from "react";
import carImage from "../assets/car.png";
import logo from "../assets/FRSC.png";
import { Eye, EyeOff, Loader } from 'lucide-react';


const LoginForm = () => {
  const [userID, setUserID] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const isValidEmail = (email) => {
    return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  };

  const isValidPassword = (password) => {
    return /^(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/.test(password);
  };

  const handleLogin = () => {
    if (!isValidEmail(userID)) {
      alert("Please enter a valid email address.");
      setLoading(true);
      return;
    }
    if (!isValidPassword(password)) {
      alert("Password must be at least 8 characters");
      return;
    }      

    setTimeout(() => {
      setLoading(false);
      alert("Login Successful! 🎉");
    }, 2000);
    
  };

  const forgotPassword = ()=>{
    alert("you dey craze how you take forget your password");
  }

  return (
    <div className='flex overflow-auto'>
      <div className='flex-[3] '>
        <img className="w-180 h-146 " src={carImage} alt="Car" />
      </div>
      <div className='flex-[2] '>
        <div className="w-full pt-20 items-center justify-center flex">
            <img className="w-32 h-32 " src={logo} alt="logo" />
        </div>
        <p className="text-2xl font-bold text-cyan-700">Admin Login</p>
        <p className="text-gray-500 mb-6">Enter your details to login to your account</p>
        <div className="">
        <div className="relative w-full">
          <div className=" absolute -top-2 left-23 bg-white px-1 text-sm font-medium text-gray-700">User ID</div>
        </div>
          <input 
            type="email" 
            placeholder="Enter User ID"
            className="w-90 border border-gray-400 rounded-lg p-3 text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            onChange={(e) => setUserID(e.target.value)}
          />
          <div className="relative w-full mt-6 ">
            <div className=" absolute -top-2 left-23 bg-white px-1 text-sm font-medium text-gray-700">Password</div>
            <input 
              type={showPassword? "text":"password"}
              placeholder="Enter Password"
              className="w-90 border border-gray-400 rounded-lg p-3 text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              onChange={(e) => setPassword(e.target.value)}
            />
            {showPassword? <Eye onClick={() => setShowPassword(!showPassword)} className="absolute right-23 top-1/2 transform -translate-y-1/2 w-5 h-5 cursor-pointer" />:<EyeOff onClick={() => setShowPassword(!showPassword)} className="absolute right-23 top-1/2 transform -translate-y-1/2 w-5 h-5 cursor-pointer" /> }
            </div>
            <div className="relative w-90 left-19 top-6">
              <button 
              className="w-full bg-cyan-700 h-10 rounded-lg text-white cursor-pointer"
              onClick={handleLogin}
              disabled={loading}
              >div className="flex items-center justify-center">{loading ? (<Loader className="animate-spin w-5 h-5 "/> )  : ("Login")}</div></button>
              <p>Forgotten your password? <span onClick={forgotPassword} className="font-bold cursor-pointer">Click here</span></p>
            </div>
        </div>
      </div>
    </div>
  );
}


export default LoginForm;
