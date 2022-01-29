import React ,{useState, useEffect} from 'react';
import axios from './axios'
import requests from './requests'
import './Front.css';

function Front() {
  const [movie, setmovie] = useState([]);
  useEffect(()=>{
    async function fetchdata(){
        const request = await axios.get(requests.fetchTrending);
        const index = Math.floor(Math.random() * request.data.results.length - 1)
        setmovie(request.data.results[index]);
    }
    fetchdata();
  },[]);

  function truncate(str,n){
      return str?.length > n ? str.substr(0,n-1) + '...' : str;
  }

  return (
      <header className = 'banner'
        style={{
            backgroundSize : 'cover',
            backgroundImage : `url(
                'https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
            backgroundPosition : 'center center'
        }}
      >
          
          <div className = 'banner_contents'>
            <h1 className = 'banner_title'>{
                movie?.title||movie?.name || movie?.original_name
                }</h1>
            <div className = 'banner_btns'>
                <button className = 'banner_btn'>PLAY</button>
                <button className = 'banner_btn'>MY LIST</button>
            </div>
            <h1 className = 'banner_desc'>{truncate(movie?.overview, 150)}</h1>
          </div>
            <div className = 'banner_fade'>
                
            </div>
      </header>
  );

}

export default Front;

