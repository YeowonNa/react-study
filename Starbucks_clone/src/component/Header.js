import Navbar_Coffe from "./Navbar_Coffe";
import "./Header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="center">
        <h1>logo</h1>
        <ul>
          <li>
            <a href="">Sign in</a>
          </li>
          <li>
            <a href="">My Starbucks</a>
          </li>
          <li>
            <a href="">Customer Service & Ideas</a>
          </li>
          <li>
            <a href="">Find a Store</a>
          </li>
        </ul>
      </div>
      <div className="dropDown">
        <ul className="gnb">
          <li className="gnb_coffee">
            COFFEE
            <div className="nav_until">
              <Navbar_Coffe />
            </div>
          </li>
          <li className="gnb_menu">
            MENU
            <div className="nav_until"></div>
          </li>
          <li>STORE</li>
          <li>RESPONSIBILITY</li>
          <li>STARBUCKS REWARDS</li>
          <li>WHAT'S NEW</li>
        </ul>
      </div>
    </div>
  );
}
