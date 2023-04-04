import { Link } from "react-router-dom"
import "../styling/menuPage.css"
export default function () {
    return (
        <section>
	<nav className="menu-nav">
			<li className="menupage-header-cards"><a href="#starters">Starters</a></li>
			<li className="menupage-header-cards"><a href="#mains">Mains</a></li>
			<li className="menupage-header-cards"><a href="#desserts">Desserts</a></li>
      		<li className="menupage-header-cards"><a href="#drinks">Drinks</a></li>
	</nav>
	<main className="menu-main">
		<div className="menupage-div" id="starters">
			<h2 className="menu-choices">Starters</h2>
			<ul className="menuList">
				<li className="menupage-cards">
					<h3 className="menu-orders">Nått gott</h3>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, fugit.</p>
					<p>Price: $500</p>
					<button className="add-to-cart">Add to Cart</button>
				</li>
				<li className="menupage-cards">
					<h3 className="menu-orders">Vitlöksbröd</h3>
					<p>Salt som snus</p>
					<p>Price: $7.99</p>
					<button className="add-to-cart">Add to Cart</button>
				</li>
			</ul>
		</div>
		<div className="menupage-div" id="mains">
			<h2 className="menu-choices">Mains</h2>
			<ul className="menuList">
				<li className="menupage-cards">
					<h3 className="menu-orders">Vesuvio rolls</h3>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, id.</p>
					<p>Price: $12.99</p>
					<button className="add-to-cart">Add to Cart</button>
				</li>
				<li className="menupage-cards">
					<h3 className="menu-orders">Kebab sushi special</h3>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, id.</p>
					<p>Price: $14.99</p>
					<button className="add-to-cart">Add to Cart</button>
				</li>
			</ul>
		</div>
		<div className="menupage-div" id="desserts">
			<h2 className="menu-choices">Desserts</h2>
			<ul className="menuList">
				<li className="menupage-cards">
					<h3 className="menu-orders">Kladdekaga</h3>
					<p>krämig o go</p>
					<p>Price: $8.99</p>
					<button className="add-to-cart">Add to Cart</button>
				</li>
				<li className="menupage-cards">
					<h3 className="menu-orders">Grillchips</h3>
					<p></p>
					<p>Price: $6.99</p>
					<button className="add-to-cart">Add to Cart</button>
				</li>
			</ul>
		</div>
    <div className="menupage-div" id="drinks">
			<h2 className="menu-choices">Drinks</h2>
			<ul className="menuList">
				<li className="menupage-cards">
					<h3 className="menu-orders">Cola</h3>
					<p>krämig o go</p>
					<p>Price: $8.99</p>
					<button className="add-to-cart">Add to Cart</button>
				</li>
				<li className="menupage-cards">
					<h3 className="menu-orders">BIIIIIIRA</h3>
					<p></p>
					<p>Price: free</p>
					<button className="add-to-cart">Add to Cart</button>
				</li>
			</ul>
		</div>
	</main>
        </section>
    )
}