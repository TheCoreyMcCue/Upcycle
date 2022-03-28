import React from "react";
import "./Listing.css";

const listing = () => {
  return (
    <div className="listing">
      <div className="listing__info">
        <h4>Complete Element Deck with Spitfire Wheels</h4>
        <div className="listing__price">
          <p>
            <small>$</small>
            <strong>120</strong>
          </p>
          <div className="listing__rating">
            <p>️️⭐</p>
          </div>
        </div>
      </div>
      <img
        className="listing__image"
        src="https://images.unsplash.com/photo-1547447134-cd3f5c716030?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3403&q=80"
        alt=""
      />
      <button>Add to Cart</button>
    </div>
  );
};

export default listing;
