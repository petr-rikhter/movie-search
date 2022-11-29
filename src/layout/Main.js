import React, { useEffect, useState } from "react";
import Movies from "../components/Movies";
import Preloader from "../components/Preloader";
import Search from "../components/Search";

const Main = (props) => {
  const [movies, setMovies] = useState(false);

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?apikey=fe32a74f&s=matrix`)
      .then((response) => response.json())
      .then((data) => setMovies(data.Search));
  }, []);

  const searchInputHandler = (props, type = "all") => {
    fetch(
      `https://www.omdbapi.com/?apikey=fe32a74f&s=${props}${
        type === "all" ? "" : `&type=${type}`
      }`
    )
      .then((response) => response.json())
      .then((data) => setMovies(data.Search));
  };

  return (
    <main className="container content">
      <Search onSetSearchInput={searchInputHandler} />

      {movies ? <Movies movies={movies} /> : <Preloader />}
    </main>
  );
};

export default Main;
