import React, { useEffect, useState } from "react";
import Movies from "../components/Movies";
import Preloader from "../components/Preloader";
import Search from "../components/Search";

const Main = (props) => {
  const [movies, setMovies] = useState(false);

  useEffect(() => {
    fetch(`http://www.omdbapi.com/?apikey=fe32a74f&s=matrix`)
      .then((response) => response.json())
      .then((data) => setMovies(data.Search));
  }, []);

  const searchInputHandler = (props) => {
    fetch(`http://www.omdbapi.com/?apikey=fe32a74f&s=${props}`)
      .then((response) => response.json())
      .then((data) => setMovies(data.Search));

    console.log(props);
  };

  return (
    <main className="container content">
      <Search onSetSearchInput={searchInputHandler} />

      {movies ? <Movies movies={movies} /> : <Preloader />}
    </main>
  );
};

export default Main;
