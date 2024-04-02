import styles from "./Button.module.css";

function Button({ type, children, onClick, disabled }) {
  return (
    <button
      className={styles.button}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
