import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import MovieList from './components/movieList';
import React, { useState, useEffect }from 'react';
import { apiKey } from './key';
import SearchBox from './components/SearchBox';
import MovieListHeading from './components/movieListHeading'

function App() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const getMovieRequest = async() => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=${apiKey}`;
    const response = await fetch(url);
    const responseJson = await response.json();
    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }

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
        <MovieList movies={movies} />
      </div>
    </div>
  );
}

export default App;
