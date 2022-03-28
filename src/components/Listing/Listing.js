import React from "react";
import "./Listing.css";

const listing = ({ title, image, price, rating}) => {
  return (
    <div className="listing">
      <div className="listing__info">
        <h5>{title}</h5>
        <div className="listing__price">
          <p>
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <p>
            <small>seller rating: </small>
          </p>
          <div className="listing__rating">
            {Array(rating)
              .fill()
              .map((rating) => (
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
