import React from "react";
import { Link } from "react-router-dom";
import "../styling/menuPage.css";
import { meals } from "../src/food.js";

export default function () {
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
            {meals
              .filter((meal) => meal.category === "starters")
              .map((meal) => (
                <li className="menupage-cards" key={meal.id}>
                  <h3 className="menu-orders">{meal.mealName}</h3>
                  <p>{meal.info}</p>
                  <p>Price: {meal.price}</p>
                  <button className="add-to-cart">Add to Cart</button>
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
            {meals
              .filter((meal) => meal.category === "mains")
              .map((meal) => (
                <li className="menupage-cards" key={meal.id}>
                  <h3 className="menu-orders">{meal.mealName}</h3>
                  <p>{meal.info}</p>
                  <p>Price: {meal.price}</p>
                  <button className="add-to-cart">Add to Cart</button>
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
            {meals
              .filter((meal) => meal.category === "desserts")
              .map((meal) => (
                <li className="menupage-cards" key={meal.id}>
                  <h3 className="menu-orders">{meal.mealName}</h3>
                  <p>{meal.info}</p>
                  <p>Price: {meal.price}</p>
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
            {meals
              .filter((meal) => meal.category === "drinks")
              .map((meal) => (
                <li className="menupage-cards" key={meal.id}>
                  <h3 className="menu-orders">{meal.mealName}</h3>
                  <p>{meal.info}</p>
                  <p>Price: {meal.price}</p>
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
