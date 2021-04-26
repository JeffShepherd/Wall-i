import React from 'react'
import './Card.css'

const Card = ({ url, altDescription, id, updateFavorites, favorites }) => {

  const returnClass = () => {
    const matches = favorites.filter(fav => id === fav.id)

    if(matches.length) {
      return 'favorite-button favorite-button-red'
    } else {
      return 'favorite-button favorite-button-white'
    }
  }

    
  return (
    <article className="card">
      <img className="card-image" src={url} alt={altDescription}/>
      <button className={returnClass()} id={id} onClick={(event) => updateFavorites(event)}>❤</button>
    </article>
  )

}

export default Card