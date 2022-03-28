import React from "react";
import "./Listing.css";

const listing = ({ title, image, price, rating}) => {
  return (
    <div className="listing">
      <div className="listing__info">
        <h6>{title}</h6>
        <div className="listing__price">
          <p>
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <div className="listing__rating">
            {Array(rating).map((rating) => (
              <p>️️⭐</p>
            ))}
          </div>
        </div>
      </div>
      <img className="listing__image" src={image} alt="" />
      <button className="listing__button">Add to Cart</button>
    </div>
  );
};

export default listing;
