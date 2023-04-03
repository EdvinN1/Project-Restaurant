import {useRef} from "react";
import { Link } from "react-router-dom";
import "../styling/navbar.css"

export default function () {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle(
            "responsive_nav"
        );
    };

    return (
        <header>
            <h3>KYOTO HUT</h3>
            <nav ref={navRef}>
                <Link to="/">Home</Link>
                <Link to="/" >Menu</Link>
                <Link to="/contact" >Contact</Link>
                <Link to="/about-us" >About us</Link>
                <button

                    className="nav-btn nav-close-btn"
                    onClick={showNavbar}>
                    <i className="material-icons">close</i>

                </button>
            </nav>
            <div className={"shopcart-hmbrgr-icons-wrapper"}>
            <button className={"shopping-cart-button"}>
                <i className="material-icons">shopping_cart</i>
            </button>
            <button
                className="nav-btn"
                onClick={showNavbar}>
                <i className="material-icons hamburger-menu">menu</i>
            </button>
            </div>
        </header>
    )
        ;
}