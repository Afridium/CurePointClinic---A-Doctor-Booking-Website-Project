import React, { useState } from 'react';
import SingleDoctorCard from './SingleDoctorCard';
import { motion } from "motion/react"


const Doctors = ({ allDocs }) => {
    const [visibleCount, setVisibleCount] = useState(6);
    const toggleView = () => {
        if (visibleCount < allDocs.length) {
            setVisibleCount(allDocs.length);
        } else {
            setVisibleCount(6);
        }
    };
    return (
        <div className='px-7'>
            <div className='text-center'>
                <h1 className='text-4xl font-bold mb-4'>Out Best Doctors</h1>
                <p className='text-xs w-[75%] lg:text-lg mx-auto mb-10 opacity-85'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
            </div>

            <div className='lg:flex lg:justify-center'>
                <div className='md:grid lg:grid-cols-3 md:grid-cols-2 lg:gap-8'>
                    {
                        allDocs.slice(0, visibleCount).map((doc) => <SingleDoctorCard key={doc.id} doc={doc}></SingleDoctorCard>)
                    }
                </div>

            </div>
            <div  className='flex justify-center mb-8 mt-5'>
                <motion.button initial={{boxShadow: 0}} whileHover={{boxShadow: "0px 5px 20px rgba(0, 0, 0, 0.4)"}} transition={{duration:0.2, ease:'easeInOut'}} onClick={() => toggleView()} className='btn bg-[#176ae5] text-white rounded-4xl '>
                    {visibleCount < allDocs.length ? 'View More' : 'View Less'}
                </motion.button>
            </div>

        </div>
    );
};

export default Doctors;