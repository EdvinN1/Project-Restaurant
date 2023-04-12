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
import AdminDrinks from "../components/adminDrinks";
import AdminAddItem from "../components/adminAddItem";

export default function () {
    const [selectedCategory, setSelectedCategory] = useState("");
    const [acceptedOrders, setAcceptedOrders] = useState([]);
    const [currentMail, setCurrentMail] = useState("");

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
        "Drinks": <AdminDrinks category="Drinks" />,
        "AddItem": <AdminAddItem category="AddItem" />,
        "DeleteAllOrders": <AdminDeleteAllOrders category="DeleteAllOrders" />,
        "Orders": <AdminOrders category="Orders" />,
        "CurrentOrders": <AdminCurrentOrders category="CurrentOrders" setAcceptedOrders={setAcceptedOrders} acceptedOrders={acceptedOrders} />,
        "Settings": <AdminSettings category="Settings" />
    }

    function handleCategoryClick(categoryName) {
        setSelectedCategory(categoryName);
    }

    //handle ready button, right now deletes the order, and sends alert, maybe do something more fancy later
    function handleReadyClick(inData) {
        //an alert to confirm order is ready
        sendAlert(inData.customerName);
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

    //sends in a name, will alert with name and corresponding mail
    async function sendAlert(inName) {
        try {
          const response = await fetch(`http://localhost:3000/api/accounts/${inName}`);
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const data = await response.json();
          alert("mail has been sent to: " + inName + " on: " + data.email);
        } catch (error) {
          console.error(`Error: ${error}`);
          return null;
        }
      }

    return (
        <section className="adminWrapper">
            <div className="adminGridContainer">
                <div className="item1">AdminDashboard
                    <ul>
                        <li><button className="adminBtn" onClick={() => handleCategoryClick("Users")}>Users</button></li><br></br>
                        <li><button className="adminBtn" onClick={() => handleCategoryClick("Starters")}>Starters</button></li>
                        <li><button className="adminBtn" onClick={() => handleCategoryClick("Entrée")}>Entrée</button></li>
                        <li><button className="adminBtn" onClick={() => handleCategoryClick("Desserts")}>Desserts</button></li>
                        <li><button className="adminBtn" onClick={() => handleCategoryClick("Drinks")}>Drinks</button></li>
                        <li><button className="adminBtn" onClick={() => handleCategoryClick("AddItem")}>Add item</button></li><br></br>
                        <li><button className="adminBtn" onClick={() => handleCategoryClick("DeleteAllOrders")}>DeleteAllOrders</button></li>
                        <li><button className="adminBtn" onClick={() => handleCategoryClick("CurrentOrders")}>currentOrders</button></li><br></br>
                        {/* <li><button className="adminBtn" onClick={() => handleCategoryClick("Settings")}>Settings</button></li> */} {/* <-----maybe should have  */}
                    </ul>
                </div>
                <div className="item2">
                    {categoryComponents[selectedCategory]}
                </div>
                <div className="item3"> Accepted Orders
                    {acceptedOrders.filter(order => order.accepted).map(order => (
                        <div>
                            <p>orderID: {order.orderID}</p>
                            <p>restaurantID: {order.restaurantID}</p>
                            <p>orderDate: {order.orderDate}</p>
                            <p>accepted: {order.accepted ? 'true' : 'false'}</p>
                            <ul>
                                {order.items.map(item => (
                                    <p>{item.itemName} X {item.quantity}</p>
                                ))}
                            </ul>
                            <button className="adminBtn" onClick={() => handleReadyClick(order)}>Ready</button><br></br><br></br>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}