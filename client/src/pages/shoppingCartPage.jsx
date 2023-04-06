import React, { useState } from "react";
import "../styling/shopping-cart.css";
import itemsToCart from "./menuPage";

export default function ({ items }) {
  const [newItem, setNewItem] = useState("");

  return (
    <section className="shopping-cart-page">
      <section></section>
      <h1 className="shopping-cart__title">Shopping Cart</h1>
      <section className={"shopping-cart-items"}>
        <ul className="shopping-cart__list">
          {itemsToCart.map((menuItem) => (
            <li key={index} className="shopping-cart__item">
              {item} <p className={"price-per-item"}>Price: 200$</p>
              <input
                className={"shopping-cart-input"}
                defaultValue={1}
                min={1}
                max={100}
                type={"number"}
              />
              <button
                className={"shopping-cart__button"}
                onClick={() => handleRemoveItem(index)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </section>
      <section className={"checkout-section"}>
        <p className={"total-cost-text"}>Total cost: 0$</p>
        <button className="shopping-cart__button shopping-cart__button--checkout">
          Checkout
        </button>
      </section>
    </section>
  );
}
