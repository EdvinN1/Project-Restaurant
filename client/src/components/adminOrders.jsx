export default function(){
let number = Math.floor(Math.random() * 100 + 1);
let numberID = Math.floor(Math.random() * 100 + 1);
let numberDate = Math.floor(Math.random() * 31 + 1);
const data ={ orderID: numberID, orderDate: numberDate, restaurantID: number};
fetch('http://localhost:3000/api/admin',{
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
  });

return (
    <div>
        {"orders"}
    </div>
)
}