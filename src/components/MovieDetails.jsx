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
      {/* <h1 className="text-white text-3xl">Movie Details: {id}</h1> */}

      <div className="flex flex-row mt-3">
        <img 
          src={`https://image.tmdb.org/t/p/w500/${foundMovie.poster_path}` }
          className="ml-3"
        />

        <div className="ml-3 ">
          <h2 className="font-dm-sans text-5xl">{foundMovie.title}</h2>
          <p className="font-dm-sans text-[#A8B5DB] mt-2 text-2xl">Release Date: {foundMovie.release_date}</p>
          {/* <p className="font-dm-sans text-[#A8B5DB] mt-2 text-2xl">Duration: {foundMovie.release_date}</p> */}
        </div>
      </div>


    </div>
  )
}

export default MovieDetails