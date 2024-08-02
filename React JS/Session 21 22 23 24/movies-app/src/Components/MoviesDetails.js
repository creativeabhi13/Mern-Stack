import React from 'react'


const MoviesDetails = ({clickedMovieDetails}) => {
  return (
    <div className="movie-info">
    {clickedMovieDetails.title !== undefined && (
      <div>
        <img
          src={clickedMovieDetails.bannerLink}
          alt={clickedMovieDetails.title}
        />
        <h2>{clickedMovieDetails.title}</h2>
        <p>Actor: {clickedMovieDetails.actor}</p>
        <p>Genre: {clickedMovieDetails.genre}</p>
        <p>Director: {clickedMovieDetails.director}</p>
      </div>
    )}
  </div>
  )
}

export default MoviesDetails