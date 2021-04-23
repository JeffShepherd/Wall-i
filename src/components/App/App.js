import React, {Component} from 'react'
import './App.css';
import Nav from '../Nav/Nav'
import LandingPage from '../LandingPage/LandingPage'

class App extends Component {
  constructor() {
    super()

    this.state = {
      test: ''
    }
  }

  render() {
    return (
      <>

      <p>test</p>
      <Nav />
      <LandingPage />
      </>
    )
  }

}


export default App;
