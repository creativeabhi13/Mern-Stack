import React, { useState } from "react";
import "./style.css";

const moviesData = [
  {
    title: "3 Idiots",
    actor: "Aamir Khan",
    genre: "Comedy/Drama",
    director: "Rajkumar Hirani",
    bannerLink:
      "https://upload.wikimedia.org/wikipedia/en/d/df/3_idiots_poster.jpg",
  },
  {
    title: "Dangal",
    actor: "Aamir Khan",
    genre: "Biographical/Sports",
    director: "Nitesh Tiwari",
    bannerLink:
      "https://m.economictimes.indiatimes.com/thumb/msid-56017822,width-1200,height-900,resizemode-4,imgsize-97379/dangal-preview-all-you-need-to-know-before-stepping-into-the-theatre.jpg",
  },
  {
    title: "Bahubali: The Beginning",
    actor: "Prabhas",
    genre: "Action/Fantasy",
    director: "S.S. Rajamouli",
    bannerLink:
      "https://origin-staticv2.sonyliv.com/videoasset_images/bahubali_the_beginning_hindi_3july_landscape_thumb.jpg",
  },
  {
    title: "Lagaan",
    actor: "Aamir Khan",
    genre: "Drama/Sports",
    director: "Ashutosh Gowariker",
    bannerLink:
      "https://s3images.zee5.com/wp-content/uploads/2023/06/ANI-20230615174119.jpg",
  },
  {
    title: "PK",
    actor: "Aamir Khan",
    genre: "Comedy/Drama",
    director: "Rajkumar Hirani",
    bannerLink:
      "https://i.ytimg.com/vi/TcQ5KgRkq_M/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAWcmwamsZTtB2xCzyWv02ert079A",
  },
  {
    title: "Sholay",
    actor: "Amitabh Bachchan",
    genre: "Action/Adventure",
    director: "Ramesh Sippy",
    bannerLink:
      "https://miro.medium.com/v2/resize:fit:1400/0*qSrnwMJunWWzhkx8.jpg",
  },
  {
    title: "Bajrangi Bhaijaan",
    actor: "Salman Khan",
    genre: "Drama/Action",
    director: "Kabir Khan",
    bannerLink:
      "https://sc0.blr1.digitaloceanspaces.com/large/741664-b3c967bc-77d1-4150-82da-22474c448f27.jpg",
  },
  {
    title: "Gully Boy",
    actor: "Ranveer Singh",
    genre: "Musical/Drama",
    director: "Zoya Akhtar",
    bannerLink:
      "https://cdn.sanity.io/images/68lp9qid/production/33c879bc7053b79c1edeecb35ead327d6e44fc4e-615x450.jpg",
  },
  {
    title: "Queen",
    actor: "Kangana Ranaut",
    genre: "Comedy/Drama",
    director: "Vikas Bahl",
    bannerLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/et00014052-gymvfdfjqh-landscape.jpg",
  },
  {
    title: "Andhadhun",
    actor: "Ayushmann Khurrana",
    genre: "Thriller/Comedy",
    director: "Sriram Raghavan",
    bannerLink: "https://i.imgur.com/P7yxwkx.jpg",
  },
];

const OldApp = () => {
  let [clickedMovieDetails, setClickedMovieDetails] = useState({});
  return (
    <div>
      <h1>Movies App</h1>
      {/* {Display Movie Banner} */}
      <div className="movie-container">
        <div className="list-movies">
          {moviesData.map((movie, index) => {
            return (
              <div key={index} onClick={() => setClickedMovieDetails(movie)}>
                <img src={movie.bannerLink} alt={movie.title} />
                <h2>{movie.title}</h2>
              </div>
            );
          })}
        </div>

        {/* {Display Movie Details when a movie banner clicked} */}
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
      </div>
    </div>
  );
};

export default OldApp;
