import Navbar_Coffe from "./Navbar_Coffe";
import "./Header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="center">
        <h1 className="logo">
          <a href="/" title="스타벅스메인">
            스타벅스 로고
          </a>
        </h1>
        <nav>
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
        </nav>
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
