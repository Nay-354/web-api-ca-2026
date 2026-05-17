import express from 'express';
import asyncHandler from 'express-async-handler';
import { getMovies } from '../tmdb-api'; 
import { getMovie } from '../tmdb-api'; 
import { getUpcomingMovies } from '../tmdb-api'; 
import { getPopularMovies } from '../tmdb-api'; 
import { getGenres } from '../tmdb-api'; 
import { getImages } from '../tmdb-api'; 

const router = express.Router();

router.get('/discover', asyncHandler(async (req, res) => {
    const discoverMovies = await getMovies();
    res.status(200).json(discoverMovies);
}));

router.get('/single', asyncHandler(async (req, res) => {
    const singleMovie = await getMovie();
    res.status(200).json(singleMovie);
}));


router.get('/upcoming', asyncHandler(async (req, res) => {
    const upcomingMovies = await getUpcomingMovies();
    res.status(200).json(upcomingMovies);
}));

router.get('/popular', asyncHandler(async (req, res) => {
    const popularMovies = await getPopularMovies();
    res.status(200).json(popularMovies);
}));

router.get('/genres', asyncHandler(async (req, res) => {
    const movieGenres = await getGenres();
    res.status(200).json(movieGenres);
}));

router.get('/images', asyncHandler(async (req, res) => {
    const movieImages = await getImages();
    res.status(200).json(movieImages);
}));


export default router;