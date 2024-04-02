import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import styles from "./Rating.module.css";
import "react-circular-progressbar/dist/styles.css";

function Rating({ vote }) {
  const rating = Math.round(vote * 10);
  return (
    <div className={styles.rating}>
      <CircularProgressbar
        value={rating}
        text={`${rating}%`}
        styles={buildStyles({
          textSize: "32px",
          textColor: "white",
          pathColor: `${
            rating >= 70
              ? "var(--green)"
              : rating >= 50
              ? "var(--orange)"
              : "var(--red)"
          }`,
        })}
      />
    </div>
  );
}

export default Rating;
