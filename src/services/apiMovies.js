import axios from "axios";
import { useDispatch } from "react-redux";
import { addImageUrl } from "../store/homeSlice";

export const API_URL = "https://api.themoviedb.org/3";

const API_TOKEN = import.meta.env.VITE_APP_API_TOKEN;
const headers = {
  Authorization: "Bearer " + API_TOKEN,
  accept: "application/json",
};

export async function getTrendingMovies() {
  const data = await fetchApiData("/trending/movie/day?language=en-US");
  const trending = data.results;
  return trending;
}
export async function getPopularMovies() {
  const data = await fetchApiData(`/movie/popular`);
  const popular = data.results;
  return popular;
}
export async function getCurrentMovies() {
  const data = await fetchApiData("/movie/now_playing");
  const current = data.results;
  return current;
}
export async function searchMovie(movie) {
  const data = await fetchApiData(
    `/search/person?query=${movie}&include_adult=false&language=en-US&page=1`
  );
  const movies = data.results;
  return { data, movies };
}
export async function searchMulti(tag, movieId) {
  const data = await fetchApiData(`/search/${tag}?query=${movieId}`);
  const movies = data.results;
  // console.log(data);
  return data;
}
export function getTvShows() {
  fetchApiData("/trending/movie/day?language=en-US");
}

export function getMovieImages(id) {
  fetchApiData(`/movie/${id}/images`);
}

export async function getMovie(movieId) {
  const movie = await fetchApiData(`/movie/${movieId}?language=en-US`);
  return movie;
}
export async function explore(mediaType, params) {
  const data = await fetchApiData(`/discover/${mediaType}`, params);
  const movies = data.results;
  return movies;
}

export async function exploreShows() {
  const movies = await fetchApiData(`/discover/tv`);
  return movies;
}

export async function getCredits(movieId) {
  const credits = await fetchApiData(
    `/movie/${movieId}/credits?language=en-US`
  );
  return credits;
}

export async function getGenres(type) {
  const genres = await fetchApiData(`/genre/${type}/list`);
  return genres;
}

export const fetchApiData = async (url, params) => {
  try {
    const { data } = await axios.get(API_URL + url, {
      headers,
      params,
    });

    // const results = data.results;
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};
