import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
const Navbar = () => {
  const [token,setToken] = useState(false)
  const navigate = useNavigate()
  return (
    <motion.nav
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.6,
        ease: 'easeOut',
      }}
      className="fixed top-0 z-50 w-full flex justify-center p-4"
    >
      {/* Container */}
      <div className="flex items-center justify-between w-full max-w-6xl px-6 py-3 border border-white/10 rounded-full bg-[#0a0a0a] shadow-2xl">
        
        {/* Left: Logo Section */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
            <span className="text-white text-xs">✦</span>
          </div>
          <h1 className="text-white font-bold text-lg tracking-tight">
            NeuroDocs
          </h1>
        </div>

        {/* Center: Navigation Links */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
          <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
          <li><a href="#capability" className="hover:text-white transition-colors">Capabilities</a></li>

           <Link
    to="/onboarding" 
    className="hover:text-white transition-colors"
  >
    Onboarding
  </Link>
      <Link
    to="/support" 
    className="hover:text-white transition-colors"
  >
    Support
  </Link>

        </ul>

        {/* Right: Actions */}
        <div className="flex items-center gap-6">
        {!token && <button onClick={()=>navigate('/login')} className="text-sm font-medium text-white hover:text-gray-300 transition-colors">
            Login
          </button> }  
          <button onClick={()=>{token? navigate('/dashboard'): navigate('/login') }} className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all shadow-[0_0_15px_rgba(37,99,235,0.4)]">
            Get Started 
          </button>
        </div>

      </div>
    </motion.nav>
  );
};

export default Navbar;
