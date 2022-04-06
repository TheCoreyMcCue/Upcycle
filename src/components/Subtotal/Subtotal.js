import React from "react";
import { Button } from "@mui/material";
import CurrencyFormat from "react-currency-format";
import "./Subtotal.css";
import { useStateValue } from "../../State/StateProvider";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const Subtotal = () => {
  const [{ cart }] = useStateValue();
  const handleCartTotal = (cart) => {
    let total = 0;
    // eslint-disable-next-line array-callback-return
    cart.map((item) => {
      total += item.price;
    });
    return total;
  };
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <div>
              Subtotal ({cart?.length} items):{" "}
              <strong>${handleCartTotal(cart)}</strong>
              {cart.map((item) => (
                // <div>
                //   <h3 key={item.id}>{item.title}</h3>
                //   <img className="subtotal__image" src={item.image} alt="" />
                //   <p>${item.price}</p>
                // </div>
                <Card sx={{ maxWidth: "70vw", marginTop: 1, marginBottom: 1 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="150"
                      image={item.image}
                      alt={`image of ${item.title}`}
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
                        {item.title}
                        <DeleteIcon />
                      </Typography>
                      <Typography gutterBottom variant="h6" component="div">
                        ${item.price}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {item.description}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              ))}
            </div>
            {/* <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small> */}
          </>
        )}
        decimalScale={2}
        value={0}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <Button variant="contained" style={{ color: "white" }}>
        Proceed to Checkout
      </Button>
    </div>
  );
};

export default Subtotal;
