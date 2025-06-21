import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieDetails from "./components/MovieDetails.jsx";
import TrendingMovieDetails from "./components/TrendingMovieDetails.jsx";
import PageNotFound from "./components/PageNotFound.js";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/movieDetails/:id" element={<MovieDetails />} />
        <Route path="/trendingMovieDetails/:id" element={<TrendingMovieDetails />} />
        <Route path="/" element={<App />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
