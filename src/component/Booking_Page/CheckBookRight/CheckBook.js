/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import ReservedList from "../booking_Seat/ReservedList";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import "../style/checkbook.css";
import * as actions from "../../../store/action/schedule";
import { Link } from "react-router-dom";

//import { set } from "immer/dist/internal";

const CheckBook = (props) => {
  const [combo1, setCombo1] = useState(0);
  const [combo2, setCombo2] = useState(0);

  const bookSeat = useSelector((state) => state.bookSeat);
  const timeBook = useSelector((state) => state.schedule);
  const dataBooking = useSelector((state) => state.dataBooking);
  const dataTicket = useSelector((state) => state.schedule); // chưa giá trị ngày đặt và rạp chiếu truyền từ store
  const userLogin = useSelector((state) => state.loginUser);

  useEffect(() => {
    console.log("thay doi không");
  }, bookSeat.seatReserved);
  console.log(dataTicket, "thành công");
  const onHandleChangeCombo1 = (event) => {
    console.log(event.target.value);
    setCombo1(event.target.value);
  };
  const onHandleChangeCombo2 = (event) => {
    setCombo2(event.target.value);
  };

  const { seatReserved } = bookSeat;
  console.log(seatReserved, "truyền qua chưa");

  const name = dataBooking[0] && dataBooking[0].name;
  const id = dataBooking[0] && dataBooking[0].id;
  const image = dataBooking[0] && dataBooking[0].image[0];
  console.log(id,"đúng kh");
  let tong = seatReserved.length * 75 + combo1 * 60 + combo2 * 80;

  const data = {
    name: name,
    time: timeBook.time,
    date: props.date,
    TongTien: tong.toString(),
    cinema: props.cinema,
    Seats: seatReserved.length.toString(),
  };

  console.log(typeof tong, typeof seatReserved.length, "xem kiểu dữ liệu");
  const handlePost = (e) => {
    e.preventDefault();
    console.log(data);
    axios
      .post("https://cinema-web-backend.herokuapp.com/booking/postData", {
        id: id,
        name: name,
        time: timeBook.time,
        date: dataTicket.scheduleTime, //ngày
        tongTien: tong, // không lên
        cinema: dataTicket.cinema, //tên rạp
        seats: seatReserved, //không lên
        client: userLogin.email,
      })
      .then((Response) => console.log(Response.data))
      .catch((err) => console.log(err));

      
  };

  return (
    <form onSubmit={handlePost}>
      <div className="border-warp">
        <div className="warp-content" style={{ padding: "10px" }}>
          <div className="warp-content-head">
            <div className="head-left">
              <img
                src={`http://ciname-nodejs-backend.herokuapp.com/movie/picture/${image}`}
                height="150px"
              />
            </div>
            <div className="head-right">
              <p>{name}</p>
              <p>Xuất: {timeBook.time}</p>
              <p>giá vé: 75 $/vé</p>
            </div>
          </div>

          <div className="wrap-content-middle">
            <h5>ComBo & Khuyến Mãi</h5>
            <div className="combo">
              <table class="table">
                <thead>
                  <tr>
                    <th>Combo</th>
                    <th>Đơn Giá</th>
                    <th>Số Lượng</th>
                    <th>Tổng</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <img
                        src={require("../../../images/uploads/combo.jpg")}
                        height="50px"
                      />
                    </td>
                    <td>60 Đ</td>
                    <td>
                      <input
                        type="number"
                        id="quantity"
                        name="combo1"
                        min={1}
                        max={5}
                        onChange={onHandleChangeCombo1}
                      />
                    </td>

                    <td>{combo1 * 60}$</td>
                  </tr>

                  <tr>
                    <td>
                      <img
                        src={require("../../../images/uploads/combo.jpg")}
                        height="50px"
                      />
                    </td>
                    <td>80Đ</td>
                    <td>
                      <input
                        type="number"
                        id="quantity"
                        name="combo2"
                        min={1}
                        max={5}
                        onChange={onHandleChangeCombo2}
                      />
                    </td>
                    <td>{combo2 * 80}$</td>
                  </tr>

                  <tr>
                    <td>Ticket 2D</td>
                    <td>75 Đ</td>
                    <td>
                      <p>{seatReserved.length}</p>
                    </td>
                    <td>{seatReserved.length * 75}$</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="checkSeat">
            <h5>Ghế Đã Chọn</h5>
            <div className="wrap-checkSeat">
              <ReservedList />
            </div>
          </div>

          <div className="Bill">
            <h6>Tổng Cộng</h6>
            <label>{tong} VND</label>
          </div>

          <button
            className="btn btn-outline-primary"
            style={{ width: "100%" }}
            onClick={handlePost}
          >
            <Link
              to={{
                pathname: "/payment",
                state: { tong: tong },
              }}
            >
              Đặt vé
            </Link>
          </button>
        </div>
      </div>
    </form>
  );
};

// const mapStateToProps=(state)=>{
//   return{
//       bookSeat:state.bookSeat,
//       time:state.schedule,
//       dataBooking:state.dataBooking
//   }
// }

export default CheckBook;
