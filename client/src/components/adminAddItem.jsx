import { useState } from "react";

export default function () {
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }));
    }

    const handleSubmit = () => {
        fetch('http://localhost:3000/api/fooditems', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(inputs),
        })
    }

    return (
        <div>
            <div>
                <form className="input-container" onSubmit={handleSubmit}><br></br>
                    <label>name: </label>
                    <input
                        type="text"
                        name="name"

                        value={inputs.name || ""}
                        onChange={handleChange}
                    /><br></br>
                    <label>price: </label>
                    <input
                        type="text"
                        name="price"
                        value={inputs.price || ""}
                        onChange={handleChange}
                    /><br></br>
                    <label>info: </label>
                    <input
                        type="text"
                        name="info"
                        value={inputs.info || ""}
                        onChange={handleChange}
                    /><br></br>
                    <label>category: </label>
                    <select name="category" value={inputs.category || ""} onChange={handleChange}>
                        <option value="">Select a category</option>
                        <option value="starters">starter</option>
                        <option value="mains">Entrée</option>
                        <option value="desserts">dessert</option>
                        <option value="drinks">drink</option>
                    </select>
                    <br></br>
                    <label>url:</label>
                    <input
                        type="text"
                        name="picture"
                        value={inputs.picture || ""}
                        onChange={handleChange}
                    /><br></br>
                    <input className="adminBtn" type="submit" value="Submit" />
                </form>
            </div>
        </div>
    )
}