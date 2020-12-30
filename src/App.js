import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import MovieList from './components/movieList';
import React, { useState, useEffect }from 'react';
import { apiKey } from './key'

function App() {
  const [movies, setMovies] = useState([]);

  const getMovieRequest = async() => {
    const url = `http://www.omdbapi.com/?s=star wars&apikey=${apiKey}`;
    const response = await fetch(url);
    const responseJson = await response.json();
    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }

  }

  useEffect(() => {
    getMovieRequest();
  }, []);

  return (
    <div className="container-fluid movie-app">
      <div className="row">
        <MovieList movies={movies} />
      </div>
    </div>
  );
}

export default App;
