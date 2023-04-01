import "../styling/adminsection.css"

export default function(){
    return(
        <section className="adminWrapper">
            <div className="adminGridContainer">
                <div className="item1">AdminDashboard
                    <ul>
                        <li><a href="#">Users</a></li>
                        <li><a href="#">Starters</a></li>
                        <li><a href="#">Entrée</a></li>
                        <li><a href="#">Desserts</a></li>
                    </ul>
                </div>
                <div className="item2">Display things from database</div>
                <div className="item3">Display more things?</div>
            </div>
        </section>
    )
}

