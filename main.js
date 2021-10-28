"use strict";

let personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели','');
    
        while( personalMovieDB.count == "" || personalMovieDB.count == null || isNaN(personalMovieDB.count) ) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели','');
        }
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            console.log('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count === 10 && personalMovieDB.count <= 30) {
            console.log('Вы классический зритель');
        } else if (personalMovieDB.count > 30) {
            console.log('Вы киноман');
        } else {
            console.log ('Произошла ошибка');
        }
    },
    showMyDB: function () {
        if (personalMovieDB.privat === false) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function() {
        if(personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    rememberMyFilms: function () {
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
     },
     writeYourGenres: function() {
        for ( let i = 1; i < 4; i++ ) {
            let genre = prompt(`Ваш любимый жанр под номером ${i}`, '');
            
            if(genre === '' || genre === null) {
                console.log('Вы ввели некорректные данные или не ввели их вовсе');
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genre;
            }
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i+1} - это ${item}`);
        });
    },
};

