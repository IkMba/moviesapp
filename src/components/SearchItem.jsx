import { useSelector } from "react-redux";
import styles from "./SearchedMovies.module.css";
import { getImageUrl } from "../store/homeSlice";
import { Link } from "react-router-dom";
function SearchItem({ movie }) {
  const imageUrl = useSelector(getImageUrl);
  const {
    title,
    poster_path,
    release_date,
    vote_average,
    id,
    overview,
    genre_ids,
    background_path,
  } = movie;

  const details = overview.slice(0, 250) + "...";
  return <Link to={`/movie/${id}`} className={styles.searchItem}></Link>;
}

export default SearchItem;
