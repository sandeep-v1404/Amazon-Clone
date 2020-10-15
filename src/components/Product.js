import React from "react";
import "./Product.css";
function Product({ id, title, price, rating, image }) {
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
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
      <button>Add to Basket</button>
    </div>
  );
}

export default Product;
