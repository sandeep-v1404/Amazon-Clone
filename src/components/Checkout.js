import React from "react";
import { Link } from "react-router-dom";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "../StateProvider";
import "./Checkout.css";
import Subtotal from "./Subtotal";
function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <Link to="/">
          <img
            src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB23492668_.jpg"
            className="checkout__ad"
            alt="checkout__add"
          />
        </Link>
        {basket.length === 0 ? (
          <div>
            <h3>Hello {!user ? "Guest" : user.email}</h3>
            <h2>Your Shopping Basket is Empty</h2>
            <p>
              You have no items in your basket. To buy one Sign In/Register ,
              then click "Add to Basket" next to the item.
            </p>
          </div>
        ) : (
          <div>
            <h3>Hello {!user ? "Guest" : user.email}</h3>
            <h2 className="checkout__title">Your Shopping Basket</h2>
            {basket?.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
