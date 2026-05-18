import express from 'express';
import asyncHandler from 'express-async-handler';
import { getMovies } from '../tmdb-api'; 
import { getMovie } from '../tmdb-api'; 
import { getUpcomingMovies } from '../tmdb-api'; 
import { getPopularMovies } from '../tmdb-api'; 
import { getGenres } from '../tmdb-api'; 
import { getMovieImages } from '../tmdb-api'; 
import { getMovieReviews } from '../tmdb-api'; 
import { getTopRatedMovies } from '../tmdb-api'; 
import { getNowPlayingMovies } from '../tmdb-api'; 
import { getActor } from '../tmdb-api'; 
import { getActorImages } from '../tmdb-api'; 
import { getActors } from '../tmdb-api'; 
import { getMovieRecommendations } from '../tmdb-api'; 

const router = express.Router();

router.get('/discover', asyncHandler(async (req, res) => {
    const discoverMovies = await getMovies();
    res.status(200).json(discoverMovies);
}));

router.get('/movie', asyncHandler(async (req, res) => {
    const singleMovie = await getMovie(req.query.id);
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
    const movieImages = await getMovieImages(req.query.id);
    res.status(200).json(movieImages);
}));

router.get('/reviews', asyncHandler(async (req, res) => {
    const movieReviews = await getMovieReviews(req.query.id);
    res.status(200).json(movieReviews);
}));

router.get('/top-rated', asyncHandler(async (req, res) => {
    const topRatedMovies = await getTopRatedMovies();
    res.status(200).json(topRatedMovies);
}));

router.get('/now-playing', asyncHandler(async (req, res) => {
    const nowPlayingMovies = await getNowPlayingMovies();
    res.status(200).json(nowPlayingMovies);
}));

router.get('/actor', asyncHandler(async (req, res) => {
    const singleActor = await getActor(req.query.id);
    res.status(200).json(singleActor);
}));

router.get('/actor-images', asyncHandler(async (req, res) => {
    const actorImages = await getActorImages(req.query.id);
    res.status(200).json(actorImages);
}));

router.get('/discover-actors', asyncHandler(async (req, res) => {
    const actors = await getActors();
    res.status(200).json(actors);
}));

export default router;