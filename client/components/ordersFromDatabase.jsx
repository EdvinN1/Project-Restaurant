export default function({order}){


fetch('http://localhost:3000/orders')
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error(error))

/* const data ={ orderId: "123", orderDate: "230403", restaurantID: 1};
fetch('http://localhost:3000/orders',{
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
})
.then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    console.log('Order created successfully');
  })
  .catch(error => {
    console.error('There was a problem creating the restaurant:', error);
  }); */



/*   fetch('http://localhost:3000/orders', {
    method: 'DELETE'
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error(error)); */



return (
    <div>
        {order}
    </div>
)
}