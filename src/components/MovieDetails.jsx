import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import MovieInfo from "./MovieInfo";

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
          <div className="flex flex-row gap-2">
            <p className="font-dm-sans text-[#A8B5DB] mt-2 text-2xl">Release Date:</p>
            <p className="font-dm-sans text-[#FFFFFF] mt-2 text-2xl">{movie.release_date}</p>
          </div>

          <div className="flex flex-row gap-2">
            <p className="font-dm-sans text-[#A8B5DB] mt-2 text-2xl">Duration:</p>
            <p className="font-dm-sans text-[#FFFFFF] mt-2 text-2xl">{movie.runtime}</p>
          </div>

          <div className="flex flex-row mt-4 bg-gray-500 w-[190px] h-[40px] rounded-lg pl-2 py-1">
              <img src="/star.svg" className="w-[25px] h-[29px] pt-1 pb-0.5" />
              <p className="font-dm-sans text-white text-2xl ml-2">{movie.vote_average ? `${Math.round(movie.vote_average)}/10` : "N/A"}</p>
              <p className="font-dm-sans text-[#A8B5DB] text-2xl ml-2">{movie.vote_count ? `(${movie.vote_count})` : ""}</p>
          </div>

          <MovieInfo label="Overview" value={movie.overview ? movie.overview : "N/A"} />

          <div className="flex flex-row gap-10">
            <MovieInfo label="Budget" value={movie.budget ? `$ ${movie.budget/1_000_000} Million` : "N/A"} />
            <MovieInfo label="Revenue" value={movie.revenue ? `$ ${Math.round(movie.revenue/1_000_000)} Million` : "N/A"} />
          </div>

          <MovieInfo label="Genres" value={movie.genres ? movie.genres.map((g) => g.name).join(" - ") : "N/A"} />

          <MovieInfo label="Production Companies" value={movie.production_companies ? movie.production_companies.map((c) => c.name).join(" - ") : "N/A"} />
          
          <MovieInfo label="Tagline" value={movie.tagline ? movie.tagline : "N/A"} />
        </div>
      </div>


    </div>
  )
}

export default MovieDetails