import React, { Component } from 'react';
import './App.css';
import Form from '../components/Form';
import DisplayTable from '../components/DisplayTable';
import {connect} from 'react-redux';
import {initiateSession, loadAutoComplete, search} from '../actions/index';
import { CSVLink } from 'react-csv';
import ReactDataSheet from 'react-datasheet';
import 'react-datasheet/lib/react-datasheet.css';

class App extends Component {

  componentDidMount() {
    this.props.initiateSession();
  }

  render() {
    const {sequences1, loadAutoComplete, autoCompleteCollection, search, sequences2Grid} = this.props;

    return (
      <div className="App">
        <h1>Table 1</h1>
        <Form 
          menuChoice={1}
          search={search}
          loadAutoComplete={loadAutoComplete} 
          autoCompleteCollection={autoCompleteCollection}
        />
        <DisplayTable sequences={sequences1} />
        <CSVLink data={sequences1} >Download Search Result</CSVLink>

         <h1>Table 2</h1>
        <Form 
          menuChoice = {2}
          search={search}
          loadAutoComplete={loadAutoComplete} 
          autoCompleteCollection={autoCompleteCollection}
        />


        <ReactDataSheet
          data={sequences2Grid}
          valueRenderer={(cell) => cell.value}
        />


      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { sequences1, sequences2Grid, autoCompleteCollection } = state.sequencesReducer;
  return {
    sequences1: sequences1,
    sequences2Grid: sequences2Grid,
    autoCompleteCollection: autoCompleteCollection
  }
}
export default connect(mapStateToProps, {initiateSession, loadAutoComplete, search})(App);
