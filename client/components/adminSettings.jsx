export default function(){

fetch('http://localhost:3000/orders')
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error(error))

/*   fetch('http://localhost:3000/orders', {
    method: 'DELETE'
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error)); */

    return (
        <div>
            {"settings"}
        </div>
    )
}