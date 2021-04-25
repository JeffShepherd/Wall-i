import React from 'react'
import './Card.css'

const Card = ({ url, altDescription, id, updateFavorites }) => {

  
  return (
    <article className="card">
      <img className="card-image" src={url} alt={altDescription}/>
      <button className="favorite-button" id={id} onClick={(event) => updateFavorites(event)}>add to favorites</button>
    </article>
  )

}

export default Card