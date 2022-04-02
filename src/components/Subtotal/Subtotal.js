import React from "react";
import { Button } from "@mui/material";
import CurrencyFormat from "react-currency-format";
import "./Subtotal.css";
import { useStateValue } from "../../State/StateProvider";

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
            <p>
              Subtotal ({cart.length} items):
              {cart.map((item) => (
                <p key={item.id}>{item.title}</p>
              ))}
              <strong>${handleCartTotal(cart)}</strong>
            </p>
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
