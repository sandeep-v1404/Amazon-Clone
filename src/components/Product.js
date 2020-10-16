import React from "react";
import "./Product.css";
import { useStateValue } from "../StateProvider";
function Product({ id, title, price, rating, image }) {
  const [{ basket }, dispatch] = useStateValue();
  console.log("This is Basket" + basket);
  const addToBasket = () => {
    //dispatch item into data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>₹ </small>
          <strong>{price} /-</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map(() => (
              <span role="img" aria-label="">
                👌
              </span>
            ))}
        </div>
      </div>

      <img className="product__image" src={image} alt="camera" />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
