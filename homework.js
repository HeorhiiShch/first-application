"use strict"
const numbersOfMovies = +prompt("How many movies have you wached?", "");
let personalMovieDB = {
    count: numbersOfMovies,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
const lastWachedMovie = prompt("What was the last movie that you wach?", ""),
      markForMovie = +prompt("How can you rate it?", "");
personalMovieDB.movies[lastWachedMovie] = markForMovie;
console.log(personalMovieDB);