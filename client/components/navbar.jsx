import { useRef } from "react";
import "../styling/navbar.css"
export default function() {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle(
            "responsive_nav"
        );
    };

    return (
        <header>
            <h3>LOGO</h3>
            <nav ref={navRef}>
                <a href="/#">Home</a>
                <a href="/#">Menu</a>
                <a href="/#">Contact</a>
                <a href="/#">About us</a>
                <button
                    className="nav-btn nav-close-btn"
                    onClick={showNavbar}>
                </button>
            </nav>
            <button

                className="nav-btn"
                onClick={showNavbar}>
            </button>
        </header>
    );
}
