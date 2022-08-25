import { useEffect, useState } from "react";

import SearchIcon from "../../assets/search.svg";
import "./App.css";
import moviesUrl from "../../env.js";
import MoviesCard from "../Main/MoviesCard";

const API_URL = moviesUrl;

const movie1 = {
  Title: "Clifford the Big Red Dog",
  Year: "2021",
  imdbID: "tt2397461",
  Type: "movie",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BZGIxYTU5MzctY2MzNS00MTRhLWEwM2UtY2Q5Mzk3OTAzMzcwXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_SX300.jpg"
};

const App = () => {
  const [movies, setMovies] = useState([]);

  // its own function
  const searchMovies = async (title) => {
    const res = await fetch(`${API_URL}&s=${title}`);
    const data = await res.json();

    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("clifford");
  }, []);

  console.log("movies ==>", movies);
  return (
    <>
      <main className="app">
        <h1>MovieLand</h1>
        <section className="search">
          <input
            type="text"
            placeholder="Search for movies"
            value="This was hard coded 😊"
            onChange={() => {}}
          />
          <img src={SearchIcon} alt="search" onClick={() => {}} />
        </section>

        {movies.length > 0 ? (
          <section className="container">
            {movies.map((singleMovieObj) => {
              <MoviesCard />; // continue from here :)
            })}
          </section>
        ) : (
          <div className="empty">
            <h2>No movies found</h2>
          </div>
        )}
      </main>
    </>
  );
};

export default App;
