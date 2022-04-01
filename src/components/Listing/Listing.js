import React from "react";
import "./Listing.css";
import { useStateValue } from "../../State/StateProvider";

const listing = ({ id, title, image, price, rating }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [state, dispatch] = useStateValue();

  const addToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      }
    });
  };
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
              .map((rating, index) => (
                <p key={index}>️️⭐</p>
              ))}
          </div>
        </div>
      </div>
      <img className="listing__image" src={image} alt="" />
      <button onClick={addToCart} className="listing__button">
        Add to Cart
      </button>
    </div>
  );
};

export default listing;
