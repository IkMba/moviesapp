import { useLoaderData } from "react-router-dom";
import ExploreMovies from "../components/ExploreMovies";
import { explore, getGenres } from "../services/apiMovies";

const mediaType = "tv";
function ExploreShowsPage() {
  const { movies, genres } = useLoaderData();

  return (
    <>
      <ExploreMovies data={movies} genres={genres} mediaType={mediaType} />
    </>
  );
}

export async function loader() {
  const movies = await explore(mediaType);
  const genres = await getGenres(mediaType);
  // console.log(movies);
  return { movies, genres };
}
export default ExploreShowsPage;
