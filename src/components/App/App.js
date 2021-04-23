import React, {Component} from 'react'
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
        <LandingPage />
        <Favorites />
      </main>
    )
  }

}


export default App;
