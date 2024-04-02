import IonIcon from "@reacticons/ionicons";
import styles from "./Icons.module.css";

function Icons({ type, name, className, onClick, tooltip }) {
  if (type === "btn")
    return (
      <div className={tooltip ? "tooltip" : ""}>
        {tooltip && <span className="tooltiptext">{tooltip}</span>}
        <button
          className={`${styles.buttonIcons} ${className}`}
          onClick={onClick}
        >
          <IonIcon name={name} />
        </button>
      </div>
    );

  return (
    <div className={`icons ${className}`} onClick={onClick}>
      <IonIcon name={name} />
    </div>
  );
}

export default Icons;
