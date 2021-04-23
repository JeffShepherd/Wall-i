import React from 'react'
import './LandingPage.css'


const LandingPage = ({ randomPhoto }) => {


  return (
    <section className="landing-view" >
      <img className="random-image" 
      src={`${randomPhoto.urls.regular}`} 
      alt={`${randomPhoto.alt_description}`}
      />
      
    </section>
  )
}

export default LandingPage

