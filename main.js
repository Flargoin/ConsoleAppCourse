"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели','');

    while( numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms) ) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели','');
    }
}

start();

function detectPersonalLevel() {
    if (numberOfFilms < 10) {
        console.log('Просмотрено довольно мало фильмов');
    } else if (numberOfFilms === 10 && numberOfFilms <= 30) {
        console.log('Вы классический зритель');
    } else if (numberOfFilms > 30) {
        console.log('Вы киноман');
    } else {
        console.log ('Произошла ошибка');
    }
}

detectPersonalLevel();

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function showMyDB() {
    if (personalMovieDB.privat === false) {
        console.log(personalMovieDB);
    }
}

showMyDB();

function rememberMyFilms() {
   for( let i = 0; i < 2; i++) {
    const lastMovie = prompt('Один из последних просмотренных фильмов?', ''),
          rating = prompt('На сколько оцените его?', '');

    if( lastMovie != null && rating != null && lastMovie != '' && rating != '' && lastMovie.length <= 50 ) {
        personalMovieDB.movies[lastMovie] = rating;
        console.log('Успешно');
    } else {
        console.log ('Произошла ошибка. Введите данные, название фильма не должно превышать 50 символов');
    }
  } 
}
rememberMyFilms();

function writeYourGenres() {
    for ( let i = 1; i < 4; i++ ) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`, '');
    }
}

writeYourGenres();



