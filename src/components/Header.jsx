import IonIcon from "@reacticons/ionicons";
import styles from "./Header.module.css";
import { Link, NavLink } from "react-router-dom";
import Search from "./Search";
import Icons from "./Icons";
import Logo from "./Logo";
import User from "./User";

function Header({ setShowNav }) {
  return (
    <header className={styles.header}>
      <div className={styles.headerLeft}>
        <Icons
          type="btn"
          name="menu-outline"
          onClick={() => setShowNav(true)}
        />

        <NavLink to="/explore/movies">Movies</NavLink>
        <NavLink to="explore/shows">tv & shows</NavLink>
      </div>
      <Link to="/" className={styles.headerCenter}>
        <Logo />
      </Link>
      <div className={styles.headerRight}>
        <Search />
        <Icons type="btn" name="notifications-outline" className="notif" />
        <User />
      </div>
    </header>
  );
}

export default Header;
