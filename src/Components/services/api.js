import axios from "axios";

const apiKey = '4468f2edfc46f46a87b22906b9351926';
const url = 'https://api.themoviedb.org/3';
const nowPlayingUrl = `${url}/movie/now_playing`;
// const topratedUrl = `${url}/movie/top_rated`;
// const movieUrl = `${url}/movie`;
// const genreUrl = `${url}/genre/movie/list`;
// const moviesUrl = `${url}/discover/movie`;
// const personUrl = `${url}/trending/person/week`;

export const fetchMovies = async () => {
    try {
        const { data } = await axios.get(nowPlayingUrl, {
            params: {
                api_key: apiKey,
                language: 'en_US',
                page: 1
            }
        })

        const posterUrl = 'https://image.tmdb.org/t/p/original/';
        const modifiedData = data['results'].map((m) => ({
            id: m['id'],
            backPoster: posterUrl + m['backdrop_path'],
            popularity: m['popularith'],
            title: m['title'],
            poster: posterUrl + m['poster_path'],
            overview: m['overview'],
            rating: m['vote_average'],
        }))

        return modifiedData;
    } catch (error) { }
}
console.log(fetchMovies())
// export const getMovieByGenre = async (genre) => {
//   try {
//     const response = await axios.get(
//       process.env.REACT_APP_BASE_URL + `advertisements/${category}.json`
//     );
//     return response.data;
//   } catch (error) {
//     console.log(error);
//   }
  
// };



// export function fetchMoviess () {
//   if (refs.input.value) {
//     search.searchFilms(refs.input.value, page).then(data => {
//       insertItems(data);
//       toggleChosen();
//     });
//   } else {
//     fetch(
//       `https://api.themoviedb.org/3/trending/movie/day?api_key=${refs.key}&page=` +
//         page +
//         `&language=${languageData.fetchLanguage}`,
//     )
//       .then(res => res.json())
//       .then(data => {
//         insertItems(data);
//         toggleChosen();
//       });
//   }
// }

// // -------------------------------------------------------------------------------------
// import '@pnotify/core/dist/PNotify.css';
// import '@pnotify/core/dist/BrightTheme.css';
// import { error } from '@pnotify/core';
// import filmTpl from '../../templates/movies.hbs';
// import removeLoader from '../loader/remove-loader.js';
// import { genres } from '../../index.js';
// import multi from '../../templates/mulltipage.hbs';
// import after4 from '../../templates/after4page.hbs';
// import { refs } from '../main/searchPrint';
// import search from '../main/searchByName';
// import { languageData } from '../language-set/language-set.js';
// export let page = 1;
// let pageNext;
// let pageNext2;
// let pagePrev;
// let pagePrev2;
// let pageNext20;



// export function insertItems (film) {
//   if (film.results.length === 0&&languageData.language === 'EN') {
//     error({
//       title: 'Film not found.',
//       text: 'Check film name and try again.',
//       delay: 3000,
//       closerHover: true,
//     });
//     return
//   } else if(film.results.length === 0&&languageData.language === 'RU'){
//   error({
//       title: '?????????? ???? ????????????.',
//       text: '?????????????????? ???????????????????????? ?????????? ?? ?????????????????? ??????????',
//       delay: 3000,
//       closerHover: true,
//     });
//     return
//   }
//   const markup = film.results
//     .map(item => {
//       let movieGenres = [];
//       item.genre_ids.forEach(element => {
//         const genreName = genres.find(item => item.id === element);
//         movieGenres.push(genreName.name);
//       });
//       item.genre_ids = movieGenres;
//       item.vote_average = item.vote_average.toFixed(1);
//       item.release_date = parseInt(item.release_date);
//       return filmTpl(item);
//     })
//     .join('');
//   refs.galleryCont.innerHTML = markup;
//   removeLoader();
// }

// export function fetchGenres () {
//   const genreListUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${refs.key}&language=${languageData.fetchLanguage}`;
//   return fetch(genreListUrl)
//     .then(res => res.json())
//     .then(data => data.genres)
//     .catch(err => console.log(err));
// }

// let pageDiv = document.querySelector('#pagDiv');

// function pagMarkup () {
//   pageNext20 = page + 19;

//   if (page <= 4) {
//     pageDiv.innerHTML = multi({ pageNext20 });
//   }
//   if (page > 4) {
//     pageNext = page + 1;
//     pageNext2 = page + 2;
//     pagePrev = page - 1;
//     pagePrev2 = page - 2;
//     pageDiv.innerHTML = after4({
//       page,
//       pageNext,
//       pageNext2,
//       pagePrev,
//       pagePrev2,
//       pageNext20,
//     });
//   }
//   let incPage = document.querySelector('#inc');
//   incPage.addEventListener('click', increment);
//   let decPage = document.querySelector('#dec');
//   decPage.addEventListener('click', decrement);
// }

// function increment () {
//   page += 1;
//   fetchMovies();
//   pagMarkup();
// }

// function decrement () {
//   if (page > 1) {
//     page -= 1;
//     fetchMovies();
//     pagMarkup();
//   }
// }

// function toggleChosen () {
//   let allPagLinks = document.querySelector('#pagDiv').getElementsByTagName('*');

//   allPagLinks.forEach(item => {
//     if (parseInt(item.innerHTML) === page) {
//       item.classList.add('active-page');
//     }
//   });
// }

// function choosePage (event) {
//   if (event.target.nodeName === 'A') {
//     page = parseInt(event.target.innerHTML);
//     fetchMovies();
//     pagMarkup();
//   }
// }

// pagMarkup();

// document.querySelector('#pagDiv').addEventListener('click', choosePage);
