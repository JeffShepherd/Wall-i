import React from 'react'
import './LandingPage.css'
import PropTypes from 'prop-types'
import Card from '../Card/Card'


const LandingPage = ({ randomPhoto, searchResults, updateFavorites, message, favorites }) => {

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


  return (
    
    <section className="landing-view" >

      {message && <p className="search-message">{message}</p>}

      {!searchResults.length && !message && 
        <section className="random-image-container">
          <img className="random-image" 
            id={randomPhoto.id}
            src={randomPhoto.url} 
            alt={randomPhoto.altDescription}
          />
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
  favorites: PropTypes.array
};

