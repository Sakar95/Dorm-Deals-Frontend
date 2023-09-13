import React, { useState } from 'react';
import Profile from '../Images/Profile.JPG';
import { FaSearch, FaPlus, FaCaretDown } from 'react-icons/fa'; // Import the FaCaretDown icon

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <nav className="bg-gray-900 p-4 flex justify-between items-center">
        {/* Left Section */}
        <div className="text-white text-2xl font-bold ml-8 flex items-center">
          DormDeals<span className="text-red-500 text-3xl">.</span>
        </div>

        {/* Middle Section */}
        <div className="w-1/4 flex">
          <input
            type="text"
            className="w-full px-2 py-1 border rounded-s-2xl"
            placeholder="Search..."
          />
          <button className="px-4 bg-red-600 rounded-e-3xl">
            <FaSearch className="text-white" />
          </button>
        </div>

        {/* Tab Section */}
        <div className="flex justify-center space-x-4 relative">
          {/* Categories Dropdown Button */}
          <button
            onClick={toggleDropdown}
            className="text-white hover:text-red-500 px-4 transition duration-300 ease-in-out flex items-center"
          >
            Categories
            <FaCaretDown className="ml-2" /> {/* Add the arrow icon */}
          </button>
          {isDropdownOpen && (
            <div className="absolute left-0 mt-8 w-48 bg-white border border-gray-300 rounded-lg shadow-md">
              <ul className="py-2">
                <li>
                  <a
                    href="/dashboard"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  >
                    Electronics
                  </a>
                </li>
                <li>
                  <a
                    href="/dashboard"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  >
                    Stationary
                  </a>
                </li>
                <li>
                  <a
                    href="/dashboard"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  >
                    Furniture
                  </a>
                </li>
                <li>
                  <a
                    href="/dashboard"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  >
                    Sports
                  </a>
                </li>
                {/* Add more categories as needed */}
              </ul>
            </div>
          )}
          <a
            href="/about"
            className="text-white hover:text-red-500 px-4 transition duration-300 ease-in-out"
          >
            About us
          </a>
          <a
            href="/sell"
            className="text-white bg-red-500 rounded-3xl hover:text-red-500 px-4 transition duration-300 ease-in-out"
          >
            Sell
          </a>
        </div>

        {/* Right Section */}
        <div className="text-white flex items-center">
          <div className="rounded-full overflow-hidden h-8 w-8 mr-2">
            <img
              src={Profile} // Replace with the path to your image
              alt="Profile"
              className="h-full w-full object-cover"
            />
          </div>
          <a href="/profile" className="hover:underline">
            My Account
          </a>
        </div>
      </nav>
      <div className="bg-red-500 h-0.5"></div>
    </>
  );
};

export default Navbar;
