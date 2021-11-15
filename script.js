'use strict';

let numberOfFilms;

function start(){
    do {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
    while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms));
}
start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function detectQuestionMovi(){
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
              b = prompt('На сколько оцените его?', '');
    
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
}
detectQuestionMovi();

function detectMoviSkill() {
    if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка");
    }
}
detectMoviSkill();

function showMyDB(){
    if (!personalMovieDB.privat){
        console.log(personalMovieDB);
    }
}


function writeYourGenres(){
    
    for (let i = 1; i < 4; i++){
        personalMovieDB.genres.push(prompt(`Ваш любимый жанр под номером ${i}`));    
    }
}
