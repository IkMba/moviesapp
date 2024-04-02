import { useSelector } from "react-redux";
import styles from "./Cast.module.css";
import { getImageUrl } from "../store/homeSlice";
import { Link } from "react-router-dom";
function CastCard({ cast }) {
  console.log(cast);
  const { profile_path, name, character } = cast;
  const imageUrl = useSelector(getImageUrl);
  return (
    <Link className={styles.castCard}>
      <figure>
        <img src={imageUrl + profile_path} alt={name} />
      </figure>
      <div className={styles.castDetails}>
        <h5>{name}</h5>
        <h6>{character}</h6>
      </div>
    </Link>
  );
}

export default CastCard;
