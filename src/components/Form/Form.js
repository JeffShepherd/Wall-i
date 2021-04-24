import React, { Component } from 'react'
import './Form.css'

class Form extends Component {
  constructor() {
    super()

    this.state = {
      searchQuery: ''
    }
  }

  handleChange = (searchValue) => {
    this.setState({searchQuery: searchValue})
  }

  submitSearch = (event) => {
    event.preventDefault(event)
    this.props.searchForPictures(this.state.searchQuery)
  }

  render() {
    return (
      <form>
        <input type="search" onChange={event => this.handleChange(event.target.value)}/>
        <button onClick={(event) => this.submitSearch(event)}>Search</button>
      </form>
    )
  }
}

export default Form