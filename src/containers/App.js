import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Form from '../components/Form';
import DisplayTable from '../components/DisplayTable';
import {connect} from 'react-redux';
import {initiateSession, loadAutoComplete, search} from '../actions/index';
import { CSVLink } from 'react-csv';


class App extends Component {

  componentDidMount() {
    this.props.initiateSession();
  }

  render() {
    const {sequences, loadAutoComplete, autoCompleteCollection, search} = this.props;

    return (
      <div className="App">
        <Form 
          search={search}
          loadAutoComplete={loadAutoComplete} 
          autoCompleteCollection={autoCompleteCollection}
        />
        <DisplayTable sequences={sequences} />
        
        <CSVLink data={sequences} >Download Search Result</CSVLink>
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
export default connect(mapStateToProps, {initiateSession, loadAutoComplete, search})(App);
