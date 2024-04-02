import { useSelector } from "react-redux";
import { getImageUrl } from "../store/homeSlice";
import styles from "./Hero.module.css";
import Button from "./Button";

function HeroCard({ movie }) {
  const { title, poster_path } = movie;
  const url = useSelector(getImageUrl);
  return (
    <div className={styles.heroCard}>
      <figure>
        <img src={url + poster_path} alt={title} />
        <div className="overlay"></div>
      </figure>
    </div>
  );
}

export default HeroCard;
