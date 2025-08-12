import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import { Link } from 'react-router-dom';

function Player() {

  let {movieId} = useParams();
  const [videoData, setVideoData] = useState({
    name:"",
    key:"",
    published_at:"",
    typeof: ""
  });

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${import.meta.env.VITE_API_BEARER_ACCESS_KEY}`
    }
  };

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, options)
      .then(res => res.json())
      .then(res =>
        {
          if(res.results && res.results.length >0){
            const trailer = res.results.find( video =>
              video.type === "Trailer"
            ) || res.results[0];
            setVideoData(trailer)
          }
        } )
          
      .catch(err => console.error(err));
  }, [movieId])
  return (
    <div className="player">
      <Link to ={`/`}><img src={back_arrow_icon} alt=""/></Link>
      <iframe width='90%' height='90%' src={`https://www.youtube.com/embed/${videoData.key}`} title='trailer' allowFullScreen></iframe>
      <div className="player-info">
        <p>{moment(videoData.published_at).fromNow()}</p>
        <p>{videoData.name}</p>
        <p>{videoData.type}</p>
      </div>
    </div>
  )
}


export default Player;