import { useEffect, useState } from "react"

export default function () {

    const [entrees, setEntrees] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/api/fooditems')
            .then(response => response.json())
            .then(data => { setEntrees(data); })
            .catch(error => console.error(error))
    }, []);

    return (
        <div>
            Entrée
            {entrees.filter(item => item.category === "mains").map(item => (
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