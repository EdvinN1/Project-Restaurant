import "../styling/home.css";
import { GlobalContext } from "../GlobalContext";
import { useContext } from "react";
import { Link } from "react-router-dom"

export default function () {
  const { handleLogin, access } = useContext(GlobalContext);

  return (
    <section className="wrapper">
      <h1>KYOTO HUT</h1>
      <p className="paragraph">
        We mix the best of two worlds, pizza and sushi!
      </p>
      <div className="imgContainer">
        <img className="slide1" src="../img/picture1.jpg"></img>
        <img className="slide2" src="../img/picture2.jpg"></img>
        <img className="slide3" src="../img/picture3.jpg"></img>
        <img className="slide4" src="../img/picture4.jpg"></img>
        <img className="slide5" src="../img/picture5.jpg"></img>
        {!access.loggedIn && (
          <button className="btn" onClick={handleLogin}>
            Login
          </button>
        )}
        {access.loggedIn && 
        <Link to="/menu"><button className="btn">Order here!</button></Link>
        }
      </div>
    </section>
  );
}
