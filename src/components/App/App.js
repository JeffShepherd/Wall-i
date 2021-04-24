import React, {Component} from 'react'
import { Route } from 'react-router-dom'
import './App.css';
import Nav from '../Nav/Nav'
import LandingPage from '../LandingPage/LandingPage'
import Favorites from '../Favorites/Favorites'
import { scrubRandomData } from '../utilities.js';

class App extends Component {
  constructor() {
    super()

    this.state = {
      randomPhoto: '',
      searchResults: ''
    }
  }

  //DO NOT commit API KEY********
  componentDidMount() {
    fetch('')
      .then(response => response.json())
      .then(x => scrubRandomData(x))
      .then(data => this.setState({randomPhoto: data}))
      .catch(error => console.log(error))
  }

  render() {
    return (
      <main>

        <Nav />

        <Route exact path="/"
          render={() => 
            <LandingPage randomPhoto={this.state.randomPhoto}/>
          }
        />

        <Route exact path="/favorites"
          render={() => <Favorites />}
        />
        
      </main>
    )
  }

}


export default App;
