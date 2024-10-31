import React, { useState } from 'react';

function BookingForm() {
   
   const [guestName, setGuestName] = useState('');
   const [roomType, setRoomType] = useState('Single');
   const [checkInDate, setCheckInDate] = useState('');
   const [checkOutDate, setCheckOutDate] = useState('');
   
   
   const [bookingMessage, setBookingMessage] = useState('');

   const handleSubmit = (e) => {
      e.preventDefault();
      
      
      setBookingMessage(`Thank you, ${guestName}! Your booking for a ${roomType} room is confirmed.`);
      
      
      setGuestName('');
      setRoomType('Single');
      setCheckInDate('');
      setCheckOutDate('');
   };

   return (
      <div>
         <form onSubmit={handleSubmit}>
            <input
               type="text"
               placeholder="Guest Name"
               value={guestName}
               onChange={(e) => setGuestName(e.target.value)}
            />
            <br></br>
            <select value={roomType} onChange={(e) => setRoomType(e.target.value)}>
               <option value="Single">Single</option>
               <option value="Double">Double</option>
               <option value="Suite">Suite</option>
            </select>
            <br></br>
            <input
               type="date"
               value={checkInDate}
               onChange={(e) => setCheckInDate(e.target.value)}
            />
            <br></br>
            <input
               type="date"
               value={checkOutDate}
               onChange={(e) => setCheckOutDate(e.target.value)}
            />
            <br></br>
            <button type="submit">Book</button>
            
         </form>

         {/* Display abooking message if available */}
         {bookingMessage && <p>{bookingMessage}</p>}
      </div>
   );
}

export default BookingForm;
