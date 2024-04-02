import { useEffect, useState } from "react";
import styles from "./Explore.module.css";
import MovieItem from "./MovieItem";
import Select from "react-select";
import { explore } from "../services/apiMovies";

const sortbyData = [
  { value: "popularity.desc", label: "Popularity Descending" },
  { value: "popularity.asc", label: "Popularity Ascending" },
  { value: "vote_average.desc", label: "Rating Descending" },
  { value: "vote_average.asc", label: "Rating Ascending" },
  {
    value: "primary_release_date.desc",
    label: "Release Date Descending",
  },
  { value: "primary_release_date.asc", label: "Release Date Ascending" },
  { value: "original_title.asc", label: "Title (A-Z)" },
];

function ExploreMovies({ data, genres, mediaType }) {
  const [movies, setMovies] = useState(data);
  const genresData = genres.genres;
  // const [genreValue, setGenreValue] = useState([]);
  // const [sortValue, setSortValue] = useState("");
  // const [genreMovies, setGenreMovies] = useState(movies);

  // const genreIdArr = genres.genres
  //   .filter((f) => genreValue.includes(f.name))
  //   .map((a) => a.id);'
  let filters = {};

  const [genre, setGenre] = useState([]);
  const [sortBy, setSortBy] = useState("");
  const [params, setParams] = useState({});

  useEffect(() => {
    const fetch = async () => {
      const movies = await explore(mediaType, params);
      setMovies(movies);
    };
    fetch();
  }, [params, mediaType]);

  const handleSelect = (selectedItems, action) => {
    if (action.name === "sortby") {
      setSortBy(selectedItems);
      if (action.action !== "clear") {
        filters.sort_by = selectedItems.value;
      } else {
        delete filters.sort_by;
      }
    }

    if (action.name === "genres") {
      setGenre(selectedItems);
      if (action.action !== "clear") {
        let genreId = selectedItems.map((g) => g.id);
        genreId = JSON.stringify(genreId).slice(1, -1);
        filters.with_genres = genreId;
      } else {
        delete filters.with_genres;
      }
    }
    setParams(filters);
  };

  return (
    <div className={styles.explore}>
      <div className={styles.exploreHeading}>
        <h3>Explore {mediaType === "movie" ? "Movies" : "Tv Shows"}</h3>
        <div className={styles.sort}>
          <Select
            isMulti
            name="genres"
            value={genre}
            closeMenuOnSelect={true}
            options={genresData}
            getOptionLabel={(option) => option.name}
            getOptionValue={(option) => option.id}
            onChange={handleSelect}
            placeholder="Select Genres"
            className="react-select"
            classNamePrefix="react-select"
          />
          <Select
            name="sortby"
            value={sortBy}
            closeMenuOnSelect={true}
            options={sortbyData}
            onChange={handleSelect}
            placeholder="Sort by"
            isClearable={true}
            className="react-select"
            classNamePrefix="react-select"
          />
        </div>
      </div>
      <div className={styles.exploreMovies}>
        {movies?.map((movie) => (
          <MovieItem key={movie.id} movie={movie} cardType="normal" />
        ))}
      </div>
    </div>
  );
}

export default ExploreMovies;
