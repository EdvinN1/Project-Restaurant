import React, { useState } from "react";
import "../styling/shopping-cart.css";
import { useStates } from "react-easier";

export default function ({ items }) {
  const [newItem, setNewItem] = useState("");

  const cart = useStates("cart");
  
  function handleRemoveItem(item) {
   cart.splice(item)
  }
  
  const totalPrice = cart && cart.length > 0 ? cart.reduce((acc, curr) => acc + parseFloat(curr.price), 0) : 0;

  return (
    <section className="shopping-cart-page">
      <section></section>
      <h1 className="shopping-cart__title">Shopping Cart</h1>
      <section className={"shopping-cart-items"}>
        <ul className="shopping-cart__list">
          {cart.map((menuItem) => (
            <li key={menuItem.id} className="shopping-cart__item">
              <p className={"price-per-item"}> {menuItem.name} </p>
              <p className={"price-per-item"}>Price: {menuItem.price} </p>
              <input
                className={"shopping-cart-input"}
                defaultValue={1}
                min={1}
                max={100}
                type={"number"}
              />
              <button
                className={"shopping-cart__button"}
                onClick={() => handleRemoveItem(menuItem)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </section>
      <section className={"checkout-section"}>
        <p className={"total-cost-text"}>Total cost: {totalPrice} SEK</p>
        <button className="shopping-cart__button shopping-cart__button--checkout">
          Checkout
        </button>
      </section>
    </section>
  );
}
