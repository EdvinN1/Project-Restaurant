import React, { useEffect, useState } from "react";
import "../styling/shopping-cart.css";
import { useStates } from "react-easier";
import { useNavigate } from "react-router-dom";

export default function ({ items }) {
  const cartMan = useStates("cartMan")

  const navigate = useNavigate()
  const access = useStates("access")

  if (!access.loggedIn) {
    navigate('/');
    return null;
  }

  const [users, setUsers] = useState([]);

  //need this part to compare with user
  useEffect(() => {
    fetch('http://localhost:3000/api/accounts')
        .then(response => response.json())
        .then(data => setUsers(data))
        .catch(error => console.error(error))
}, []);

  //the total price, using a super formula to calculate
  const [totPrice, setTotPrice] = useState(calculateTotalPrice(cartMan));

  //superformula for calculating a new totalprice
  function calculateTotalPrice(inArray){
    return (inArray && inArray.length > 0 ? inArray.reduce((acc, curr) => acc + parseFloat(curr.item.price) * curr.quantity, 0) : 0);
  }

  //removes item from index found
  function handleRemoveItem(item) {
    //find the index
    const index = cartMan.findIndex((cartItem) => cartItem.item._id === item._id);
    //have to remove the cost of the last item, so call this function
    handleQuantityChange(item, 0);
    const newCart = [...cartMan];
    cartMan.splice(index, 1);
    cartMan;
  }

  function handleCheckoutClick() {
    //do nothing if the cart is empty
    if (cartMan.length === 0) {
      console.log("cart is empty!");
      alert("cart is empty, go buy something!")
      return;
    }
    //post the data to orders, function getNameAndId will return an object with name and quantity
    //also need the logged in user from the session
    console.log("customername: " + sessionStorage.getItem("name"));
    const data = { items: getNameAndQuantity(), customerName: sessionStorage.getItem("name") };
    fetch('http://localhost:3000/api/orders', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
 /*    console.log("order has been sent!") */
    getUser();
  }

  function getUser(){
   //empty the shopping cart
   cartMan.splice(0, cartMan.length);
   setTotPrice(0);
   //show popup message
   alert("Your order has been sent!");
 }

  //get names of items and quantity
  function getNameAndQuantity() {
    const returnArray = [];
    for (let i = 0; i < cartMan.length; i++) {
      let data = { itemName: cartMan[i].item.name, quantity: cartMan[i].quantity };
      returnArray.push(data);
    }
    return returnArray;
  }

  //if quantities change, call this one
  function handleQuantityChange(item, newQuantity) {
    //find the index of the item in the cartMan array
    const index = cartMan.findIndex((cartItem) => cartItem.item._id === item._id);
    //set the new quantity for the item at index
    cartMan[index].quantity = newQuantity;
    //set a new total price
    setTotPrice(calculateTotalPrice(cartMan));
  };

  return (
    <section className="shopping-cart-page">
      <section></section>
      <h1 className="shopping-cart__title">Shopping Cart</h1>
      <section className={"shopping-cart-items"}>
        <ul className="shopping-cart__list">
          {cartMan.map((menuItem) => (
            <li className="shopping-cart__item">
            <img className="shopping-cart-img" src={menuItem.item.picture}></img>
              <p className={"item-name"}> {menuItem.item.name} </p>
              <p className={"price-per-item"}>Price: {menuItem.item.price} </p>
              <input
                className={"shopping-cart-input"}
                defaultValue={menuItem.quantity}
                min={1}
                max={100}
                type={"number"}
                inputMode={"numeric"}
                onChange={(event) => handleQuantityChange(menuItem.item, event.target.value)}
              />
              <button
                className={"shopping-cart__button"}
                onClick={() => handleRemoveItem(menuItem.item)}
              >
              <i className="material-icons">close</i>
              </button>
            </li>
          ))}
        </ul>
      </section>
      <section className={"checkout-section"}>
        <p className={"total-cost-text"}>Total cost: {totPrice} SEK</p>
        <button className="shopping-cart__button--checkout" onClick={() => handleCheckoutClick()}>
          Checkout
        </button>
      </section>
    </section>
  );
}