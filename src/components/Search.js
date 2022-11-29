import React, { useRef, useState } from "react";

const Search = (props) => {
  const searchRef = useRef();

  const searchHandler = (event) => {
    if (event.key === "Enter") {
      props.onSetSearchInput(searchRef.current.value);
    }
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
          onClick={() => props.onSetSearchInput(searchRef.current.value)}
          className="waves-effect blue lighten-3  btn-small"
        >
          Искать
        </a>
        <span className="helper-text" data-error="wrong" data-success="right">
          Введите название фильма на английском языке
        </span>
      </div>
    </div>
  );
};

export default Search;
