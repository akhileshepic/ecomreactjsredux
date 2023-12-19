// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom'; // if using React Router
import Logo from '../assets/Logo-amazon.png'
import { FaLocationDot } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
const Navbar = () => {
    return (
        <nav className="bg-gray-800 p-2">
            <div className="container mx-auto flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="text-white text-xl font-bold">
                    <img src={Logo} alt="Logo" width={`150px`} />
                </Link>
                <div className='flex space-x-4 items-center'>
                    <div className='flex  items-center text-white'>
                        <div><FaLocationDot size={23} /></div>
                        <div >
                            <span className='text-[10px]'>Delivering to Gurugram 122001 </span>

                        </div>
                    </div>
                    <div className='flex items-center w-[600px]'>
                        <div className='relative'>
                            <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" class="text-white bg-gray-700 focus:ring-1 focus:outline-none focus:ring-orange-300 font-medium rounded-tl rounded-bl text-sm px-2 py-2.5 text-center inline-flex items-center " type="button">ALL<svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                            </svg>
                            </button>
                            <div id="dropdown" class="z-100 absolute bg-white divide-y divide-gray-100 rounded-bl-lg rounded-br-lg shadow w-44 dark:bg-gray-700">
                                <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                                    <li>
                                        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                                    </li>
                                    <li>
                                        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                                    </li>
                                    <li>
                                        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                                    </li>
                                    <li>
                                        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='relative w-full'>
                            <input type='text' className='w-full h-[38px] outline-none pl-2' />
                            <div className='p-[9px] bg-orange-300 absolute top-0 right-0'>
                                <FaSearch className='' size={20} />
                            </div>
                        </div>

                    </div>
                </div>
                {/* Navigation Links */}
                <div>
                    one
                </div>
                <div>
                    one
                </div>
                <div>
                    one
                </div>
                <div>
                    one
                </div>
                {/* <div className="space-x-4">
                    <Link to="/" className="text-white">Home</Link>
                    <Link to="/products" className="text-white">Products</Link>
                    <Link to="/cart" className="text-white">Cart</Link>
             
                </div> */}
            </div>
        </nav>
    );
};

export default Navbar;
