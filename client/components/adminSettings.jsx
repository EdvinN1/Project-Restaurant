import { useEffect, useState } from "react";

export default function(){
const [orders, setOrders] = useState([]);

useEffect(() => {
    fetch('http://localhost:3000/orders')
        .then(response => response.json())
        .then(data => setOrders(data))
        .catch(error => console.error(error))
}, []);

    return (
        <div>
            <h4>current orders</h4>
            {orders.map(order => (
                <div key={order.orderId}>
                <p>orderID: {order.restaurantID}</p>
                <p>restaurantID: {order.orderDate}</p>
                <br />
                </div>
            ))}
        </div>
    )
}