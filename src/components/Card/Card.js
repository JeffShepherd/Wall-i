import React from 'react'
import './Card.css'

const Card = ({ url, altDescription, id, updateFavorites }) => {

  
  return (
    <article className="card">
      <img className="card-image" src={url} alt={altDescription}/>
      <p id={id} onClick={(event) => updateFavorites(event.target.id)}>add to favorites</p>
    </article>
  )

}

export default Card