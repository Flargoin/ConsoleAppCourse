"use strict";

const numberOfFilms = +prompt('Сколько фильм вы уже посмотрели','');

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const lastMovie = prompt('Один из последних просмотренных фильмов?', '');
const rating = prompt('На сколько оцените его?', '');

const lastMovie1 = prompt('Один из последних просмотренных фильмов?', '');
const rating1 = prompt('На сколько оцените его?', '');

personalMovieDB.movies[lastMovie] = rating;
personalMovieDB.movies[lastMovie1] = rating1;

console.log(personalMovieDB);


