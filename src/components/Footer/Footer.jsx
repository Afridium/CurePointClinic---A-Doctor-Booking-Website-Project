import React from 'react';
import { FaHandHoldingMedical } from "react-icons/fa";
import { NavLink } from 'react-router';
const Footer = () => {
    
    return (
        <div className='bg-white w-full h-full'>
            <div className='text-center p-9'>
                <div className="flex lg:gap-2 lg:pl-1.5 text-xl font-black items-center justify-center"><FaHandHoldingMedical size={30} style={{color:"#176ae5"}} />CurePoint</div>
                <ul>
                    <li><NavLink to='/' className={({isActive}) => `lg:nav-link py-1 border-b-2 ${isActive ? 'border-black font-bold' : 'border-transparent'}`}>Home</NavLink></li>
                    <li><NavLink to='/mybookings' className={({isActive}) => `lg:nav-link py-1 border-b-2 ${isActive ? 'border-black font-bold' : 'border-transparent'}`}>My Bookings</NavLink></li>
                    <li><NavLink to='/blogs' className={({isActive}) => `lg:nav-link py-1 border-b-2 ${isActive ? 'border-black font-bold' : 'border-transparent'}`}>Blogs</NavLink></li>
                    <li><NavLink to='/contact' className={({isActive}) => `lg:nav-link py-1 border-b-2 ${isActive ? 'border-black font-bold' : 'border-transparent'}`}>Contact Us</NavLink></li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;