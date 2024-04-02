import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage, { loader as homeLoader } from "./pages/HomePage";
import SearchPage, { loader as searchLoader } from "./pages/SearchedPage";
import MovieDetailsPage, {
  loader as movieLoader,
} from "./pages/MovieDetailsPage";
import { fetchApiData } from "./services/apiMovies";
import { addImageUrl } from "./store/homeSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import AppLayout from "./pages/AppLayout";
import ExploreMoviesPage, {
  loader as exploreMovieLoader,
} from "./pages/ExploreMoviesPage";
import ExploreShowsPage, {
  loader as exploreShowsLoader,
} from "./pages/ExploreShowsPage";

const router = createBrowserRouter([
  {
    element: <AppLayout />,

    children: [
      {
        path: "/",
        element: <HomePage />,
        loader: homeLoader,
      },
      {
        path: "/explore/movies",
        element: <ExploreMoviesPage />,
        loader: exploreMovieLoader,
      },
      {
        path: "/explore/shows",
        element: <ExploreShowsPage />,
        loader: exploreShowsLoader,
      },
      {
        path: "/search/:movie",
        element: <SearchPage />,
        loader: searchLoader,
      },
      {
        path: "/movie/:id",
        element: <MovieDetailsPage />,
        loader: movieLoader,
      },
    ],
  },
]);

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    async function getApiConfig() {
      const url = await fetchApiData("/configuration");
      const imageUrl = url.images.secure_base_url + "original";

      dispatch(addImageUrl(imageUrl));
      return imageUrl;
    }
    getApiConfig();
  });
  return <RouterProvider router={router} />;
}

export default App;
