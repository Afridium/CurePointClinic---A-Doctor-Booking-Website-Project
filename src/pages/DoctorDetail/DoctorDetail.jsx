import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { BsExclamationSquare } from "react-icons/bs";
import { addToLocalStorage } from '../../utilities/addtoLocalStorage';
const DoctorDetail = () => {
    const {id} = useParams();
    const docid = parseInt(id);
    const individualDoc = useLoaderData();
    console.log(individualDoc)
    const verify = individualDoc.find((id) => id.id === docid);
    const {image, name, education, registration_number, experience, fee, workplace, availability_days } = verify;
    const handleStoringBooking = () => {
        addToLocalStorage(docid);
    }
    return (
        <div className='w-[90%] mx-auto p-3'>
            <div className='flex justify-center flex-col text-center gap-4 bg-white rounded-2xl p-5 mb-7'>
                <h1 className='text-2xl font-black lg:text-3xl'>Doctor’s Profile Details</h1>
                <p className='text-[#141414b3] text-xs'>Lorem ipsum dolor sit amet consectetur. Sit enim blandit orci tortor amet ut. Suscipit sed est fermentum magna. Quis vitae tempus facilisis turpis imperdiet mattis donec dignissim volutpat.</p>
            </div>
            <div className='bg-white rounded-2xl p-5 flex justify-center flex-col lg:gap-7 lg:flex-row lg:justify-around lg:items-center mb-7'>
                <div className='mb-3.5 lg:w-[45%]'>
                    <img className='w-66 lg:w-96 rounded-2xl mx-auto' src={image} alt="" />
                </div>
                <div className='flex flex-col gap-2 lg:w-[55%]'>
                    <h1 className='text-3xl font-black'>{name}</h1>
                    <h3 className='text-[#0f0f0f99]'>{education}</h3>
                    <h3 className='text-[#0f0f0f99]'>Working at:</h3>
                    <h2 className='font-black'>{workplace}</h2>
                    <p className='text-[#0f0f0f99]'>{registration_number}</p>
                    <p className='font-bold'>Availibilty:</p>
                    <div className='flex gap-2 items-center'>
                        <p className='bg-[#ffa0001a] border-[#ffa00033] text-[#ffa000] rounded-2xl p-1.5'>{availability_days[0]}</p>
                        <p className='bg-[#ffa0001a] border-[#ffa00033] text-[#ffa000] rounded-2xl p-1.5'>{availability_days[1]}</p>
                        <p className='bg-[#ffa0001a] border-[#ffa00033] text-[#ffa000] rounded-2xl p-1.5'>{availability_days[2]}</p>
                    </div>
                    <div>
                        <p className='font-bold'>Consultation Fee: 
                            <span className='font-bold text-blue-700'>Taka: {fee}</span>
                            <span className='text-[#14141480] text-xs'> (Incl. Vat)</span>
                            <span className='text-blue-600'> Per consultation</span>
                        </p>

                    </div>
                </div>
            </div>
            <div className='flex justify-center flex-col text-center gap-8 bg-white rounded-2xl p-5 mb-7 lg:px-7'>
                <h1 className='text-3xl font-bold'>Book an Appointment</h1>
                <div className='flex justify-between items-center'>
                    <h1 className='font-bold'>Availability</h1>
                    <p className='bg-[#ffa0001a] border-[#ffa00033] text-[#ffa000] rounded-2xl p-1.5'>Doctor Avaialable Today</p>
                   
                </div>
                 <p className='bg-[#ffa0001a] border-[#ffa00033] text-[#ffa000] rounded-xl p-1.5 flex lg:flex-row flex-col items-center justify-center text-center gap-3.5'><BsExclamationSquare size={25}/>Due to high patient volume, we are currently accepting appointments for today only. We appreciate your understanding and cooperation.</p>
                 <button onClick={handleStoringBooking} className='btn btn-primary rounded-3xl'>Book Appointment Now</button>
            </div>
        </div>
    );
};

export default DoctorDetail;<h2>Doctor Detail</h2>