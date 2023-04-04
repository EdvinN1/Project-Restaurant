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
    const [acceptedOrders, setAcceptedOrders] = useState([]);

    const categoryComponents = {
        "Users": <AdminUsers category="Users" />,
        "Starters": <AdminStarters category="Starters" />,
        "Entrée": <AdminEntree category="Entrée" />,
        "Desserts": <AdminDesserts category="Desserts" />,
        "Orders": <AdminOrders category="Orders" />,
        "Settings": <AdminSettings category="Settings" updateAcceptedOrders={updateAcceptedOrders} acceptedOrders={acceptedOrders}/>
    }

    function updateAcceptedOrders(order) {
        setAcceptedOrders(prevAcceptedOrders => [...prevAcceptedOrders, order]);
      }

    function handleCategoryClick(categoryName) {
        setSelectedCategory(categoryName);
      }

      function handleReadyClick(inData){
        console.log("delete");
        fetch(`http://localhost:3000/api/admin/orders?orderID=${inData}`, {
            method: 'DELETE'
        })
        //to update the state and filter out inDate
        .then(response => {
            if(response.ok) {
                setAcceptedOrders(acceptedOrders.filter(acceptedOrders => acceptedOrders.orderID !== inData))
            } else {
                console.error('Response not ok')
            }
        })
        .catch(error => console.error(error));
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
                {acceptedOrders.map(order => (
                <div>
                {/* {console.log("orderID: " + order.orderID)} */}
                    <p>orderID: {order.orderID}</p>
                    <p>restaurantID: {order.restaurantID}</p>
                    <p>orderDate: {order.orderDate}</p>
                    <button className="adminBtn" onClick={() => handleReadyClick(order.orderID)}>Ready</button>
                    </div>
                ))}
                </div>
            </div>
        </section>
    )
}