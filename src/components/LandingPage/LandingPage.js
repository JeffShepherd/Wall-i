import React from 'react'
import './LandingPage.css'
import Card from '../Card/Card'


const LandingPage = ({ randomPhoto, searchResults, updateFavorites }) => {

  const searchCards = searchResults.map(result => {
    return (
      <Card
        key={result.id}
        updateFavorites={updateFavorites}
        url={result.url}
        altDescription={result.altDescription}
        id={result.id}
      />
    )
  })


  return (
    
    <section className="landing-view" >

      {!searchResults.length && 
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

