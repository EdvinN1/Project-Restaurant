export default function () {
    //delete all orders
    fetch('http://localhost:3000/api/admin', {
        method: 'DELETE'
    })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));
    return (
        <div>
            {"delete all orders"}
        </div>
    )
}