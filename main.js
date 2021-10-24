"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели','');

if (numberOfFilms < 10) {
    console.log('Просмотрено довольно мало фильмов');
} else if (numberOfFilms === 10 && numberOfFilms <= 30) {
    console.log('Вы классический зритель');
} else if (numberOfFilms > 30) {
    console.log('Вы киноман');
} else {
    console.log ('Произошла ошибка');
}

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


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



console.log(personalMovieDB);


