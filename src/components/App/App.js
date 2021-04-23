import React, {Component} from 'react'
import { Route } from 'react-router-dom'
import './App.css';
import Nav from '../Nav/Nav'
import LandingPage from '../LandingPage/LandingPage'
import Favorites from '../Favorites/Favorites'

class App extends Component {
  constructor() {
    super()

    this.state = {
      test: ''
    }
  }

  render() {
    return (
      <main>
        <Nav />
        <Route exact path="/"
          render={() => <LandingPage />}
        />
        <Route exact path="/favorites"
          render={() => <Favorites />}
        />
        
      </main>
    )
  }

}


export default App;
