import React from 'react';
import bannerImage from '../../assets/images/banner-img-1.png'
import { motion } from "motion/react"
const Banner = () => {
    return (
        <motion.div initial={{scale:1}} whileHover={{scale:1.01}} transition={{duration: 0.5,ease:'easeInOut'}}>
            <div className='w-full mb-20'>
            <div className='px-7 border-6 border-white mb-8 rounded-4xl m-6 shadow-xl w-[95%] mx-auto'>
                <div className='lg:w-[80%] lg:mx-auto w-full'>
                    <h1 className='text-3xl lg:text-6xl text-center font-black my-4 lg:my-9 wrap-break-word'>Dependable Care, Backed by Trusted Professionals.</h1>
                    <p className='text-xs lg:text-lg lg:w-[80%] lg:mx-auto text-center opacity-80 mb-4 lg:mb-7'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
                </div>


                <div className='flex box-border justify-center px-1 lg:px-30 lg:mb-10 gap-2.5 w-full mb-4'>
                    <img className='w-[45%] object-cover' src={bannerImage} alt="" />
                    <img className='w-[45%] object-cover' src={bannerImage} alt="" />
                </div>
            </div>
        </div>
        </motion.div>
        

    );
};

export default Banner;