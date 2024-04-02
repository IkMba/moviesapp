import { useEffect, useRef } from "react";
import styles from "./MovieCard.module.css";
import {
  getCurrentMovies,
  getPopularMovies,
  getTrendingMovies,
} from "../services/apiMovies";
import { useLoaderData } from "react-router-dom";
import MovieItem from "./MovieItem";
import Icons from "./Icons";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useMediaQuery } from "react-responsive";

function MovieCard({ movies, title, cardType, bg }) {
  const isXLargeScreen = useMediaQuery({ query: "(min-width:1000px)" });
  const isLargeScreen = useMediaQuery({ query: "(min-width:800px)" });
  const isMediumScreen = useMediaQuery({ query: "(min-width:500px)" });
  const isSmallScreen = useMediaQuery({ query: "(max-width:500px)" });

  let slidesToShow;
  if (cardType === "wide") {
    isXLargeScreen
      ? (slidesToShow = 4)
      : isLargeScreen
      ? (slidesToShow = 3)
      : isMediumScreen
      ? (slidesToShow = 2)
      : isSmallScreen
      ? (slidesToShow = 1)
      : (slidesToShow = 1);
  }
  if (cardType === "normal") {
    isXLargeScreen
      ? (slidesToShow = 6)
      : isLargeScreen
      ? (slidesToShow = 4)
      : isMediumScreen
      ? (slidesToShow = 3)
      : isSmallScreen
      ? (slidesToShow = 2)
      : (slidesToShow = 1);
  }

  // console.log(slidesToShow);
  const settings = {
    infinite: true,
    slidesToShow,
    slidesToScroll: 2,

    nextArrow: (
      <Icons
        name="chevron-forward-outline"
        className="prev-slick-arrow"
        type="btn"
      />
    ),
    prevArrow: (
      <Icons
        name="chevron-back-outline"
        className="prev-slick-arrow"
        type="btn"
      />
    ),
  };

  return (
    <div
      className={`${styles.movieCard} ${
        bg === "dark" ? styles.bgDark : ""
      } movieCard`}
    >
      <h3>{title}</h3>
      <Slider {...settings} className={styles.movieCards}>
        {movies?.map((movie) => (
          <MovieItem movie={movie} key={movie.id} cardType={cardType} />
        ))}
      </Slider>
      {/* <div className={styles.scrollArrows}>
        
        
      </div> */}
    </div>
  );
}

export default MovieCard;
