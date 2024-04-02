import { useLoaderData } from "react-router-dom";
import { getCredits, getMovie } from "../services/apiMovies";
import MovieBanner from "../components/MovieBanner";
import Cast from "../components/Cast";

function MovieDetailsPage() {
  const { movie, credits } = useLoaderData();
  const crew = credits?.crew;
  const cast = credits?.cast;
  console.log(movie, credits);
  return (
    <div className="details">
      <MovieBanner movie={movie} crew={crew} />
      <Cast cast={cast} movie={movie} />
    </div>
  );
}

export async function loader({ params }) {
  const id = params.id;
  const movie = await getMovie(id);
  const credits = await getCredits(id);
  return {
    movie,
    credits,
  };
}
export default MovieDetailsPage;
