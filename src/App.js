import React, { useState } from 'react';
import './BookingForm.css'; // Import the CSS file for styling

const roomData = [
   {
      type: "Single",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFGJOI1ugVJ4Zr-KGvNipsz6ObhM1FW4DVlw&s", // Replace with actual image URL
      cost: "1500"
   },
   {
      type: "Double",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcxmAfsSunp7powjtb-2h-re1T9RLm7Ykf0w&s", // Replace with actual image URL
      cost: "2500"
   },
   {
      type: "Suite",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0G5ouV5ePhKPGz3UBof8Zd4vzNHxDZ9Y6yA&s", // Replace with actual image URL
      cost: "4000"
   }
];

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

   const selectedRoom = roomData.find(room => room.type === roomType);

   return (
      <div className="booking-form">
         <h1 className="title">Hotel Booking System</h1>
         <form onSubmit={handleSubmit}>
            <input
               type="text"
               placeholder="Guest Name"
               value={guestName}
               onChange={(e) => setGuestName(e.target.value)}
               required
            />
            <br />
            <select value={roomType} onChange={(e) => setRoomType(e.target.value)}>
               {roomData.map(room => (
                  <option key={room.type} value={room.type}>{room.type}</option>
               ))}
            </select>
            <br />
            <input
               type="date"
               value={checkInDate}
               onChange={(e) => setCheckInDate(e.target.value)}
               required
            />
            <br />
            <input
               type="date"
               value={checkOutDate}
               onChange={(e) => setCheckOutDate(e.target.value)}
               required
            />
            <br />
            <button type="submit">Book</button>
         </form>

         {/* Display room details */}
         <div className="room-details">
            <h2>{roomType} Room</h2>
            <img src={selectedRoom.image} alt={`${roomType} room`} />
            <p>Cost per night: {selectedRoom.cost}</p>
         </div>

         {/* Display booking message if available */}
         {bookingMessage && <p className="booking-message">{bookingMessage}</p>}
      </div>
   );
}

export default BookingForm;
