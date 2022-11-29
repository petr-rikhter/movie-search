import React, { useEffect, useState } from "react";
import Movies from "../components/Movies";
import Preloader from "../components/Preloader";
import Search from "../components/Search";

const Main = (props) => {
  const [movies, setMovies] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?apikey=fe32a74f&s=matrix`)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.Search);
        setLoading(false);
      });
  }, []);

  const searchInputHandler = (props, type = "all") => {
    setLoading(true);

    fetch(
      `https://www.omdbapi.com/?apikey=fe32a74f&s=${props}${
        type === "all" ? "" : `&type=${type}`
      }`
    )
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.Search);
        setLoading(false);
      });
  };

  return (
    <main className="container content">
      <Search onSetSearchInput={searchInputHandler} />

      {loading ? <Preloader /> : <Movies movies={movies} />}
    </main>
  );
};

export default Main;
