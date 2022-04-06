import React, { useState } from "react";
import "./Listing.css";
import { useStateValue } from "../../State/StateProvider";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Button } from "@mui/material";

const listing = ({ id, title, image, price, rating, description }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [{ cart }, dispatch] = useStateValue();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [toggleDescription, setToggleDescription] = useState(true);

  console.log("cart", cart);

  const addToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
        description: description,
      },
    });
  };
  return (
    // <div className="listing">
    //   <div className="listing__info">
    //     <h5>{title}</h5>
    //     <div className="listing__price">
    //       <p>
    //         <small>$</small>
    //         <strong>{price}</strong>
    //       </p>
    //       <p>
    //         <small>seller rating: </small>
    //       </p>
    //       <div className="listing__rating">
    //         {Array(rating)
    //           .fill()
    //           .map((rating, index) => (
    //             <p key={uuid()}>️️⭐</p>
    //           ))}
    //       </div>
    //     </div>
    //   </div>
    //   <img className="listing__image" src={image} alt="" />
    //   <button onClick={addToCart} className="listing__button">
    //     Add to Cart
    //   </button>
    // </div>
    <Card sx={{ maxWidth: "100vw", margin: 1 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="150"
          image={image}
          alt={`image of ${title}`}
        />
        <CardContent>
          <Typography
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
            gutterBottom
            variant="h5"
            component="div"
          >
            {title}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            ${price}
          </Typography>
          <Typography
          onClick={() => setToggleDescription(!toggleDescription)}
            sx={toggleDescription &&{
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: "3",
              WebkitBoxOrient: "vertical",
            }}
            variant="body2"
            color="text.secondary"
          >
            {description}
          </Typography>
          <div style={{ marginTop: "5%", display: "flex", justifyContent: "space-around" }}>
            <Button variant="contained" color="success" onClick={addToCart}>
              Add to Cart
            </Button>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default listing;
