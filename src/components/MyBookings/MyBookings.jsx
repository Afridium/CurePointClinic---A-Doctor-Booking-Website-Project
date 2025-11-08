import React, { useState, useEffect } from 'react';
import { getBooking } from '../../utilities/addtoLocalStorage';


const MyBookings = ({ bookedDocs, handleCancelAppointment }) => {
    const { id, image, name, education, registration_number, experience, fee, workplace, availability_days } = bookedDocs;
    const [bookings, setBookings] = useState([]);


    return (
        <div className='bg-white mb-7 p-5 rounded-3xl shadow-2xs mx-7'>
            <h1 className='mb-3.5 font-bold'>{name}</h1>
            <div className='flex justify-between mb-3.5'>
                <p>{education}</p>
                <p>Fee: {fee}BDT</p>
            </div>
            <button onClick={() => handleCancelAppointment(id)} className='btn rounded-3xl border-red-700 text-red-700 w-full mb-3.5'>Cancel</button>
        </div>

    );
};

export default MyBookings;