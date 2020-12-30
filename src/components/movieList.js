import React from 'react';

function MovieList ({movies}){
  return (
		<>
			{movies.map((movie, index) => (
				<div className='image-container d-flex justify-content-start m-3' key={index}>
					<img src={movie.Poster} alt='movie'></img>
				</div>
			))}
		</>
	);
};

export default MovieList;
