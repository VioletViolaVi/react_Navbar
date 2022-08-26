import { useEffect, useState } from "react";

import "./App.css";

import SearchIcon from "../../assets/search.svg";
import moviesUrl from "../../env.js";
import MoviesCard from "../Main/MoviesCard/index";
import About from "../Main/About";
import BuyTickets from "../Main/BuyTickets";
import NavBar from "../Header/NavBar";

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
      <NavBar />
      <main className="app">
        <>
          <h1>MovieLand</h1>
          <section className="search">
            <input
              type="text"
              placeholder="Search for movies"
              value={searchTerm}
              onChange={(e) => {
                return setSearchTerm(e.target.value);
              }}
            />
            <img
              src={SearchIcon}
              alt="search"
              onClick={() => {
                return searchMovies(searchTerm);
              }}
            />
          </section>

          {allMovies.length > 0 ? (
            <section className="container">
              {allMovies.map((singleObj) => {
                return (
                  <MoviesCard
                    // wholeObj={singleObj} // a shorter/faster way than below ;)
                    key={singleObj.imdbID}
                    Year={singleObj.Year}
                    imdbID={singleObj.imdbID}
                    Poster={singleObj.Poster}
                    Title={singleObj.Title}
                    Type={singleObj.Type}
                  />
                );
              })}
            </section>
          ) : (
            <div className="empty">
              <h2>No movies found</h2>
            </div>
          )}
        </>
        <>
          <About />
        </>
        <>
          <BuyTickets />
        </>
      </main>
    </>
  );
};

export default App;
