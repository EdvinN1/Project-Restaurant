import { useRef, useContext } from "react";
import { Link } from "react-router-dom";
import "../styling/navbar.css";
import { GlobalContext } from "../GlobalContext";

export default function Navbar() {
  const navRef = useRef();
  const { handleLogin, handleLogout, access } = useContext(GlobalContext);

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
        <Link className={"link-buttons"} to="/menu">
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
        {access.admin &&(
          <Link to="/admin-section">
            <button className={"account-button"} >
            AdminDashboard
          </button>
          </Link>
        )
        }
        <button className="nav-btn" onClick={showNavbar}>
          <i className="material-icons hamburger-menu">menu</i>
        </button>
      </div>
    </header>
  );
}