import React from 'react';
import SingleDoctorCard from './SingleDoctorCard';

const Doctors = ({allDocs}) => {
    console.log(allDocs)
   
    return (
        <div className='px-7'>
            <div className='text-center'>
                <h1 className='text-4xl font-bold mb-4'>Out Best Doctors</h1>
                <p className='text-xs w-[75%] lg:text-lg mx-auto mb-10 opacity-85'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
            </div>
            <div className='lg:flex lg:justify-center'>
                <div className='md:grid lg:grid-cols-3 md:grid-cols-2 lg:gap-4'>
                {
                    allDocs.map((doc) => <SingleDoctorCard key={doc.id} doc={doc}></SingleDoctorCard>)
                }
            </div>
            </div>
            
        </div>
    );
};

export default Doctors;