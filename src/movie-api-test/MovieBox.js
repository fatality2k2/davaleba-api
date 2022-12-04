import React from "react";

const IMG_PATH = "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/";

const MovieBox = ({
  original_title,
  poster_path,
  vote_average,
  release_date,
  overview,
}) => {
  return (
    <div className="movies_box">
      <div className="movies_poster_image">
        <img
          src={IMG_PATH + poster_path}
          className="movies_poster"
          alt="poster"
        />
      </div>
      <div className="movies_title_container">
        <div className="movies_title">
          <div className="movies_title_N">
            <p>{original_title}</p>
          </div>
          <div className="movies_rating">
            <p>{vote_average}</p>
          </div>
        </div>
        <div className="movies_release_date">
          <p>{release_date}</p>
        </div>
        <div className="movies_overview">
          <p>{overview}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieBox;
