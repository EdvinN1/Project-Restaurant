import { useEffect, useState } from "react";

export default function(props){
const [orders, setOrders] = useState([]);

//get all orders
useEffect(() => {
    fetch('http://localhost:3000/api/admin')
        .then(response => response.json())
        .then(data => {
            const newOrders = data.filter(order => !props.acceptedOrders.some(acceptedOrder => acceptedOrder._id === order._id));
            setOrders(newOrders)
        })
        .catch(error => console.error(error))
}, []);

//accept button action
function handleAcceptClick(inData){
    // find the index of the item with the matching ID
    const index = orders.findIndex(item => item._id === inData._id);
    if (index >= 0) {
      // Remove the item from the source list using splice() and save it in removedItem
      console.log("orders.length before: " + orders.length);
      const [removedItem] = orders.splice(index, 1);
      console.log("orders.length after: " + orders.length);
/*         console.log("removedItemid: " + removedItem.orderID);
        for(let i=0; i<orders.length; i++){
            console.log("ordersID" + orders[i].orderID);
        } */
      //use function updateAcceptedOrders, send in the item that was removed
      props.updateAcceptedOrders(removedItem);
    
      // Update the source list with the modified array, not sure if this is needed, keep for now
      setOrders([...orders]);
    }
  };

  //delete button action
function handleDeclineClick(inData){
    console.log("delete");
fetch('http://localhost:3000/api/admin/orders', {
  method: 'DELETE',
  body: JSON.stringify(inData),
  headers: {
    'Content-Type': 'application/json'
  }
})
.then(response => {
  if(response.ok) {
    // Remove the order from the local state
    setOrders(orders.filter(order => order._id !== inData._id))
  } else {
    console.error('Response not ok')
  }
})
.catch(error => console.error(error))
}

  //delete button action
/* function handleDeclineClick(inData){
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
} */
    return (
        <div>
            <h4>current orders</h4>
                {orders.map(order => (
                    <div>
                        <p>orderID: {order.orderID}</p>
                        <p>restaurantID: {order.restaurantID}</p>
                        <p>orderDate: {order.orderDate}</p>
                        <button className="adminBtn" onClick={() => handleAcceptClick(order)}>accept</button>
                        <button className="adminBtn" onClick={() => handleDeclineClick(order)}>decline</button>
                        {/* <button className="adminBtn" onClick={() => handleDeclineClick(order.orderID)}>decline</button> */}
                    </div>
                ))}
        </div>
    )
}