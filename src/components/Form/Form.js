import React, { Component } from 'react'
import { Link } from 'react-router-dom'
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
        <Link to={'/'}>
          <input type="submit" onClick={() => this.props.searchForPictures(this.state.searchQuery)}/>
        </Link>
      </form>
    )
  }
}

export default Form