const getBooking = () => {
    const storedBookingstr = localStorage.getItem("BookingList");

    if(storedBookingstr){
        const storeBookingData = JSON.parse(storedBookingstr);
        return storeBookingData;
    }else{
        return [];
    }
}

const addToLocalStorage = (id) => {
    const storeBookingData = getBooking(id);

    if(storeBookingData.includes(id)){
        alert('Doctor Already in My-Booking');
    }else{
        storeBookingData.push(id);
        const data = JSON.stringify(storeBookingData);
        localStorage.setItem("BookingList", data);
    }
}

export {addToLocalStorage, getBooking};