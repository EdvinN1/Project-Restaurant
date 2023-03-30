import "../styling/footer.css";
import { Link } from "react-router-dom";

export default function () {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="footer-col">
            <h4>Kyoto Hut</h4>
            <p className="text-container">Your go-to restaurant for the best sushi pizza in town!
            Our unique fusion of Japanese and Italian cuisine creates a burst of
            flavor and texture in every bite. With fresh, high-quality
            ingredients and a variety of options to choose from, you're sure to
            satisfy your cravings at Kyoto Hut.
            </p>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <ul>
              <li><a href="#"></a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Quick menu</h4>
            <ul>
              <li><Link to={"/"}>Home</Link></li>
              <li><Link to={"/"}>Menu</Link></li>
              <li><Link to={"/"}>About us</Link></li>
              <li><Link to={"/"}>Contact</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Follow us!</h4>
                <ul className="social-links">
                    <li className="footer-link"><a href={"https://www.facebook.com/"} target={"_blank"}>Facebook</a></li>
                    <li className="footer-link"><a href={"https://www.instagram.com/"} target={"_blank"}>Instagram</a></li>
                    <li className="footer-link"><a href={"https://twitter.com/"} target={"_blank"}>Twitter</a></li>
                    <li className="footer-link"><a href={"https://www.youtube.com/"} target={"_blank"}>Youtube</a></li>
                </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
