import React,{useState} from 'react'
import ListMovies from './Components/ListMovies'
import './style.css'
import MoviesDetails from './Components/MoviesDetails'

const App = () => {
    let [clickedMovieDetails, setClickedMovieDetails] = useState({});
  return (
    <div>
        <h1>Movies App</h1>
        <div className='movie-container'>
        <ListMovies allMovies={setClickedMovieDetails}/>
        <MoviesDetails clickedMovieDetails={clickedMovieDetails}/>
        </div>
    </div>
  )
}

export default App