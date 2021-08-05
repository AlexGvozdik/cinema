import React, { useEffect, useState } from "react";
import axios from "axios";
import Movie from './movie/Movie';
const TRENDING_API = 'https://api.themoviedb.org/3/trending/movie/day?api_key=4468f2edfc46f46a87b22906b9351926'
const GENRES_API = 'https://api.themoviedb.org/3/genre/movie/list?api_key=4468f2edfc46f46a87b22906b9351926'
const apiKey = '4468f2edfc46f46a87b22906b9351926';
const url = 'https://api.themoviedb.org/3';
const genreUrl = `${url}/genre/movie/list`;
const moviesUrl = `${url}/discover/movie`;

function App() {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [currentPage,setCurrentPage] = useState(99);
  
  const fetchMovieByGenre = async (genre_id) => {
      try {
          const { data } = await axios.get(moviesUrl, {
              params: {
                  api_key: apiKey,
                  language: 'en_US',
                  page:currentPage,
                  with_genres: genre_id
              }
          })
        console.log(data.page)
        const posterUrl = 'https://image.tmdb.org/t/p/original/';
        const modifiedData = data['results'].map((m) => ({
            
              id: m['id'],
              backPoster: posterUrl + m['backdrop_path'],
              popularity: m['popularith'],
              title: m['title'],
              poster: posterUrl + m['poster_path'],
          overview: m['overview'],
              year:m['release_date'],
          rating: m['vote_average'],
          genres:m['genre_ids']
          }))
            console.log(modifiedData)
          return modifiedData;
          
      } catch (error) { }
  }
  const fetchGenre = async () => {
  try {
      const { data } = await axios.get(genreUrl, {
          params: {
              api_key: apiKey,
              language: 'en_US',
              page: 1
          }
      })
      const modifiedData = data['genres'].map((g) => ({
          id: g['id'],
          name: g['name']
      }))
      return modifiedData;
  } catch (error) { }
  }
  useEffect(() => {
    



    const fetchAPI = async () => {
      setMovies(await fetchMovieByGenre(28));
      setGenres(await fetchGenre())
    };

    fetchAPI();
  }, [])
  
  async function handler(e) {
    const valueGenre = e.target.value;
    const result = genres.filter(({ name }) => name === valueGenre);
    const idRes = result[0].id
    setMovies(await fetchMovieByGenre(idRes));

  }



  return (
    <>
      <header>
        <form  className='advForm'>
          <div className='advFormContent'>
            <div className='leftColumn'>
          
                <select
                  name='category'
                className='advFormInput'
                onChange={handler}
              >
                  {genres.map(({name}) => (
                    <option value={name} key={name}>
                      {name}
                    </option>
                  ))}
                </select>
                    </div>
                    </div>
                </form>
      </header>
      {movies.length > 0 &&
        movies.slice(0, 2).map(movie => <Movie genresArr={genres} key={movie.id} {...movie} />)}
      <div>
        <button onClick={() => setCurrentPage(prev => prev +1)}>NEXT</button>
      </div>
    </>
  );
};

export default App;