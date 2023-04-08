import { useEffect, useState } from "react";

export default function () {

    const [desserts, setDesserts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/api/fooditems')
            .then(response => response.json())
            .then(data => { setDesserts(data); })
            .catch(error => console.error(error))
    }, []);

    return (
        <div>
            Desserts
            {desserts.filter(item => item.category === "desserts").map(item => (
                <div>
                    <p>name: {item.name}</p>
                    <p>price: {item.price}</p>
                    <p>info: {item.info}</p>
                    <p>category: {item.category}</p>
                    <br></br>
                </div>
            ))}
        </div>
    )
}