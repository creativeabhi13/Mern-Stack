import React,{useState} from 'react';
import moviesData from '../data/moviesData';
import MoviesDetails from './MoviesDetails';

const ListMovies = ({allMovies}) => {
    
  return (
    <div>
    <div className="list-movies">
          {moviesData.map((movie, index) => {
            return (
              <div key={index} onClick={() => allMovies(movie)}>
                <img src={movie.bannerLink} alt={movie.title} />
                <h2>{movie.title}</h2>
              </div>
            );
          })}
        </div>
        {/* <MoviesDetails clickedMovieDetails={clickedMovieDetails}/> */}
        </div>
  )
}

export default ListMovies;