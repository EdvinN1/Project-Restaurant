import React, { useState } from "react";
import "../styling/shopping-cart.css";
import { useStates } from "react-easier";

export default function ({ items }) {
  const [newItem, setNewItem] = useState("");

  const cart = useStates("cart");
  
  function handleRemoveItem(item) {
   const index = cart.findIndex(cartItem => cartItem._id === item._id);
    cart.splice(index, 1);
  }

  function handleCheckoutClick(){
    //do nothing if the cart is empty
    if(cart.length === 0){
      console.log("cart is empty!");
      return;
    }
    //post the data to orders, function getNameAndId will return an object with name and quantity
    const data = {items: getNameAndQuantity() };
    fetch('http://localhost:3000/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
  }

  //get names of items
  function getNameAndQuantity(){
    const returnArray = [];
    for(let i=0; i<cart.length; i++){
      let data = {itemName: cart[i].name, quantity: 1}; //<------have to fix this one, quantity
      returnArray.push(data);
    }
    return returnArray;
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
        <button className="shopping-cart__button shopping-cart__button--checkout" onClick={() => handleCheckoutClick()}>
          Checkout
        </button>
      </section>
    </section>
  );
}
