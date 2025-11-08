import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getBooking } from '../../utilities/addtoLocalStorage';
import MyBookings from '../../components/MyBookings/MyBookings';

const BookingPage = () => {
    const [booking, setBooking] = useState([]);
    const doctorData = useLoaderData();
    console.log(doctorData)
    useEffect(() => {
        const bookingid = getBooking() || [];
        const intBookingIds = bookingid.map((id) => parseInt(id));
        const bookingList = doctorData.filter((doc) => intBookingIds.includes(doc.id));
        setBooking(bookingList);

    }, [doctorData]);
    // This handles cancel and updates both state and localStorage
    const handleCancelAppointment = (id) => {
        const updatedBooking = booking.filter((b) => b.id !== id);
        setBooking(updatedBooking);

        // Also update localStorage
        const storedBookingIds = getBooking() || [];
        const updatedBookingIds = storedBookingIds.filter((bid) => bid !== id);
        localStorage.setItem("BookingList", JSON.stringify(updatedBookingIds));
    };
    return (

        <div>
            <div className='text-center my-5 mx-8'>
                <h1 className='font-bold text-2xl mb-4'>My Today Appointments</h1>
                <p className='opacity-80 text-xs mb-4'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience.</p>
            </div>
            <div>
                {
                    booking.map((bookedDocs) => <MyBookings key={bookedDocs.id} bookedDocs={bookedDocs} handleCancelAppointment={handleCancelAppointment}></MyBookings>)
                }
            </div>

        </div>
    );
};

export default BookingPage;