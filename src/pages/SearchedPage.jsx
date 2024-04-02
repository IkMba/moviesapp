import { useLoaderData, useParams } from "react-router-dom";
import SearchedMovies from "../components/SearchedMovies";
import { searchMovie, searchMulti } from "../services/apiMovies";
import SideResults from "../components/SideResults";
import { useState } from "react";

function SearchPage() {
  const results = useLoaderData();

  const [query, setQuery] = useState(0);
  const movies = results[query].results;

  return (
    <div>
      <div className="searchPage">
        <SideResults results={results} setQuery={setQuery} />

        <SearchedMovies movies={movies} />
      </div>
    </div>
  );
}

export async function loader({ params }) {
  const tags = ["movie", "tv", "company", "keyword", "person", "collection"];

  let results = tags.map((i) => searchMulti(i, params.movie));
  results = await Promise.all(results);
  return results;
}

export default SearchPage;
