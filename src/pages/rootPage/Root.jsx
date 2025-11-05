import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import { Outlet } from 'react-router';
import Footer from '../../components/Footer/Footer';


const Root = () => {
    return (
        <div className='bg-[#efefef] plus-jakarta-sans'>
            <NavBar></NavBar>
            <Outlet></Outlet>
            {/* <Footer></Footer> */}
        </div>
    );
};

export default Root;