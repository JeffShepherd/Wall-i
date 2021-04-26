import React from 'react'
import PropTypes from 'prop-types'
import './Card.css'

const Card = ({ url, altDescription, id, updateFavorites, favorites, download, name }) => {

  const returnClass = () => {
    console.log('download', download)
    console.log('name', name)
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
      <button title="favorite/unfavorite" 
        className={returnClass()} 
        id={id} 
        onClick={(event) => updateFavorites(event)}
      >❤</button>
      <p className="photographer">photographer: {name}</p>
      <a title="download" href={download} className="download-button">⬇</a>
    </article>
  )

}

export default Card

Card.propTypes = {
  url: PropTypes.string,
  altDescription: PropTypes.string,
  id: PropTypes.string,
  updateFavorites: PropTypes.func,
  favorites: PropTypes.array,
  download: PropTypes.string,
  name: PropTypes.string
};
