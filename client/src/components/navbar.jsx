import { useRef, useContext } from "react";
import { useStates } from "react-easier";
import { Link, useNavigate } from "react-router-dom";
import "../styling/navbar.css";
import { GlobalContext } from "../GlobalContext";

export default function Navbar() {
  const navRef = useRef();
  const access = useStates("access");
  const { handleLogin, handleLogout } = useContext(GlobalContext);
  const navigate = useNavigate();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header className={"navbar-header"}>
      <Link to="/">
        <h3>KYOTO HUT</h3>
      </Link>

      <nav className={"navbar-nav"} ref={navRef}>
        <Link className={"link-buttons"} to="/">
          Home
        </Link>
        <Link className={"link-buttons"} to="/Menu">
          Menu
        </Link>
        <Link className={"link-buttons"} to="/contact">
          Contact
        </Link>
        <Link className={"link-buttons"} to="/about-us">
          About us
        </Link>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <i className="material-icons">close</i>
        </button>
      </nav>
      <div className={"shopcart-hmbrgr-icons-wrapper"}>
        {access.loggedIn && (
          <button className={"shopping-cart-button"}>
            <i className="material-icons">shopping_cart</i>
          </button>
        )}
        {!access.loggedIn && (
          <button className={"account-button"} onClick={handleLogin}>
            Login
          </button>
        )}
        {access.loggedIn && (
          <button className={"account-button"} onClick={handleLogout}>
            Logout
          </button>
        )}
        <button className="nav-btn" onClick={showNavbar}>
          <i className="material-icons hamburger-menu">menu</i>
        </button>
      </div>
    </header>
  );
}