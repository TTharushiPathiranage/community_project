import React from "react";
import { useContext } from "react";

const PlaceOrder = () => {
  const {getTotalCartAmount}=useContext(StoreContext)
  return (
    <form className="place-order">
      <div className="place-order-left">
        <p className="tiltle">Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder="First Name"></input>
          <input type="text" placeholder="Last Name"></input>
        </div>
        <input type="email" placeholder="Email Address"></input>
        <input type="text" placeholder="Street"></input>
        <div className="multi-fields">
          <input type="text" placeholder="City"></input>
          <input type="text" placeholder="State"></input>
        </div>
        <div className="multi-fields">
          <input type="text" placeholder="Zip Code"></input>
          <input type="text" placeholder="Country"></input>
        </div>
        <input type="text" placeholder="Phone"></input>

      </div>
      <div className="place-order-right">
      <div className="cart-total">
        <h2>Cart Total</h2>
        <div>
          <div className="cart-total-details">
            <p>Subtotal</p>
            <p>$ {getTotalCartAmount()}</p>

          </div>
          <div className="cart-total-details">
          <p>Delivery Fe</p>
          <p> {2}</p>

          </div>
          <div className="cart-total-details">
            <p>Total</p>
            <p>$ {getTotalCartAmount()+2}</p>
          </div>
        </div>
        <button>PROCEED TO PAYMENT</button>
      </div>

      </div>

    </form>
  )
};

export default PlaceOrder;
