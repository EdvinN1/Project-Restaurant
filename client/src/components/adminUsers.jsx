import { useEffect, useState } from "react";

export default function () {
    const [users, setUsers] = useState([])

    //get all orders
    useEffect(() => {
        fetch('http://localhost:3000/api/accounts')
            .then(response => response.json())
            .then(data => setUsers(data))
            .catch(error => console.error(error))
    }, []);

    function handleDeleteClick(inData) {
        console.log("delete");
        fetch('http://localhost:3000/api/accounts', {
            method: 'DELETE',
            body: JSON.stringify(inData),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                if (response.ok) {
                    // Remove the user from the local state
                    setUsers(users.filter(user => user._id !== inData._id))
                } else {
                    console.error('Response not ok')
                }
            })
            .catch(error => console.error(error))
    }

    return (
        <div>
            <h4>Users</h4>
            {users.map(user => (
                <div>
                    <p>name: {user.name}</p>
                    <p>email: {user.email}</p>
                    {/* <p>password: {user.password}</p> */}
                    <button className="adminBtn" onClick={() => handleDeleteClick(user)}>delete</button>
                    <br></br>
                </div>
            ))}
        </div>
    )
}