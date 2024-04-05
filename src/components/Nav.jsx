import { NavLink } from "react-router-dom";
import Icons from "./Icons";
import Logo from "./Logo";
import styles from "./Nav.module.css";
function Nav({ setShowNav }) {
  return (
    <div className={styles.nav}>
      <div className={styles.navHeader}>
        <Logo />
        <Icons
          type="btn"
          name="close-outline"
          onClick={() => setShowNav(false)}
        />
      </div>
      <ul className={styles.navLinks}>
        <li onClick={() => setShowNav(false)}>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/explore/movies">Movies</NavLink>
        </li>
        <li></li>
        <li>
          <NavLink to="">Trending</NavLink>
        </li>
        <li>
          <NavLink to="">Watched Movies</NavLink>
        </li>
        <li>
          <NavLink to="">Favourites</NavLink>
        </li>
        <li>
          <NavLink to="">Lists</NavLink>
        </li>
        <li>
          <NavLink to="">Account</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
