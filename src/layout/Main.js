import React, { useEffect, useState } from "react";
import Movies from "../components/Movies";
import Preloader from "../components/Preloader";
import Search from "../components/Search";

const API_KEY = process.env.REACT_APP_API_KEY;

const Main = (props) => {
  const [movies, setMovies] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.Search);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  }, []);

  const searchInputHandler = (props, type = "all") => {
    setLoading(true);

    fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=${props}${
        type === "all" ? "" : `&type=${type}`
      }`
    )
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.Search);
        setLoading(false);
      })
      .catch((error) => {
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
