import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';


class App extends Component {

  render() {
    return (
      <div className="App">
        <h1>Welcome!</h1>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // const { sequences1, sequences2Grid, autoCompleteCollection } = state.sequencesReducer;
  return {}
  // return {
  //   sequences1: sequences1,
  //   sequences2Grid: sequences2Grid,
  //   autoCompleteCollection: autoCompleteCollection
  // }
}
export default connect(mapStateToProps, null)(App);


