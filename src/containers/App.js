import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Form from '../components/Form';
import DisplayTable from '../components/DisplayTable';
import {connect} from 'react-redux';
import {initiateSession, loadAutoComplete} from '../actions/index';

class App extends Component {

  componentDidMount() {
    this.props.initiateSession();
  }

  render() {
    const {sequences, loadAutoComplete, autoCompleteCollection} = this.props;

    return (
      <div className="App">
        <Form 
          loadAutoComplete={loadAutoComplete} 
          autoCompleteCollection={autoCompleteCollection}
        />
        <DisplayTable sequences={sequences} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { sequences, autoCompleteCollection } = state.sequencesReducer;
  return {
    sequences: sequences,
    autoCompleteCollection: autoCompleteCollection
  }
}

export default connect(mapStateToProps, {initiateSession, loadAutoComplete})(App);
