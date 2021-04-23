import React from 'react'
import './LandingPage.css'


const LandingPage = ({ randomPhoto }) => {
console.log()

  return (
    <section className="landing-view" >
      <img className="random-image" 
      src={`${randomPhoto.url}`} 
      alt={`${randomPhoto.altDescription}`}
      />
      
    </section>
  )
}

export default LandingPage

