import { useEffect, useState } from "react";

export default function(){
    const [users, setUsers] = useState([])

    //get all orders
    useEffect(() => {
        fetch('http://localhost:3000/api/accounts')
            .then(response => response.json())
            .then(data => setUsers(data))
            .catch(error => console.error(error))
    }, []);

    return (
        <div>
            <h4>Users</h4>
                {users.map(user =>(
                <div>
                    <p>name: {user.name}</p>
                    <p>email: {user.email}</p>
                    <p>password: {user.password}</p>
                    <br></br>
                </div>
                ))}
        </div>
    )
}