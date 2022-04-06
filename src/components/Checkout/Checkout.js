import React from "react";
import "./Checkout.css";
import banner from "../../assets/photos/skateboard1.png";
import Subtotal from "../Subtotal/Subtotal";

const Checkoout = () => {
  return (
    <div className="checkout">
      <img className="checkout__ad" src={banner} alt="" />
      <div className="checkout__container">
        <div className="checkout__left">
          <div style={{ paddingLeft: "10%" }}>
            <h2 className="checkout__title checkout__title__left">
              Your Shopping Cart
              <Subtotal className="checkout__title_right" />
            </h2>
          </div>
        </div>
        <div className="checkout__right">
          <div>{/* <Subtotal className="checkout__title_right" /> */}</div>
        </div>
      </div>
    </div>
  );
};

export default Checkoout;
