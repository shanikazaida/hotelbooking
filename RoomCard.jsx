function RoomCard({ room }) {
   return (
      <div className="room-card">
         <h3>{room.name}</h3>
         <p>Type: {room.type}</p>
         <p>Price: ${room.price}</p>
         <button>Edit</button>
         <button>Delete</button>
      </div>
   );
}
