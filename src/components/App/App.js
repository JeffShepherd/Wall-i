import React, {Component} from 'react'
import './App.css';
import Nav from '../Nav/Nav'

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
      </>
    )
  }

}


export default App;
