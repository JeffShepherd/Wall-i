import React from 'react'
import './LandingPage.css'
import Card from '../Card/Card'


const LandingPage = ({ randomPhoto, searchResults }) => {

  const searchCards = searchResults.map(result => {
    return (
      <Card
        url={result.url}
        altDescription={result.altDescription}
      />
    )
  })


  return (
    
    <section className="landing-view" >

      {!searchResults.length && 
        <section className="random-image-container">
          <img className="random-image" 
            src={`${randomPhoto.url}`} 
            alt={`${randomPhoto.altDescription}`}
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

