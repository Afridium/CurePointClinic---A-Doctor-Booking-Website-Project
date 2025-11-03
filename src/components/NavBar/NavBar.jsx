import React from 'react';
import { FaHandHoldingMedical } from "react-icons/fa";
import { NavLink } from 'react-router';
const NavBar = () => {
    const Links = <>
        <NavLink to='/' className={({isActive}) => `nav-link py-1 border-b-2 ${isActive ? 'border-black font-bold' : 'border-transparent'}`}>Home</NavLink>
        <NavLink to='/bookings' className={({isActive}) => `nav-link py-1 border-b-2 ${isActive ? 'border-black font-bold' : 'border-transparent'}`}>My Bookings</NavLink>
        <NavLink to='/blogs' className={({isActive}) => `nav-link py-1 border-b-2 ${isActive ? 'border-black font-bold' : 'border-transparent'}`}>Blogs</NavLink>
        <NavLink to='/contact' className={({isActive}) => `nav-link py-1 border-b-2 ${isActive ? 'border-black font-bold' : 'border-transparent'}`}>Contact Us</NavLink>
    </>
    return (
        <div className='p-7'>
            <div className="navbar shadow-sm rounded-4xl px-4 border-6 border-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 pt-3 w-52 p-2 shadow">
                            {
                                Links
                            }
                            
                        </ul>
                    </div>
                    <div>
                        <NavLink to='/'>
                            <a className="flex gap-2 pl-1.5 text-xl font-black items-center"><FaHandHoldingMedical size={30} style={{color:"#176ae5"}} />CurePoint</a> 
                        </NavLink>
                       
                    </div>
                    
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 flex gap-7">
                        {
                            Links
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn bg-[#176ae5] text-white rounded-4xl">Emergency</a>
                </div>
            </div>
        </div>
    );
};

export default NavBar;