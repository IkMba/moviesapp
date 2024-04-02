import { useState } from "react";
import styles from "./User.module.css";
import Icons from "./Icons";
import { Link } from "react-router-dom";

function User() {
  const [showUser, setShowUser] = useState(false);
  return (
    <div className={styles.user}>
      <img src="/images/user-1.jpg" alt="user-pic" />

      <Icons
        type="btn"
        name="chevron-down-outline"
        onClick={() => setShowUser((user) => !user)}
      />
      {showUser && (
        <div className={styles.userActions}>
          <Link>Accounts</Link>
          <Link>Login</Link>
        </div>
      )}
    </div>
  );
}

export default User;
