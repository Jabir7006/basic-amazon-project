import React from "react";
import { Link } from "react-router-dom";

const Cart = ({ cart, totalMoney, shipping }) => {

  const tax = totalMoney % shipping;
  const freshTax = tax.toFixed(2);

  const total = shipping + tax + totalMoney;
  const freshTotal = total.toFixed(2);

  const totalBill = totalMoney.toFixed(2);

  return (
    <div>
      <h5 className="text-center">Order Summary</h5>
      <h6 className="text-center">Items Ordered: {cart.length}</h6>
      <ul style={{ listStyle: "none" }}>
        <li>
          <h6>items : ${totalBill}</h6>
        </li>
        <li>
          <h6>Shipping : ${shipping}</h6>
        </li>
        {total > 0 ? (
          <li>
            <h6>Tax : ${freshTax}</h6>
          </li>
        ) : (
          <h6>Tax : $0</h6>
        )}
        {totalMoney > 0 ? (
          <li>
            <h6>total : ${freshTotal}</h6>
          </li>
        ) : (
          <h6>Total : $0</h6>
        )}
      </ul>
      <button className="btn-style">
         <Link to="/review" style={{textDecoration:"none", color:"black"}}> Order Review </Link>
        </button>
    </div>
  );
};

export default Cart;
