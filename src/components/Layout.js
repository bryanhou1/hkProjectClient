import React, { Component } from 'react'
import Navbar from './NavBar'

export default class NavBar extends Component {

  render() {
    return (
      <div>
        <Navbar />
        {this.props.children}
      </div>
    )
  }
}