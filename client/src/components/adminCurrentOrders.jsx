import { useEffect, useState } from "react";

export default function (props) {
  const [orders, setOrders] = useState([]);

  //get all orders
  useEffect(() => {
    fetch('http://localhost:3000/api/admin')
      .then(response => response.json())
      .then(data => setOrders(data))
      .catch(error => console.error(error))
  }, []);

  //accept button action
  function handleAcceptClick(inData) {
    //find the index of the item with the matching ID
    const index = orders.findIndex(item => item._id === inData._id);
    if (index >= 0) {
      //Remove the item from the source list using splice() and save it in removedItem
      const [removedItem] = orders.splice(index, 1);

      //use function updateAcceptedOrders, send in the item that was removed
      props.updateAcceptedOrders(removedItem);

      //delete the order from current order
      deleteInData(inData);
    }
  };

  //function for removing inData from database
  function deleteInData(inData) {
    console.log("delete success");
    fetch('http://localhost:3000/api/admin/orders', {
      method: 'DELETE',
      body: JSON.stringify(inData),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        if (response.ok) {
          // Remove the order from the local state
          setOrders(orders.filter(order => order._id !== inData._id))
          
        } else {
          console.error('Response not ok')
        }
      })
      .catch(error => console.error(error))
  }

  //delete button action
  function handleDeclineClick(inData) {
    deleteInData(inData);
  }

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
        </div>
      ))}
    </div>
  )
}