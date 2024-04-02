import { useEffect } from "react";
import { getMovieImages, searchMovie } from "../services/apiMovies";
import styles from "./SearchedMovies.module.css";
import SearchItem from "./SearchItem";
import { useParams } from "react-router-dom";
import MovieItem from "./MovieItem";

function SearchedMovies({ movies }) {
  const title = useParams().movie;
  return (
    <div className={styles.search}>
      {movies?.map((movie) => (
        <MovieItem key={movie.id} movie={movie} cardType="normal" />
      ))}
    </div>
  );
}

export default SearchedMovies;
