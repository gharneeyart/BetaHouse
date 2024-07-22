import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/Auth';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { auth, logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const location = useLocation(); // Get current location

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const getInitials = (firstName, lastName) => {
    return `${firstName?.charAt(0) || ''}${lastName?.charAt(0) || ''}`.toUpperCase();
  };

  // Function to check if the link is active
  const isActive = (path) => location.pathname === path;

  return (
    <div className='h-[121px] max-w-full hidden md:flex justify-center items-center md:px-8 lg:px-10 fixed right-0 left-0 bg-[#1D293F1F]'>
      <div className="w-full flex justify-between items-center h-[50px]">
        <div className="w-[215.66px] h-[47.21px] font-poppins">
          <span className='bg-[#3D9970] font-bold text-[23.61px] rounded-full p-2 mr-3 text-white'>BH</span>
          <span className='font-medium text-[28.33px] text-white text-center'>BetaHouse</span>
        </div>
        <div>
          <ul className='flex text-xl md:text-base md:gap-x-6 font-medium gap-x-8 text-[#F5F5F5]'>
            <li>
              <Link to="#" className={isActive('#') ? 'active-link' : ''}>Home</Link>
            </li>
            <li>
              <Link to="/" className={isActive('/') ? 'active-link' : ''}>Properties</Link>
            </li>
            <li>
              <Link to="#" className={isActive('#') ? 'active-link' : ''}>About Us</Link>
            </li>
            <li>
              <Link to="#" className={isActive('#') ? 'active-link' : ''}>Blog</Link>
            </li>
            <li>
              <Link to="#" className={isActive('#') ? 'active-link' : ''}>Contact Us</Link>
            </li>
          </ul>
        </div>
        
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

            {isOpen && (
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
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      Settings
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      Earnings
                    </a>
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
      </div>
    </div>
  );
};

export default NavBar;
