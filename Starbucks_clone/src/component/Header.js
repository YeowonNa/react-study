import Navbar_Coffe from "./Navbar_Coffe";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.center}>
        <h1 className={styles.logo}>
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
      <div className={styles.dropDown}>
        <ul className={styles.gnb}>
          <li className={styles.gnb_nav01}>
            COFFEE
            <div className={styles.nav_until}>
              <Navbar_Coffe />
            </div>
          </li>
          <li className={styles.gnb_nav02}>
            MENU
            <div className={styles.nav_until}></div>
          </li>
          <li className={styles.gnb_nav03}>STORE</li>
          <li className={styles.gnb_nav04}>RESPONSIBILITY</li>
          <li className={styles.gnb_nav05}>STARBUCKS REWARDS</li>
          <li className={styles.gnb_nav06}>WHAT'S NEW</li>
        </ul>
      </div>
    </div>
  );
}
