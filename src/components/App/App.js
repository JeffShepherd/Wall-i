import React, {Component} from 'react'
import { Route } from 'react-router-dom'
import './App.css';
import Nav from '../Nav/Nav'
import LandingPage from '../LandingPage/LandingPage'
import Favorites from '../Favorites/Favorites'
import { scrubRandomData, scrubSearchData } from '../utilities.js';

class App extends Component {
  constructor() {
    super()

    this.state = {
      randomPhoto: '',
      searchResults: [],
      favorites: []
    }
  }

  componentDidMount() {
    fetch(`https://api.unsplash.com/photos/random/?client_id=${process.env.REACT_APP_KEY}&orientation=squarish`)
      .then(response => response.json())
      .then(x => scrubRandomData(x))
      .then(data => this.setState({randomPhoto: data}))
      .catch(error => console.log(error))
  }

  searchForPictures = (searchValue) => {
    fetch(`https://api.unsplash.com/search/photos/?client_id=${process.env.REACT_APP_KEY}&query=${searchValue}&orientation=portrait`)
      .then(response => response.json())
      .then(x => scrubSearchData(x))
      .then(data => this.setState({searchResults: data}))
      .catch(error => console.log(error))
  }

  updateFavorites = (id) => {
    if(!this.state.favorites.length) {
      this.addFavorite(id)
    } else if(this.checkIfFavorite(id)) {
      this.removeFavorite(id)
    } else {
      this.addFavorite(id)
    }
  }

  checkIfFavorite = (id) => {
    if(this.state.favorites.filter(fav => id === fav.id).length) {
      return true
    }
    return false
  }

  addFavorite = (id) => {
    const newFavorite = this.state.searchResults.find(result => id === result.id)
    this.setState({favorites: [newFavorite, ...this.state.favorites]})
  }

  removeFavorite = (id) => {
    const newFavorites = this.state.searchResults.filter(result => id !== result.id)
    this.setState({favorites: newFavorites})
  }

  render() {
    return (
      <main>

        <Nav searchForPictures={this.searchForPictures}/>

        <Route exact path="/"
          render={() => 
            <LandingPage searchResults={this.state.searchResults} randomPhoto={this.state.randomPhoto}/>
          }
        />

        <Route exact path="/favorites"
          render={() => 
            <Favorites />
          }
        />
        
      </main>
    )
  }

}


export default App;
