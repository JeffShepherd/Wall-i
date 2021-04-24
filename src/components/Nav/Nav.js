import React from 'react'
import { Route, Link } from 'react-router-dom'
import Form from '../Form/Form'
import './Nav.css';
import landscape from '../../icons/landscape.png'



const Nav = () => {

  return (
    <header className="header-container">

      <Route exact path="/" render={() => 
          <div className="header-element-container">
            <img className="icon" src={landscape} alt="logo"/>  
            <div className="search-nav-container">
              <Form />
              <Link to={'/favorites'}>
                <p>favorites</p>
              </Link>
            </div>
          </div>
        }
      />

      <Route exact path="/favorites" render={() =>
          <div className="header-element-container">
            <img className="icon" src={landscape}  alt="logo"/>
            <div className="search-nav-container">
              <Form />
              <Link to={'/'}>
                <p>home</p>
              </Link>
            </div>
          </div>
        }
      />

    </header>
  )
}



export default Nav
