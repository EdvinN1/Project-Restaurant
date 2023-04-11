import { useEffect, useState } from "react";

export default function () {
    const [starters, setStarters] = useState([]);


    useEffect(() => {
        fetch('http://localhost:3000/api/fooditems')
            .then(response => response.json())
            .then(data => { setStarters(data); })
            .catch(error => console.error(error))
    }, []);

return (
    <div>
        starters
        {starters.filter(item => item.category === "starters").map(item => (
            <div>
                <p >name: {item.name}</p>
                <p>price: {item.price}</p>
                <p>info: {item.info}</p>
                <p>category: {item.category}</p>
                <br></br>
            </div>
        ))}
    </div>
)
}