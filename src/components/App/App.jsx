import { useEffect } from "react";

import SearchIcon from "../../assets/search.svg";
import "./App.css";
import moviesUrl from "../../env.js";

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
  const searchMovies = async (title) => {
    const res = await fetch(`${API_URL}&s=${title}`);
    const data = await res.json();

    console.log(data.Search);
  };

  useEffect(() => {
    searchMovies("clifford");
  }, []);

  return (
    <>
      <main className="app">
        <h1>MovieLand</h1>
        <section className="search">
          <input
            type="text"
            placeholder="Search for movies"
            value="Superman"
            onChange={() => {}}
          />
          <img src={SearchIcon} alt="search" onClick={() => {}} />
        </section>

        <section className="container">
          <section className="movie">
            <div>
              <p>{movie1.Year}</p>
            </div>

            <div>
              <img
                src={
                  movie1.Poster !== "N/A"
                    ? movie1.Poster
                    : "https://via.placeholder.com/400"
                }
                alt={movie1.Title}
              />
            </div>

            <div>
              <span>{movie1.Type}</span>
              <h3>{movie1.Title}</h3>
            </div>
          </section>
        </section>
      </main>
    </>
  );
};

export default App;
