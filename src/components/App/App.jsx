import { useEffect } from "react";

import "../../assets/search.svg";
import "./App.css";
import moviesUrl from "../../env.js";

const API_URL = moviesUrl;

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
      <h1>Hi there 👋</h1>
    </>
  );
};

export default App;
