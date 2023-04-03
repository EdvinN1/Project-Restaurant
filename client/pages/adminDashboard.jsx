import CategoryFromDatabase from "../components/categoryFromDatabase"
import OrdersFromDatabase from "../components/ordersFromDatabase";
import "../styling/adminsection.css"
import { useState } from "react";


export default function(){
    const [category, setCategory] = useState("");
    const [order, setOrder] = useState("");

    function handleCategoryClick(categoryName) {
        setCategory(categoryName);
      }

    function handleOrderClick(orderName) {
        setOrder(orderName);
      }

    return(
        <section className="adminWrapper">
            <div className="adminGridContainer">
                <div className="item1">AdminDashboard
                    <ul>
                        <li><button className="adminBtn" onClick={() => handleCategoryClick("Users")}>Users</button></li>
                        <li><button className="adminBtn" onClick={() => handleCategoryClick("Starters")}>Starters</button></li>
                        <li><button className="adminBtn" onClick={() => handleCategoryClick("Entrée")}>Entrée</button></li>
                        <li><button className="adminBtn" onClick={() => handleCategoryClick("Desserts")}>Desserts</button></li>
                        <li><button className="adminBtn" onClick={() => handleOrderClick("Orders")}>Orders</button></li>
                        <li><button className="adminBtn" onClick={() => handleCategoryClick("Settings")}>Settings</button></li>
                    </ul>
                </div>
                <div className="item2">
                <CategoryFromDatabase category={category} />
                </div>
                <div className="item3">
                <OrdersFromDatabase order={order}/>
                </div>
            </div>
        </section>
    )
}