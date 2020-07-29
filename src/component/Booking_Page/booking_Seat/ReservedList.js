import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./booking_seat.css";
const ReservedList = () => {
  const reserved=useSelector(state=>state.bookSeat);
  
  return (
    <div className="right">
      <div className="ticket mov">
        <div className="seated">
          {reserved.seatReserved.map((res) => (
            <li key={res}>{res}</li>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReservedList;
