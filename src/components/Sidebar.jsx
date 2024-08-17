import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';
import { useAuth } from '../contexts/Auth';

const Sidebar = () => {
  const [isOpened, setIsOpened] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { auth, logout, isAuthenticated } = useAuth();
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  const toggleDropdown = () => {
    setIsOpened(!isOpened);
  };
  const getInitials = (firstName, lastName) => {
    return `${firstName?.charAt(0) || ''}${lastName?.charAt(0) || ''}`.toUpperCase();
  };
  const handleLogout = () => {
    logout();
    navigate("/login");
  };


  return (
    <div className="md:hidden fixed z-30 w-full md:w-0 bg-gray-400 py-2 flex justify-between items-center">
      
      <div className=" w-[215.66px] h-[47.21px] font-poppins flex items-center pl-4">
          <span className='bg-[#3D9970] font-bold text-[23.61px] rounded-full p-2 mr-3 text-white'>BH</span>
          <span className='font-medium text-[28.33px] text-white'>BetaHouse</span>
        </div>
      <button
        onClick={toggleSidebar}
        className="md:hidden p-4 text-white"
        aria-label="Toggle sidebar"
      >
        {isOpen ? <HiX className="text-4xl" /> : <HiMenu className="text-4xl" />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-20 left-0 h-full w-72 bg-gray-400 text-white transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out z-50`}
      >
        {/* <div className=" w-[215.66px] h-[47.21px] font-poppins flex items-center pl-4 mt-4">
          <span className='bg-[#3D9970] font-bold text-[23.61px] rounded-full p-2 mr-3 text-white '>BH</span>
          <span className='font-medium text-[28.33px] text-white'>BetaHouse</span>
        </div> */}
        <div className="p-6 space-y-8">
          <ul className="space-y-8 pl-4 text-lg">
            <li>
              <Link to="/home" onClick={toggleSidebar}>Home</Link>
            </li>
            <li>
              <Link to="/" onClick={toggleSidebar}>Properties</Link>
            </li>
            <li>
              <Link to="/about" onClick={toggleSidebar}>About Us</Link>
            </li>
            <li>
              <Link to="/blog" onClick={toggleSidebar}>Blog</Link>
            </li>
            <li>
              <Link to="/contact" onClick={toggleSidebar}>Contact Us</Link>
            </li>
          </ul>
        </div>
        {!auth.user ? (
         
           <button className='bg-white text-[#3D9970] py-1 px-4 text-lg font-medium rounded-md hover:border-2 hover:border-[#3D9970] hover:bg-transparent hover:text-white ml-10'><Link to='/login'>Login</Link></button>
        
        ) : (
          <div className="w-auto flex items-center gap-x-4">
          {auth?.user?.image ? (
            <img src={auth?.user?.image} alt="User" className='rounded-full w-[48.44px] h-[48.44px]' />
          ) : (
            <div className='rounded-full w-[48.44px] h-[48.44px] bg-gray-500 flex items-center justify-center text-white'>
              {getInitials(auth?.user?.firstName, auth?.user?.lastName)}
            </div>
          )}
          <div className="relative inline-block text-left">
            <button
              id="dropdownDefaultButton"
              data-dropdown-toggle="dropdown"
              className="text-white focus:outline-none font-medium text-[26px] py-2.5 text-center inline-flex items-center"
              type="button"
              onClick={toggleDropdown}
            >
              <span>{auth?.user ? `${auth?.user?.firstName} ${auth?.user?.lastName}` : 'My Account'}</span>
              <svg
                className="w-4 h-4 ms-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>

            {isOpened && (
              <div
                id="dropdown"
                className="z-10 absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-52 dark:bg-gray-700 pl-2"
                
              >
                <ul className="py-2 text-xl text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                  <li>
                    <Link to='/dashboard' className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      Dashboard
                    </Link>
                  </li>
                  
                  <li>
                  {isAuthenticated ? (
        <Link
          to="/login"
          onClick={handleLogout}
          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
        >
          Sign out
        </Link>
      ) : (
        <Link
          to="/login"
          
          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
        >
          Sign in
        </Link>
      )}
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
        )}
        
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0  z-40"
          aria-hidden="true"
        ></div>
      )}
    </div>
    // bg-gray-400
  );
};

export default Sidebar;
