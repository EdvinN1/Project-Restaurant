import { useEffect, useState } from "react";

export default function(props){
const [orders, setOrders] = useState([]);
/* const [acceptedOrders, setAcceptedOrders] = useState(props.acceptedOrders); */
/* const [aOrders, setAOrders] = useState([]); */

//get all orders
useEffect(() => {
    fetch('http://localhost:3000/api/admin')
        .then(response => response.json())
        .then(data => setOrders(data))
        .catch(error => console.error(error))
}, []);

function handleAcceptClick(inData){
    // Find the index of the item with the matching ID
    const index = orders.findIndex(item => item.orderID === inData);
    
    if (index >= 0) {
      // Remove the item from the source list using splice()
      const [removedItem] = orders.splice(index, 1);
      console.log("id: " + removedItem.orderID);
      /* const updatedAcceptedOrders = [...props.acceptedOrders, removedItem]; */
      props.updateAcceptedOrders(removedItem);
      /* console.log("orderID: " + props.acceptedOrders[0].orderID); */
      // Add the removed item to the target list using concat()
     /*  props.updateAcceptedOrders([...props.acceptedOrders, removedItem]); */
        
      // Update the source list with the modified array
      setOrders([...orders]);
    }
  };

function handleDeclineClick(inData){
    console.log("delete");
    fetch(`http://localhost:3000/api/admin/orders?orderID=${inData}`, {
        method: 'DELETE'
    })
    //to update the state and filter out inDate
    .then(response => {
        if(response.ok) {
            setOrders(orders.filter(order => order.orderID !== inData))
        } else {
            console.error('Response not ok')
        }
    })
    .catch(error => console.error(error));
}
    return (
        <div>
            <h4>current orders</h4>
            <div>
                {orders.map(order => (
                    <div>
                        <p>orderID: {order.orderID}</p>
                        <p>restaurantID: {order.restaurantID}</p>
                        <p>orderDate: {order.orderDate}</p>
                        <button className="adminBtn" onClick={() => handleAcceptClick(order.orderID)}>accept</button>
                        <button className="adminBtn" onClick={() => handleDeclineClick(order.orderID)}>decline</button>
                    </div>
                ))}
            </div>
            <div>
                testar hejsan
            </div>
        </div>
    )
}