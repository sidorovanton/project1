let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели ?","");
let personalMovieDB = {
    count: numberOfFilms,
    movie: {},
    actors: {},
    genres: [],
    privat: false
};

let lastFilm = prompt("Какой последний фильм смотрели?"),
    raiting = prompt("Какую оценку поставите фильму ?");
  
personalMovieDB.movie[lastFilm] = raiting;
console.log(personalMovieDB);

