import React from 'react'
import PropTypes from 'prop-types'
import Card from '../Card/Card'
import './Favorites.css'


const Favorites = ({ favorites, updateFavorites }) => {

  const favoriteCards = favorites.map(favorite => {
    return (
      <Card
        key={favorite.id}
        updateFavorites={updateFavorites}
        url={favorite.url}
        altDescription={favorite.altDescription}
        id={favorite.id}
        favorites={favorites}
      />
    )
  })

  return (
    <section className="favorites-view">
      {!favorites.length && <p className="favorites-message">No favorites added yet!</p>}
      {favoriteCards}
    </section>
  )
}

export default Favorites;

Favorites.propTypes = {
  updateFavorites: PropTypes.func,
  favorites: PropTypes.array
};