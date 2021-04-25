import React from 'react'
import './Favorites.css'
import Card from '../Card/Card'


const Favorites = ({ favorites, updateFavorites }) => {

  const favoriteCards = favorites.map(favorite => {
    return (
      <Card
        key={favorite.id}
        updateFavorites={updateFavorites}
        url={favorite.url}
        altDescription={favorite.altDescription}
        id={favorite.id}
      />
    )
  })

  return (
    <section className="favorites-view">
      {favoriteCards}
    </section>
  )
}

export default Favorites;