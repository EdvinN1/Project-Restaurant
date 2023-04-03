import {useRef} from "react";
import "../styling/navbar.css"

export default function () {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle(
            "responsive_nav"
        );
    };

    return (
        <header className={"navbar-header"}>
            <h3>KYOTO HUT</h3>
            <nav className={"navbar-nav"} ref={navRef}>
                <a href="/#">Home</a>
                <a href="/#">Menu</a>
                <a href="/#">Contact</a>
                <a href="/#">About us</a>
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
