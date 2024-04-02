import { useEffect, useState } from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import MovieCard from "../components/MovieCard";
import Hero from "../components/Hero";

import {
  getCurrentMovies,
  getPopularMovies,
  getTrendingMovies,
} from "../services/apiMovies";
import { useLoaderData } from "react-router-dom";

function HomePage() {
  const { section1, section2, section3 } = useLoaderData();
  // console.log(section1, section2, section3);

  return (
    <div className="home">
      <Hero movies={section3} />

      <section className="movies">
        <MovieCard
          movies={section1}
          title="Trending"
          cardType="normal"
          slidesToShow={5}
          slidesToScroll={3}
        />
        <MovieCard
          movies={section2}
          title="Popular"
          cardType="wide"
          bg="dark"
        />
        <MovieCard movies={section3} title="In theaters" cardType="normal" />
      </section>
    </div>
  );
}

// const fetchTrending = () => {
//   const movies = getTrendingMovies();
//   console.log(movies);
//   return movies;
// };

// const fetchPopular = () => {
//   const  = getPopularMovies();
//   return movies;
// };
// const fetchCurrentShowing = () => {
//   const data = getCurrentMovies();
//   const movies = data.results;
//   return movies;
// };

export async function loader() {
  const section1 = await getTrendingMovies();
  const section2 = await getPopularMovies();
  const section3 = await getCurrentMovies();

  return {
    section1,
    section2,
    section3,
  };
}

export default HomePage;
