import React from 'react'
import { Route, Link } from 'react-router-dom'
import './Nav.css';


const Nav = () => {

  return (
    <header>

        <Route exact path="/"
          render={() => 
            <Link to={'/favorites'}>
              <p>favorites</p>
            </Link>
          }
        />

        <Route exact path="/favorites"
          render={() => 
            <Link to={'/'}>
              <p>home</p>
            </Link>
          }
        />

    </header>
  )
}



export default Nav
