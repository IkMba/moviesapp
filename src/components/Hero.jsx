import IonIcon from "@reacticons/ionicons";
import Button from "./Button";
import styles from "./Hero.module.css";
import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import HeroCard from "./HeroCard";
import { useSelector } from "react-redux";
import { getImageUrl } from "../store/homeSlice";
import Icons from "./Icons";
import { useNavigate } from "react-router-dom";
import { useKey } from "../hooks/useKey";

function Hero({ movies }) {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 500,
    fade: true,
    waitForAnimate: false,
  };
  const inputRef = useRef(null);
  useKey("Enter", function () {
    if (document.activeElement === inputRef.current)
      navigate(`search/${query}`);
  });
  function handleSearch() {
    navigate(`search/${query}`);
  }
  return (
    <div className={styles.hero}>
      <Slider {...settings}>
        {movies?.map((movie) => (
          <HeroCard movie={movie} key={movie.id} />
        ))}
      </Slider>
      <div className={styles.heroDetails}>
        <h1>Welcome</h1>
        <h3>The best place for all movies,TV shows and all entertainment.</h3>
        <div className={styles.input}>
          <input
            type="text"
            placeholder="Search movies"
            onChange={(e) => setQuery(e.target.value)}
            ref={inputRef}
          />
          <Button onClick={handleSearch}>Search</Button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
