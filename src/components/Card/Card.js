import React from 'react'
import './Card.css'

const Card = ({ url, altDescription, id }) => {

  
  return (
    <article className="card">
      <img className="card-image" src={url} alt={altDescription} id={id}/>
      <p>test</p>
    </article>
  )

}

export default Card