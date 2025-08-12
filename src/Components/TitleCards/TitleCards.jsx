import './TitleCards.css'
import cards_data from '../../assets/cards/Cards_data.js'
import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';



function TitleCards({ title, category }) {
  
  const [apiData, setApiData] = useState([]);
  const cardRef = useRef();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${import.meta.env.VITE_API_BEARER_ACCESS_KEY}`
    }
  };

  const handleWheel = (event) => {
    event.preventDefault();
    const delta = event.deltaY !== 0 ? event.deltaY : event.deltaX;
    cardRef.current.scrollLeft += delta;
  }

  useEffect(() => {

    fetch(`https://api.themoviedb.org/3/movie/${category?category : "now_playing"}?language=en-US&page=1`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results))
    .catch(err => console.error(err));

    cardRef.current.addEventListener('wheel', handleWheel, { passive: false })
  }, [category])

  return (
    <div className="title-cards">
      <h2>{title ? title : "Popular on Netflix"}</h2>
      <div className="card-list" ref={cardRef}>
        {
          apiData?.map((card, index) => (
             <Link to={`/player/${card?.id}`} key={index} className="card">
              <img src={`https://image.tmdb.org/t/p/w500/${card.backdrop_path}`} alt="" />
              <p>{card.original_title}</p>
            </Link>
          )) 
        }
      </div>
    </div>
  )
}

export default TitleCards;