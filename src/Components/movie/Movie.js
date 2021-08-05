import React from 'react';
const imgStyle = {
    height: '40px',
    width:'40px'
}
const IMG_API = 'https://image.tmdb.org/t/p/w1280';
const Movie = ({ title, poster_path, overview, vote_average, year, genres, backPoster,genresArr }) => {
//  console.log(genresArr.filter(({ id, name }) => 
//     genres.includes(id) ? name : '').map(({id,name}) => name).reduce((acc,item) => `${acc} ${item} ${acc}`,'жанр: '))
    return (
        <div className='movie'>
            <img style={imgStyle} src={IMG_API + backPoster} alt={title} />
                <div className="product__content">
                <h2 className="movie__title">{title}</h2>
                <span className='movie__year'>{year}</span>
                <p class="movie__genre">{genresArr.filter(({ id, name }) => 
    genres.includes(id) ? name : '').map(({id,name}) => name).reduce((acc,item) => acc + item + ' ','жанр: ')}</p>
                </div>
    </div>
    )
}
export default Movie;

