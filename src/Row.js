import React from 'react';
import {useState, useEffect} from 'react';
import axios from './axios'
import './Row.css'
import Youtube from 'react-youtube';
import MovieTrailer from 'movie-trailer'
function Row({title , fetchUrl, isLargeRow}) {
  const [movies, setmovies]  = useState([]);
  const img_url = "https://image.tmdb.org/t/p/original/";
  const [trailerUrl, settrailerUrl] = useState('');
  useEffect(()=>{
        async function fetchdata () { 
            const request = await axios.get(fetchUrl);
            setmovies(request.data.results);
            return request;
        }
        fetchdata();
        
  },[fetchUrl])

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleClick = (movie) =>{
    if(trailerUrl){
        settrailerUrl('');
    }
    else{
        MovieTrailer(movie?.name || movie?.original_name || movie?.title || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          settrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }  
  }
    return(
      <div className = 'row'>
         <h2>{title}</h2>
         <div className = 'row_posters'>
             {
                movies.map(movie => {
                     return(
                         <img key= {movie.id} 
                         src = {`${img_url}${
                             isLargeRow ?movie.poster_path : movie.backdrop_path}`} 
                         alt = {movie.title}
                         onClick={()=>{handleClick(movie)}} 
                         className = {`row_poster ${isLargeRow && 'row_posterLarge'}`}></img>    
                     );
                 })
             }
         </div>
         {trailerUrl && <Youtube videoId = {trailerUrl} opts = {opts}></Youtube>}
      </div> 
  );
}

export default Row;
