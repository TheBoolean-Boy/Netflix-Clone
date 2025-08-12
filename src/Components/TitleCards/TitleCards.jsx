import './TitleCards.css'
import cards_data from '../../assets/cards/Cards_data.js'
import { useEffect, useRef } from 'react'



function TitleCards({title, category}) {
  const cardRef = useRef();

  const handleWheel = (event) => {
    event.preventDefault();
    const delta = event.deltaY !== 0 ? event.deltaY : event.deltaX;
    cardRef.current.scrollLeft += delta;
  }

  useEffect(() => {
    cardRef.current.addEventListener('wheel', handleWheel, {passive: false})
  }, [])

  return (
    <div className="title-cards">
      <h2>{title? title : "Popular on Netflix"}</h2>
      <div className="card-list" ref={cardRef}>
        {
          cards_data.map((card, index) => {
            return <div key={index} className="card">
              <img src={card.image} alt="" />
              <p>{card.name}</p>
            </div>
          })
        }
      </div>
    </div>
  )
}

export default TitleCards;