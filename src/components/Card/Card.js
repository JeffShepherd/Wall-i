import React from 'react'
import './Card.css'

const Card = ({ url, altDescription, id, updateFavorites, favorites }) => {

  // const returnClass = () => {
  //   const 
  // }

  // const test = favorites.filter(fav => id === fav.id)

    // if(test.length) {
    //   heartButton = <button className="favorite-button" id={id} onClick={(event) => updateFavorites(event)}>❤</button>
    // } else {
    //   heartButton = <button className="favorite-button" id={id} onClick={(event) => updateFavorites(event)}>♡</button>
    // }
    
  return (
    <article className="card">
      <img className="card-image" src={url} alt={altDescription}/>
      <button className={returnClass()} id={id} onClick={(event) => updateFavorites(event)}>❤</button>
    </article>
  )

}

export default Card