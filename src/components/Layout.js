import React, { Component } from 'react'
import Navbar from './NavBar'

export default class Layout extends Component {
  
  constructor(){
    super()
    this.state = this.getInitialState();
  }

  getInitialState() {
    return {
      styles: {
        marginTop: 0
      }
    };
  }
  
  componentDidMount() {
    this.setState({
      styles: {
        marginTop: this.getNavbarHeight()
      }
    })
  }

  getNavbarHeight() {
    return document.getElementsByClassName("Navbar")[0].offsetHeight
  }

  render() {
    return (
      <div>
        <Navbar/>
        <div style={this.state.styles}>
          {this.props.children}
        </div>
        
      </div>
    )
  }
}