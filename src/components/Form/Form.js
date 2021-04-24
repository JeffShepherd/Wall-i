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

  render() {
    return (
      <form>
        <input type="search" onChange={event => this.handleChange(event.target.value)}/>
        <button>Search</button>
      </form>
    )
  }
}

export default Form