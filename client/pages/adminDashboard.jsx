import "../styling/adminsection.css"
import { useState } from "react";
import AdminUsers from "../components/adminUsers";
import AdminStarters from "../components/adminStarters";
import AdminEntree from "../components/adminEntree";
import AdminDesserts from "../components/adminDesserts";
import AdminOrders from "../components/adminOrders";
import AdminSettings from "../components/adminSettings";


export default function(){
    const [selectedCategory, setSelectedCategory] = useState("");

    const categoryComponents = {
        "Users": <AdminUsers category="Users" />,
        "Starters": <AdminStarters category="Starters" />,
        "Entrée": <AdminEntree category="Entrée" />,
        "Desserts": <AdminDesserts category="Desserts" />,
        "Orders": <AdminOrders category="Orders" />,
        "Settings": <AdminSettings category="Settings"/>
    }

    function handleCategoryClick(categoryName) {
        setSelectedCategory(categoryName);
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
                        <li><button className="adminBtn" onClick={() => handleCategoryClick("Orders")}>Orders</button></li>
                        <li><button className="adminBtn" onClick={() => handleCategoryClick("Settings")}>current orders</button></li>
                    </ul>
                </div>
                <div className="item2">
                {categoryComponents[selectedCategory]}
                </div>
                <div className="item3">
                Some info here
                </div>
            </div>
        </section>
    )
}