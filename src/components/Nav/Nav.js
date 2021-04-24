import React from 'react'
import { Route, Link } from 'react-router-dom'
import Form from '../Form/Form'
import './Nav.css';
import landscape from '../../icons/landscape.png'



const Nav = () => {

  return (
    <header>

      <Route exact path="/" render={() => 
          <div>
            <img className="icon" src={landscape}/>
            <Form />
            <Link to={'/favorites'}>
              <p>favorites</p>
            </Link>
          </div>
        }
      />

      <Route exact path="/favorites" render={() =>
          <div>
            <img className="icon" src={landscape}/>
            <Form />
            <Link to={'/'}>
              <p>home</p>
            </Link>
          </div>
        }
      />

    </header>
  )
}



export default Nav
