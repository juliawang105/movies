import React from "react";

function MovieFaves({ movies, FavoriteComponent, addToFaves }) {
  debugger
  return (
    <>
      {movies.map((movie, index) => (
        <div
          className="image-container d-flex justify-content-start m-3"
          key={index}
        >
          <img src={movie.Poster} alt="movie"></img>
          <div
            className="overlay d-flex align-items-center justify-content-center"
            onClick={() => addToFaves(movie)}
          >
            <FavoriteComponent />
          </div>
        </div>
      ))}
    </>
  );
}

export default MovieFaves;
