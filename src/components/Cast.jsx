import styles from "./Cast.module.css";
import CastCard from "./CastCard";
function Cast({ cast, movie }) {
  const topCast = cast.slice(0, 10);
  const { status, budget, revenue, original_language } = movie;
  const language =
    original_language === "en"
      ? "English"
      : original_language === "fr"
      ? "French"
      : "English";
  const nFormat = new Intl.NumberFormat().format;
  // const {}
  return (
    <div className={styles.castSection}>
      <h3>Top Billed Cast</h3>
      <div className={styles.castContainer}>
        <div className={styles.cast}>
          {topCast.map((cast) => (
            <CastCard cast={cast} key={cast.id} />
          ))}
        </div>
        <div className={styles.extraMovieDetails}>
          <div>
            <h5>Status</h5>
            <h6>{status}</h6>
          </div>
          <div>
            <h5>Original Language</h5>
            <h6>{language}</h6>
          </div>
          <div>
            <h5>Budget</h5>
            <h6>{nFormat(budget)}</h6>
          </div>
          <div>
            <h5>Status</h5>
            <h6>{nFormat(revenue)}</h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cast;
