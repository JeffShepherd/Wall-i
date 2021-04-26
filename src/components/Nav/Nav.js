import React from 'react'
import { Route, Link } from 'react-router-dom'
import Form from '../Form/Form'
import './Nav.css';



const Nav = ({ searchForPictures, error, clearSearchResults }) => {

  return (
    <header className="header-container">

      <Route exact path="/" render={() => 
          <div className="header-element-container">
            <img className="icon" src='./assets/logo.png' alt="logo"/>
            {error && <p className="error-message">⚠️ {error}</p>}
            <div className="search-nav-container">
              <Form  searchForPictures={searchForPictures} />
              <Link to={'/favorites'}>
                <p className="favorite-link">Favorites</p>
              </Link>
            </div>
          </div>
        }
      />

      <Route exact path="/favorites" render={() =>
          <div className="header-element-container">
            <img className="icon" src='./assets/logo.png'  alt="logo"/>
            {error && <p className="error-message">⚠️ {error}</p>}
            <div className="search-nav-container">
              <Form searchForPictures={searchForPictures} />
              <Link to={'/'}>
                <p className="home-link" onClick={() => clearSearchResults()}>Home</p>
              </Link>
            </div>
          </div>
        }
      />

    </header>
  )
}



export default Nav
