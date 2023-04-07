import "../styling/adminsection.css"
import { useState, useEffect } from "react";
import AdminUsers from "../components/adminUsers";
import AdminStarters from "../components/adminStarters";
import AdminEntree from "../components/adminEntree";
import AdminDesserts from "../components/adminDesserts";
import AdminOrders from "../components/adminOrders";
import AdminSettings from "../components/adminSettings";
import AdminDeleteAllOrders from "../components/adminDeleteAllOrders";
import AdminCurrentOrders from "../components/adminCurrentOrders";

export default function () {
    const [selectedCategory, setSelectedCategory] = useState("");
    const [acceptedOrders, setAcceptedOrders] = useState([]);

    //get all accepted orders
    useEffect(() => {
        fetch('http://localhost:3000/api/orders')
            .then(response => response.json())
            .then(data => { setAcceptedOrders(data); })
            .catch(error => console.error(error))
    }, []);

    //all the components
    const categoryComponents = {
        "Users": <AdminUsers category="Users" />,
        "Starters": <AdminStarters category="Starters" />,
        "Entrée": <AdminEntree category="Entrée" />,
        "Desserts": <AdminDesserts category="Desserts" />,
        "DeleteAllOrders": <AdminDeleteAllOrders category="DeleteAllOrders" />,
        "Orders": <AdminOrders category="Orders" />,
        "CurrentOrders": <AdminCurrentOrders category="CurrentOrders" setAcceptedOrders={setAcceptedOrders} acceptedOrders={acceptedOrders} />,
        "Settings": <AdminSettings category="Settings" />
    }

    function handleCategoryClick(categoryName) {
        setSelectedCategory(categoryName);
    }

    //handle ready button, right now just deletes the order, maybe change it later
    function handleReadyClick(inData) {
        console.log("delete");
        fetch(`http://localhost:3000/api/orders/${inData._id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            //to update the state and filter out inDate
            .then(response => {
                if (response.ok) {
                    setAcceptedOrders(acceptedOrders.filter(acceptedOrder => acceptedOrder._id !== inData._id))
                } else {
                    console.error('Response not ok')
                }
            })
            .catch(error => console.error(error));
    }

    return (
        <section className="adminWrapper">
            <div className="adminGridContainer">
                <div className="item1">AdminDashboard
                    <ul>
                        <li><button className="adminBtn" onClick={() => handleCategoryClick("Users")}>Users</button></li><br></br>
                        <li><button className="adminBtn" onClick={() => handleCategoryClick("Starters")}>Starters</button></li>
                        <li><button className="adminBtn" onClick={() => handleCategoryClick("Entrée")}>Entrée</button></li>
                        <li><button className="adminBtn" onClick={() => handleCategoryClick("Desserts")}>Desserts</button></li><br></br>
                        <li><button className="adminBtn" onClick={() => handleCategoryClick("DeleteAllOrders")}>DeleteAllOrders</button></li>
                        <li><button className="adminBtn" onClick={() => handleCategoryClick("Orders")}>generateOrders</button></li>
                        <li><button className="adminBtn" onClick={() => handleCategoryClick("CurrentOrders")}>currentOrders</button></li><br></br>
                        <li><button className="adminBtn" onClick={() => handleCategoryClick("Settings")}>Settings</button></li>
                    </ul>
                </div>
                <div className="item2">
                    {categoryComponents[selectedCategory]}
                </div>
                <div className="item3">
                    {acceptedOrders.filter(order => order.accepted).map(order => (
                        <div>
                            <p>orderID: {order.orderID}</p>
                            <p>restaurantID: {order.restaurantID}</p>
                            <p>orderDate: {order.orderDate}</p>
                            <p>accepted: {order.accepted ? 'true' : 'false'}</p>
                            <ul>
                                {order.itemNames.map(item => (
                                    <p>{item}</p>
                                ))}
                            </ul>
                            <button className="adminBtn" onClick={() => handleReadyClick(order)}>Ready</button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}