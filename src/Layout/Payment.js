/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/heading-has-content */
import React from "react";
import Header from "../component/header/Header";
import Footer from "../component/Footer/Footer";
import Paypal from "../component/Booking_Page/CheckBookRight/Paypal";
import "../css/Product_detail_left.css";
import QRCode from "qrcode.react";
const Profile = (props) => {
  console.log(props, "xem");
  return (
    <>
      <Header />
      <div className="hero mv-single-hero" style={{ height: "300px" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-12"></div>
          </div>
        </div>
      </div>

      <div style={{ height: "300px", background: "#020d18" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6">
              <h5 style={{ color: "White", padding: "50px" }}>
                Tổng Tiền: {props.location.state.tong} $$$
                <QRCode
                  id="qrcode"
                  value={props.location.state.tong}
                  size={290}
                  level={"H"}
                  includeMargin={true}
                />
              </h5>
              <Paypal topay={props.location.state.tong} />

              <h3
                style={{ marginTop: "20px", color: "White" }}
                id="inforPayment"
              ></h3>
            </div>
            <div className="col-lg-6 col-sm-6 col-md-6">
              <img src={require("../images/uploads/ads1.png")} />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Profile;
