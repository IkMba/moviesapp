import { useEffect, useState } from "react";
import styles from "./MovieItem.module.css";
import SearchedMovies from "./SearchedMovies";
import { getImageUrl } from "../store/homeSlice";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Rating from "./Rating";

function MovieItem({ movie, cardType }) {
  const {
    id,
    title,
    poster_path,
    vote_average,
    release_date: releaseDate,
    first_air_date,
    name,
  } = movie;

  const imageUrl = useSelector(getImageUrl);

  return (
    <Link
      to={`/movie/${id}`}
      className={`${styles.movieItem} ${styles[cardType]}`}
    >
      <figure>
        <img src={imageUrl + poster_path} alt={title} />
        <div className={styles.rating}>
          <Rating vote={vote_average} />
        </div>
      </figure>
      <div className={styles.movieDetails}>
        <h5>{title ? title : name}</h5>
        <h6>{releaseDate ? releaseDate : first_air_date}</h6>
      </div>
    </Link>
  );
}

export default MovieItem;
