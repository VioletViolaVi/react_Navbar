import { useEffect, useState } from "react";

import SearchIcon from "../../assets/search.svg";
import "./App.css";
import moviesUrl from "../../env.js";
import MoviesCard from "../Main/MoviesCard/index";

const API_URL = moviesUrl;

const App = () => {
  const [allMovies, setAllMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // its own function
  const searchMovies = async (title) => {
    const res = await fetch(`${API_URL}&s=${title}`);
    const data = await res.json();

    setAllMovies(data.Search);
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
            value={searchTerm}
            onChange={(e) => {
              return setSearchTerm(e.target.value)
            }}
          />
          <img src={SearchIcon} alt="search" onClick={() => {
            return searchMovies(searchTerm);
          }} />
        </section>

        {allMovies.length > 0 
        ? (
          <section className="container">

            {allMovies.map((singleObj) => {
              return <MoviesCard singleObj={singleObj} key={singleObj.imdbID} />
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
