import { Link } from "react-router-dom"
import "../styling/menuPage.css"
export default function () {
    return (
        <section>
            <header>
		<h1>MENU</h1>
	</header>
	<nav>
		<ul>
			<li><Link to = {"/starters"}>Starters</Link></li>
			<li><Link to={"/mains"}>Mains</Link></li>
			<li><Link to={"/desserts"}>Desserts</Link></li>
      <li><Link to={"/drinks"}>Drinks</Link></li>
		</ul>
	</nav>
	<main>
		<div id="starters">
			<h2>Starters</h2>
			<ul>
				<li>
					<h3>Nått gott</h3>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, fugit.</p>
					<p>Price: $500</p>
					<button>Add to Cart</button>
				</li>
				<li>
					<h3>Vitlöksbröd</h3>
					<p>Salt som snus</p>
					<p>Price: $7.99</p>
					<button>Add to Cart</button>
				</li>
			</ul>
		</div>
		<div id="mains">
			<h2>Mains</h2>
			<ul>
				<li>
					<h3>Vesuvio rolls</h3>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste beatae optio eveniet provident ipsam vitae quidem officia asperiores obcaecati delectus.</p>
					<p>Price: $12.99</p>
					<button>Add to Cart</button>
				</li>
				<li>
					<h3>kebab sushi special</h3>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, id.</p>
					<p>Price: $14.99</p>
					<button>Add to Cart</button>
				</li>
			</ul>
		</div>
		<div id="desserts">
			<h2>Desserts</h2>
			<ul>
				<li>
					<h3>kladdekaga</h3>
					<p>krämig o go</p>
					<p>Price: $8.99</p>
					<button>Add to Cart</button>
				</li>
				<li>
					<h3>grillchips</h3>
					<p></p>
					<p>Price: $6.99</p>
					<button>Add to Cart</button>
				</li>
			</ul>
		</div>
    <div id="drinks">
			<h2>drinks</h2>
			<ul>
				<li>
					<h3>cola
          </h3>
					<p>krämig o go</p>
					<p>Price: $8.99</p>
					<button>Add to Cart</button>
				</li>
				<li>
					<h3>fanta</h3>
					<p></p>
					<p>Price: $6.99</p>
					<button>Add to Cart</button>
				</li>
			</ul>
		</div>
	</main>
        </section>
    )
}