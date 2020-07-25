import React, { useState, useEffect } from "react";
import Header from "../component/header/Header";
import Footer from "../component/Footer/Footer";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../store/action/isLogOut";
import emailjs from 'emailjs-com';
import "../css/Product_detail_left.css";
import { nodeApiLink } from '../config/nodeApiLink';

const Profile = () => {
  const [ticket, setTicket] = useState([]);
  const [logOut, setLogOut] = useState(true);
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.loginUser);
  useEffect(() => {
    data();
  }, []);
  const data = () => {
    axios
    .get(`${nodeApiLink}/booking/data`)
      .then((Response) => {
        const ticket = Response.data;
        setTicket(ticket);
      })
      .catch((err) => console.log(err));
  };
  console.log(ticket);

  let ticketUser = ticket.filter((item) => item.client === userName.email);

  const listBook = ticketUser.map((item, index) => (
    <tr>
      <th scope="row">{index}</th>
      <td>{item.cinema}</td>
      <td>{item.date}</td>
      <td>{item.time}</td>
      <td>{item.name}</td>
      <td>{item.seats}</td>
      <td>{item.tongTien}</td>
    </tr>
  ));
  var name = userName.email.split("@");

  const LogOutAccount = () => {
    setLogOut(false);
    dispatch(actions.onLogOut(false));
  };
  console.log(logOut, "đâu");

  const sentEmail=()=>{
    emailjs.send('gmail','template_ooyu9fe9',{khanh:"cảm ơn bạn đã đặt vé"}, 'user_K0eHghnp38YT5qwjxEru9')
    .then((response) => {
       console.log('SUCCESS!', response.status, response.text);
    }, (err) => {
       console.log('FAILED...', err);
    });
  }
  return (
    <>
      <Header />
      <div
        className="hero mv-single-hero heroProfile"
        style={{ height: "300px" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12"></div>
          </div>
        </div>
      </div>
      <div style={{ height: "600px", background: "#020d18", color: "white" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-3 col-md-3 left-profile">
              <div className="avatar">
                <img
                  src={require("../images/uploads/ava4.jpg")}
                  height="100px"
                  width="100px"
                  style={{ borderRadius: "50px" }}
                />
                <p>{logOut ? name[0] : ""}</p>
                <a className="btn btn-outline-primary button-image">AVATAR</a>
              </div>
              <div className="avatar-content">
                <p>Account Detail</p>
                <p style={{ color: "yellow" }}>ProFile</p>
                <p
                  style={{ fontSize: "15px" }}
                  className="btn btn-outline-primary"
                  onClick={sentEmail}
                >
                  Sent Email
                </p>
                <a
                  className="btn btn-outline-primary BTN-LOGOUT"
                  onClick={LogOutAccount}
                >
                  LOG OUT
                </a>
              </div>
            </div>
            <div className="col-lg-8 col-md-8 col-sm-8">
              <div>
                <div className="container" style={{ paddingTop: "80px" }}>
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">STT </th>
                        <th scope="col">Rap</th>
                        <th scope="col">Thời Gian Đặt</th>
                        <th scope="col">Xuất Chiếu</th>
                        <th scope="col">Tên Phim</th>
                        <th scope="col">Số Ghế</th>
                        <th scope="col">Tổng Tiền</th>
                      </tr>
                    </thead>
                    <tbody>{logOut ? listBook : ""}</tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
