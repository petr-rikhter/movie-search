import React, { useEffect, useRef, useState } from "react";

const Search = (props) => {
  const searchRef = useRef();
  const [typeFilter, setTypeFilter] = useState();

  useEffect(() => {
    props.onSetSearchInput(searchRef.current.value, typeFilter);
  }, [typeFilter]);

  const searchHandler = (event) => {
    if (event.key === "Enter") {
      props.onSetSearchInput(searchRef.current.value, typeFilter);
    }
  };

  const changeTypeFilter = (event) => {
    setTypeFilter(event.target.dataset.type);
  };

  return (
    <div className="row">
      <div className="input-field ">
        <input
          placeholder="Например: Matrix"
          id="email_inline"
          type="search"
          className="validate"
          ref={searchRef}
          onKeyDown={searchHandler}
        />
        <a
          onClick={() =>
            props.onSetSearchInput(searchRef.current.value, typeFilter)
          }
          className="waves-effect blue lighten-3  btn-small btn-absolute"
        >
          Искать
        </a>
        <span className="helper-text" data-error="wrong" data-success="right">
          Введите название фильма на английском языке
        </span>
      </div>

      <form className="search-filter " action="#">
        <p>
          <label>
            <input
              className="with-gap "
              name="group1"
              type="radio"
              data-type="all"
              onChange={changeTypeFilter}
            />
            <span>Все</span>
          </label>
        </p>
        <p>
          <label>
            <input
              className="with-gap"
              name="group1"
              type="radio"
              data-type="movie"
              onChange={changeTypeFilter}
            />
            <span>Фильмы</span>
          </label>
        </p>
        <p>
          <label>
            <input
              className="with-gap"
              name="group1"
              type="radio"
              data-type="series"
              onChange={changeTypeFilter}
            />
            <span>Сериалы</span>
          </label>
        </p>
      </form>
    </div>
  );
};

export default Search;
