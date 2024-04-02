import { useSelector } from "react-redux";
import styles from "./MovieDetails.module.css";
import { getImageUrl } from "../store/homeSlice";
import Icons from "./Icons";
import { Link } from "react-router-dom";
import Rating from "./Rating";
import useNameFormater from "../hooks/useNameFormater";

function MovieBanner({ movie, crew }) {
  const {
    id,
    backdrop_path,
    title,
    overview,
    poster_path,
    runtime,
    vote_average,
    release_date,
    status,
    production_comapnies,
    genres,
    tagline,
    adult,
  } = movie;
  const hour = Math.round(runtime / 60);
  const minutes = runtime % 60;
  const viewer = adult === false ? "PG-13" : "Adult";
  const genre = genres.map((genre) => genre.name + " ");
  const directorArr = crew?.filter((f) => f.job === "Director");
  const director = useNameFormater(directorArr, "name");
  const writerArr = crew?.filter(
    (f) => f.job === "Creator" || f.job === "Writer" || f.job === "Screenplay"
  );
  const writer = useNameFormater(writerArr, "name");
  const producerArr = crew?.filter((f) => f.job === "Producer");
  const producer = useNameFormater(producerArr, "name");

  console.log(director, writer, producer);
  const imageUrl = useSelector(getImageUrl);

  return (
    <div className={`${styles.movieBanner}`}>
      <div className={styles.overlay}></div>

      <div
        className={styles.banner}
        style={{ backgroundImage: `url(${imageUrl}${backdrop_path} ` }}
      >
        <figure>
          <img src={imageUrl + poster_path} alt="" />
        </figure>

        <div className={styles.bannerDetails}>
          <div className={styles.bannerTop}>
            <h2>{title}</h2>
            <div className={styles.bannerTopFlex}>
              <h6>{viewer}</h6>
              <h6>{release_date}</h6>
              <h6>{genre}</h6>
              <h6>{`${hour}h ${minutes}m`}</h6>
            </div>
          </div>

          <div className={styles.bannerActions}>
            <div className={styles.rating}>
              <Rating vote={vote_average} />
            </div>
            <Link className={styles.play}>
              <Icons name="play" />
              <h6>Play Trailer</h6>
            </Link>
          </div>

          <div className={styles.bannerActions}>
            <Icons name="bookmark" type="btn" tooltip="Add to watchlist" />
            <Icons name="heart" type="btn" tooltip="Add to favourites" />
            <Icons name="star" type="btn" tooltip="Rate movie" />
            <Icons name="list" type="btn" tooltip="Add to list" />
          </div>

          <div className={styles.bannerOverview}>
            <h4>{tagline}</h4>
            <h3>Overview</h3>
            <p>{overview}</p>
          </div>

          <div className={styles.overviewExtra}>
            <div>
              <h6>{director}</h6>
              <h6>Director</h6>
            </div>
            <div>
              <h6>{writer}</h6>
              <h6>Writers(s)</h6>
            </div>
            <div>
              <h6>{producer}</h6>
              <h6>Producer(s)</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieBanner;
