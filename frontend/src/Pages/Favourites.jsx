import React from "react";
import "../CSS/Favourite.css";
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";

const Favourites = () => {
  const { favorites } = useMovieContext();

  if (favorites) {
    return (
      <div>
        <h2 className="favorites">Your Favourites</h2>
        <div className="movies-grid">
          {favorites.map((movie, index) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div className="favorites-empty">
        <h2>No Favourite Movies Yet</h2>
        <p>Start adding movies to ur favourites & they will appear here</p>
      </div>
    );
  }
};

export default Favourites;
