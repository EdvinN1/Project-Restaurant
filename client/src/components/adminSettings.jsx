import { useEffect, useState } from "react";

export default function(){
const [orders, setOrders] = useState([]);

useEffect(() => {
    fetch('http://localhost:3000/api/admin')
        .then(response => response.json())
        .then(data => setOrders(data))
        .catch(error => console.error(error))
}, []);

function handleDeclineClick(inDate){
    console.log("delete");
    fetch(`http://localhost:3000/api/admin/orders?orderID=${inDate}`, {
        method: 'DELETE'
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
/*     fetch('http://localhost:3000/api/admin', {
        method: 'DELETE'
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error)); */
}

    return (
        <div>
            <h4>current orders</h4>
            {orders.map(order => (
                <div>
                    <p>orderID: {order.orderID}</p>
                    <p>restaurantID: {order.restaurantID}</p>
                    <p>orderDate: {order.orderDate}</p>
                    <button className="adminBtn">accept</button>
                    <button className="adminBtn" onClick={() => handleDeclineClick(order.orderID)}>decline</button>
                </div>
            ))}
        </div>
    )
}