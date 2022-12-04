/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import MovieBox from "./MovieBox";

const SEARCH_API =
  "https://api.themoviedb.org/3/search/movie?api_key=bcc4ff10c2939665232d75d8bf0ec093&query=";
const URL_API =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1&#39";

function MovieApiTest() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetch(URL_API)
      .then((result) => result.json())
      .then((data) => {
        setMovies(data.results);
      });
  }, []);

  const searchMovie = async (e) => {
    e.preventDefault();
    try {
      const url = SEARCH_API + query;
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      setMovies(data.results);
    } catch (e) {
      console.log(e);
    }
  };
  const changeHandler = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="movies_container">
      <Container fixed>
        <a>Search movie you would like to watch.</a>
        <form className="movies_search" onSubmit={searchMovie}>
          <input
            type="text"
            placeholder="Movie Search"
            value={query}
            onChange={changeHandler}
          />
          <button variant="secondary" type="submit" onSubmit={searchMovie}>
            Search
          </button>
        </form>
        {movies.length > 0 ? (
          <div>
            {movies.map((movieReq) => (
              <MovieBox key={movieReq.id} {...movieReq} />
            ))}
          </div>
        ) : (
          <h2>Sorry !! No Movies Found</h2>
        )}
      </Container>
    </div>
  );
}

export default MovieApiTest;
