import React from 'react'
import './LandingPage.css'
import PropTypes from 'prop-types'
import Card from '../Card/Card'


const LandingPage = ({ randomPhoto, searchResults, updateFavorites, message, favorites, updateFavoritesForRandom }) => {

  const searchCards = searchResults.map(result => {
    return (
      <Card
        key={result.id}
        updateFavorites={updateFavorites}
        url={result.url}
        altDescription={result.altDescription}
        id={result.id}
        favorites={favorites}
      />
    )
  })

    const returnClass = () => {
      if(randomPhoto === {} || !favorites.length){
        return 'random-favorite-button random-favorite-button-white'
      }

      const matches = favorites.filter(fav => randomPhoto.id === fav.id)
  
      if(matches.length) {
        return 'random-favorite-button random-favorite-button-red'
      } else {
        return 'random-favorite-button random-favorite-button-white'
      }
    }

  return (
    
    <section className="landing-view" >

      {message && <p className="search-message">{message}</p>}

      {!searchResults.length && !message && 
        <section className="random-image-container">
          <div className="overlay-container">
            <button className="get-random-button">get another random image</button>
            <img className="random-image" 
              id={randomPhoto.id}
              src={randomPhoto.url} 
              alt={randomPhoto.altDescription}
            />
            <button className={returnClass()} id={randomPhoto.id} onClick={(event) => updateFavoritesForRandom(event)}>❤</button>
          </div>
        </section>
      }

      {searchResults.length &&
        <section className='card-container'>
          {searchCards}
        </section>
      }
      
    </section>
    
  )
}

export default LandingPage

LandingPage.propTypes = {
  message: PropTypes.string,
  updateFavorites: PropTypes.func,
  randomPhoto: PropTypes.object,
  searchResults: PropTypes.array,
  favorites: PropTypes.array,
  updateFavoritesForRandom: PropTypes.func
};

