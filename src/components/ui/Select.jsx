import { useState } from "react";
import styles from "./Select.module.css";

function Select({ label, type, options, onChange }) {
  const [selectedArr, setSelectedArr] = useState([]);

  return (
    <div className={styles.selectButton}>
      <select className={styles.select} onChange={onChange}>
        <option>{label}</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
      <div className={styles.selectedItems}>
        {selectedArr.map((item) => (
          <p className={styles.selectedItem} key={item}>
            {item}
          </p>
        ))}
      </div>
    </div>
  );
}

export default Select;
