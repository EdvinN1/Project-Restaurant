import { useEffect, useState } from "react";

export default function () {

    const [starters, setStarters] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/api/fooditems')
            .then(response => response.json())
            .then(data => { setStarters(data); })
            .catch(error => console.error(error))
    }, []);

function handleEditClick(inItem){

}

function handleChange(){

}

    return (
        <div>
            starters
            {starters.filter(item => item.category === "starters").map(item => (
                <div>
                    <p >name: {item.name}</p>
                    <p>price: </p><p id="edit">{item.price}</p>
                    <p>info: {item.info}</p>
                    <p>category: {item.category}</p>
                    <input type="text" value="hejsan!" onChange={handleChange()} />
                    <button className="adminBtn" onClick={() => handleEditClick(item)}>hello</button>
                    <br></br><br></br>
                    
                </div>
            ))}
        </div>
    )
}