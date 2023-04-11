import { useEffect, useState } from "react";

export default function () {
    const [users, setUsers] = useState([])

    //get all accounts
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

async function handleSetAdminClick(inData){
    const response = await fetch('http://localhost:3000/api/accounts', {
        method: 'PATCH',
        body: JSON.stringify(inData),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    if (response.ok) {
        const updatedUser = await response.json();
        const updatedUsers = users.map(u => {
            if (u._id === updatedUser._id) {
                return updatedUser;
            } else {
                return u;
            }
        });
        setUsers(updatedUsers);
    }
}

    return (
        <div>
            <h4>Users</h4>
            {users.map(user => (
                <div>
                    <p>name: {user.name}</p>
                    <p>email: {user.email}</p>
                    <p>admin: {user.admin ? 'true' : 'false'}</p>
                    <button className="adminBtn" onClick={() => handleDeleteClick(user)}>delete</button>
                    <button className="adminBtn" onClick={() => handleSetAdminClick(user)}>toggle admin</button>
                    <br></br>
                </div>
            ))}
        </div>
    )
}