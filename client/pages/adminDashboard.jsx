import CategoryFromDatabase from "../components/categoryFromDatabase"
import "../styling/adminsection.css"
import { useState } from "react";


export default function(){
    const [category, setCategory] = useState("");

    function handleCategoryClick(categoryName) {
        setCategory(categoryName);
      }

    return(
        <section className="adminWrapper">
            <div className="adminGridContainer">
                <div className="item1">AdminDashboard
                    <ul>
                        <li><button className="adminBtn" onClick={() => handleCategoryClick("Users")}>Users</button></li>
                        <li><button className="adminBtn" onClick={() => handleCategoryClick("Starters")}>Starters</button></li>
                        <li><button className="adminBtn" onClick={() => handleCategoryClick("Entrée")}>Entrée</button></li>
                        <li><button className="adminBtn" onClick={() => handleCategoryClick("Desserts")}>Desserts</button></li>
                        <li><button className="adminBtn" onClick={() => handleCategoryClick("Settings")}>Settings</button></li>
                    </ul>
                </div>
                <div className="item2">
                <CategoryFromDatabase category={category} />
                </div>
                <div className="item3">Display more things?</div>
            </div>
        </section>
    )
}