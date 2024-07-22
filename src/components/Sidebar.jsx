import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi'; // Importing menu icons from react-icons

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative w-full  bg-gray-800 py-1">
      {/* Menu Button */}
      <button onClick={toggleSidebar} className="md:hidden p-4 ">
        {isOpen ? <HiX className="text-4xl text-white" /> : <HiMenu className="text-4xl text-white" />}
      </button>

      {/* Sidebar */}
      <div className={`fixed top-0 left-0 h-full w-64 bg-[#1D293F1F] text-white transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-50`}>
        <div className="p-4 space-y-8">
        <div className="w-[215.66px] h-[47.21px] font-poppins">
                <span className='bg-[#3D9970] font-bold text-[23.61px] rounded-full p-2 mr-3 text-white'>BH</span>
                <span className='font-medium text-[28.33px] text-white text-center'>BetaHouse</span>
            </div>
          <ul className="space-y-8 pl-4 text-lg">
            <li className="mb-4">
              <Link to="/" onClick={toggleSidebar}>Home</Link>
            </li>
            <li className="mb-4">
              <Link to="/" onClick={toggleSidebar}>Properties</Link>
            </li>
            <li className="mb-4">
              <Link to="/about" onClick={toggleSidebar}>About Us</Link>
            </li>
            <li className="mb-4">
              <Link to="/services" onClick={toggleSidebar}>Blog</Link>
            </li>
            <li className="mb-4">
              <Link to="/contact" onClick={toggleSidebar}>Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
      
      
      {/* Overlay */}
      {isOpen && <div onClick={toggleSidebar} className="fixed inset-0 bg-black opacity-50 z-40"></div>}
    </div>
  );
};

export default Sidebar;
