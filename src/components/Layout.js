import React, { Component } from 'react'
import Navbar from './NavBar'
import Footer from './Footer.jsx'
export default class Layout extends Component {
  
  constructor(){
    super()
    this.state = {
      styles: {
        marginTop: 0
      }
    };
  }

  setHeight = () => {
    this.setState({styles:{
      marginTop: document.getElementsByClassName("Navbar")[0].offsetHeight
    }})
  }
  
  componentDidMount() {
    this.setHeight();
    window.addEventListener("resize", this.setHeight);
  }


  render() {
    return (
      <div>
        <Navbar/>
        <div style={this.state.styles}>
          {this.props.children}
        </div>
        <Footer/>
      </div>
    )
  }
}