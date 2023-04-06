import React from "react";
import { Link } from "react-router-dom";
import "../styling/menuPage.css";
import { useEffect, useState } from "react";

export default function () {
  const [menuItems, setMenuItems] = useState([]);
  const [itemsToCart, setItemsToCart] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/fooditems")
      .then((response) => response.json())
      .then((data) => setMenuItems(data))
      .catch((error) => console.error(error));
  }, []);

  function handleButtonClick(id) {
    setItemsToCart([...itemsToCart, id]);
  }
  console.log(itemsToCart);
  return (
    <section>
      <nav className="menu-nav">
        <li className="menupage-header-cards">
          <a href="#starters">Starters</a>
        </li>
        <li className="menupage-header-cards">
          <a href="#mains">Mains</a>
        </li>
        <li className="menupage-header-cards">
          <a href="#desserts">Desserts</a>
        </li>
        <li className="menupage-header-cards">
          <a href="#drinks">Drinks</a>
        </li>
      </nav>
      <main className="menu-main">
        <div className="menupage-div" id="starters">
          <h2 className="menu-choices">Starters</h2>
          <ul className="menuList">
            {menuItems
              .filter((menuItem) => menuItem.category === "starters")
              .map((menuItem) => (
                <li className="menupage-cards" key={menuItem.id}>
                  <h3 className="menu-orders">{menuItem.name}</h3>
                  <p>{menuItem.info}</p>
                  <p>Price: {menuItem.price}</p>
                  <button
                    className="add-to-cart"
                    onClick={() => handleButtonClick(menuItem)}
                  >
                    Add to Cart
                  </button>
                  <button className="add-to-cart-copy">
                    <i className="material-icons">add</i>
                  </button>
                </li>
              ))}
          </ul>
        </div>
        <div className="menupage-div" id="mains">
          <h2 className="menu-choices">Mains</h2>
          <ul className="menuList">
            {menuItems
              .filter((menuItem) => menuItem.category === "mains")
              .map((menuItem) => (
                <li className="menupage-cards" key={menuItem.id}>
                  <h3 className="menu-orders">{menuItem.name}</h3>
                  <p>{menuItem.info}</p>
                  <p>Price: {menuItem.price}</p>
                  <button className="add-to-cart"
                  onClick={() => handleButtonClick(menuItem)}>Add to Cart</button>
                  <button className="add-to-cart-copy">
                    <i className="material-icons">add</i>
                  </button>
                </li>
              ))}
          </ul>
        </div>
        <div className="menupage-div" id="desserts">
          <h2 className="menu-choices">Desserts</h2>
          <ul className="menuList">
            {menuItems
              .filter((menuItem) => menuItem.category === "desserts")
              .map((menuItem) => (
                <li className="menupage-cards" key={menuItem.id}>
                  <h3 className="menu-orders">{menuItem.name}</h3>
                  <p>{menuItem.info}</p>
                  <p>Price: {menuItem.price}</p>
                  <button className="add-to-cart">Add to Cart</button>
                  <button className="add-to-cart-copy">
                    <i className="material-icons">add</i>
                  </button>
                </li>
              ))}
          </ul>
        </div>
        <div className="menupage-div" id="drinks">
          <h2 className="menu-choices">Drinks</h2>
          <ul className="menuList">
            {menuItems
              .filter((menuItem) => menuItem.category === "drinks")
              .map((menuItem) => (
                <li className="menupage-cards" key={menuItem.id}>
                  <h3 className="menu-orders">{menuItem.name}</h3>
                  <p>{menuItem.info}</p>
                  <p>Price: {menuItem.price}</p>
                  <button className="add-to-cart">Add to Cart</button>
                  <button className="add-to-cart-copy">
                    <i className="material-icons">add</i>
                  </button>
                </li>
              ))}
          </ul>
        </div>
      </main>
    </section>
  );
}
