import React, { Component } from 'react'
import './Form.css'

class Form extends Component {
  constructor() {
    super()

    this.state = {
      searchQuery: ''
    }

  }

  render() {
    return (
      <form>
        <input type="search"/>
        <button>Search</button>
      </form>
    )
  }
}

export default Form