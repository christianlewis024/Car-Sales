import React from "react";
import { useSelector } from "react-redux";

const Total = () => {
  const car = useSelector((state) => state.car);
  const additionalPrice = useSelector((state) => state.additionalPrice);

  return (
    <div className="content">
      <h4>Total Amount: ${car.price + additionalPrice}</h4>
      <a href="javascript:history.go(0)">
        <button>Proceed to Checkout</button>
      </a>
    </div>
  );
};

export default Total;
