import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"

const API_SEARCH_URL = "https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1"
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`
  }
}

const MovieDetails = () => {

  const { id } = useParams();

  const [foundMovie, setFoundMovie] = useState([]);

  const fetchMovie = async () => {
    try {
      const endpoint = `${API_SEARCH_URL}&query=${id}`;

      const response = await fetch(endpoint, API_OPTIONS);

      if(!response.ok){
        throw new Error("Failed to fetch the movie");
      }

      const data = await response.json();
      // console.log(data);

      const movie = data.results[0];
      // console.log(movie.title);
      setFoundMovie(movie || []);

    } catch (error) {
      console.error(`Error fetching the movie: ${error}`);
    }
  }

  useEffect(() => {
    fetchMovie();
  }, [])

  return (
    <div>
      <h1 className="text-white text-3xl">Movie Details: {id}</h1>
      <h2>Name of the movie is: {foundMovie.title}</h2>
      {/* <img src={`https://image.tmdb.org/t/p/w500/${foundMovie.poster_path}` }/> */}
    </div>
  )
}

export default MovieDetails