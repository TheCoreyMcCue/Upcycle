import React from "react";
import { Button } from "@mui/material";
import CurrencyFormat from "react-currency-format";
import "./Subtotal.css";

const Subtotal = () => {
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({0} items): <strong>{`${0}`}</strong>
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
