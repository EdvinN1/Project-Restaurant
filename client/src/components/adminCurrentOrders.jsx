import { useEffect, useState } from "react";

export default function (props) {
  const [orders, setOrders] = useState([]);
  const [item, setItem] = useState("");

  //get all incoming orders
  useEffect(() => {
    fetch('http://localhost:3000/api/orders')
      .then(response => response.json())
      .then(data => { setOrders(data); })
      .catch(error => console.error(error))
  }, []);

  //accept button action
  function handleAcceptClick(inData) {
    //find the index of the item with the matching ID
    const index = orders.findIndex(item => item._id === inData._id);
    if (index >= 0) {
      //shallow copy of orders array, or the true value will not be updated in acceptedOrders
      const updatedOrders = [...orders];
      updatedOrders[index].accepted = true;
      setOrders(updatedOrders);
      //Remove the item from the source list using splice() and save it in removedItem
      const [removedItem] = orders.splice(index, 1);
      //send in the item that was removed
      props.setAcceptedOrders(prevAcceptedOrders => [...prevAcceptedOrders, removedItem]);
      //set accepted to true
      fetch(`http://localhost:3000/api/orders/${inData._id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ accepted: true })
      })
    }
  };

  //function for removing inData from database
  function deleteInData(inData) {
    console.log("delete success");
    fetch(`http://localhost:3000/api/orders/${inData._id}`, {
      method: 'DELETE',
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

  function mapItem(inId) {
    fetch(`http://localhost:3000/api/foodItems/${inId}`)
      .then(response => response.json())
      .then(data => {
        console.log("mapitemdata: " + data.name);
        const newItems = [...items, data.name]
        setItem(newItems);
      })
      .catch(error => console.error(error))
  }

  return (
    <div>
      <h4>current orders</h4>
      {orders.filter(order => !order.accepted).map(order => (
        <div>
          <p>orderID: {order.orderID}</p>
          <p>restaurantID: {order.restaurantID}</p>
          <p>orderDate: {order.orderDate}</p>
          <p>accepted: {order.accepted ? 'true' : 'false'}</p>
          <p>items:</p>
          <ul>
            {order.itemNames.map(item => (
              <p>{item}</p>
            ))}
          </ul>
          {/* <p>quantity: {order.quantities}</p> */}
          <button className="adminBtn" onClick={() => handleAcceptClick(order)}>accept</button>
          <button className="adminBtn" onClick={() => handleDeclineClick(order)}>decline</button>
        </div>
      ))}
    </div>
  )
}