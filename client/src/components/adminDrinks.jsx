import { useEffect, useState } from "react"

export default function () {

    const [drinks, setDrinks] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/api/fooditems')
            .then(response => response.json())
            .then(data => { setDrinks(data); })
            .catch(error => console.error(error))
    }, []);

    return (
        <div>
            Drinks
            {drinks.filter(item => item.category === "drinks").map(item => (
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