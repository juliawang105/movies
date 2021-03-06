import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import MovieList from './components/movieList';
import React, { useState, useEffect }from 'react';
import { apiKey } from './key';
import SearchBox from './components/SearchBox';
import MovieListHeading from './components/movieListHeading';
import AddFavorite from './components/AddToFavorites';
import RemoveFave from './components/removeFaves'

function App() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [faves, setFaves] = useState([]);

  const getMovieRequest = async() => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=${apiKey}`;
    const response = await fetch(url);
    const responseJson = await response.json();
    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }

  }

  const addToFaves = (movie) => {
    const newFaveList = [...faves, movie];
    setFaves(newFaveList);
  }

  const removeMovie = (movie) => {
    const newMovies = faves.filter(mov => mov.imdbID !== movie.imdbID);
    setFaves(newMovies)
  }

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  return (
    <div className="container-fluid movie-app">
      <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieListHeading heading="Movies" />
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <div className="row">
        <MovieList
          movies={movies}
          FavoriteComponent={AddFavorite}
          handleClick={addToFaves}
        />
      </div>

      <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieListHeading heading="Favourites" />
      </div>
      <div className="row">
        <MovieList
          movies={faves}
          FavoriteComponent={RemoveFave}
          handleClick={removeMovie}
        />
      </div>
    </div>
  );
}

export default App;
