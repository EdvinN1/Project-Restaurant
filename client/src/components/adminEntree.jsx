import { useEffect, useState } from "react"

export default function () {
    const [entrees, setEntrees] = useState([]);
    const [checkedItems, setCheckedItems] = useState([]);

    //get all starter items
    useEffect(() => {
        fetch('http://localhost:3000/api/fooditems')
            .then(response => response.json())
            .then(data => { setEntrees(data); })
            .catch(error => console.error(error))
    }, []);

    //find the item
    function handleDeleteClick(inItem) {
        if (checkedItems.includes(inItem._id)) {
            fetch(`http://localhost:3000/api/fooditems/${inItem._id}`, {
                method: 'DELETE',
                body: JSON.stringify(inItem),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(response => {
                    if (response.ok) {
                        // Remove the user from the local state
                        setEntrees(entrees.filter(entree => entree._id !== inItem._id))
                        setCheckedItems(checkedItems.filter(itemId => itemId !== inItem._id))
                    } else {
                        console.error('Response not ok')
                    }
                })
                .catch(error => console.error(error))
        }
    }

    //handle the checkbox, if its checked or not
    const handleCheckboxChange = (event, itemId) => {
        const isChecked = event.target.checked;
        if (isChecked) {
            setCheckedItems([...checkedItems, itemId]);
        } else {
            setCheckedItems(checkedItems.filter(id => id !== itemId));
        }
    };

    return (
        <div>
            Entrée
            {entrees.filter(item => item.category === "mains").map(item => (
                <div>
                    <p>name: {item.name}</p>
                    <p>price: {item.price}</p>
                    <p>info: {item.info}</p>
                    <p>category: {item.category}</p>
                    <label>
                        <input type="checkbox" checked={checkedItems.includes(item._id)} onChange={(e) => handleCheckboxChange(e, item._id)} />
                        Confirm delete
                    </label>
                    <button className="adminBtn" onClick={() => handleDeleteClick(item)}>delete</button>
                    <br></br><br></br>
                </div>
            ))}
        </div>
    )
}