import React, {Component} from 'react'
import { Route } from 'react-router-dom'
import './App.css';
import Nav from '../Nav/Nav'
import LandingPage from '../LandingPage/LandingPage'
import Favorites from '../Favorites/Favorites'
import { getRandomPhoto, searchForPhotos } from '../../api.js';


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
    getRandomPhoto()
      .then(data => this.setState({randomPhoto: data}))
      .catch(error => console.log(error))
  }

  searchForPictures = (searchValue) => {
    searchForPhotos(searchValue)
      .then(data => this.setState({searchResults: data}))
      .catch(error => console.log(error))
  }

  updateFavorites = (event) => {
    event.preventDefault(event)
    const id = event.target.id

    if(!this.state.favorites.length) {
      console.log('a')
      this.addFavorite(id)
    } else if(this.checkIfFavorite(id)) {
      console.log('b')
      this.removeFavorite(id)
    } else {
      console.log('c')
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
    console.log('new fav', newFavorite)
    console.log('updated favs', [newFavorite, ...this.state.favorites])//test only
    this.setState({favorites: [newFavorite, ...this.state.favorites]})
  }

  removeFavorite = (id) => {
    const newFavorites = this.state.favorites.filter(favorite => id !== favorite.id)
    console.log('minus fav', newFavorites)
    this.setState({favorites: newFavorites})
  }

  render() {
    return (
      <main>

        <Nav searchForPictures={this.searchForPictures}/>

        <Route exact path="/"
          render={() => 
            <LandingPage searchResults={this.state.searchResults} updateFavorites={this.updateFavorites} randomPhoto={this.state.randomPhoto}/>
          }
        />

        <Route exact path="/favorites"
          render={() => 
            <Favorites favorites={this.state.favorites} updateFavorites={this.updateFavorites}/>
          }
        />
        
      </main>
    )
  }

}


export default App;
