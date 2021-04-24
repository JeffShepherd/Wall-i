import React from 'react'
import './Card.css'

const Card = ({ url, altDescription }) => {

  
  return (
    <article className="card">
      <img className="card-image" src={url} alt={altDescription}/>
      <p>test</p>
    </article>
  )

}

export default Card