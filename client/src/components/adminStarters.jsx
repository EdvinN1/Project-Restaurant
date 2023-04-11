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
    let a = document.getElementById("edit").contentEditable;
    console.log("yes:" + a);
    a = !a;
    document.getElementById("edit").contentEditable = a;
}

    return (
        <div>
            starters
            {starters.filter(item => item.category === "starters").map(item => (
                <div>
                    <p >name: {item.name}</p>
                    <p>price: </p><p id="edit" contentEditable="true">{item.price}</p>
                    <p>info: {item.info}</p>
                    <p>category: {item.category}</p>
                    <button className="adminBtn" onClick={() => handleEditClick(item)}>hello</button>
                    <br></br><br></br>
                    
                </div>
            ))}
        </div>
    )
}