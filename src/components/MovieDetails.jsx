import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"

const API_BASE_URL = "https://api.themoviedb.org/3"
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
  const [movie, setMovie] = useState([]);

  const fetchMovie = async () => {
    try {
      const endpoint = `${API_BASE_URL}/movie/${id}?api_key=${API_KEY}`;

      const response = await fetch(endpoint, API_OPTIONS);

      if(!response.ok){
        throw new Error("Failed to fetch the movie");
      }

      const data = await response.json();
      // console.log(data);

      setMovie(data || []);

    } catch (error) {
      console.error(`Error fetching the movie: ${error}`);
    }
  }

  useEffect(() => {
    fetchMovie();
  }, [])

  return (
    <div>
      {/* <h1 className="text-white text-3xl">Movie Details: {id}</h1> */}

      <div className="flex flex-row mt-3">
        <img 
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}` }
          className="ml-3"
        />

        <div className="ml-3 ">
          <h2 className="font-dm-sans text-5xl">{movie.title}</h2>
          <p className="font-dm-sans text-[#A8B5DB] mt-2 text-2xl">Release Date: {movie.release_date}</p>
          {/* <p className="font-dm-sans text-[#A8B5DB] mt-2 text-2xl">Duration: {foundMovie.release_date}</p> */}
        </div>
      </div>


    </div>
  )
}

export default MovieDetails