import React, { Component } from 'react';
import Form from '../components/Form';
import DisplayTable from '../components/DisplayTable';
import {connect} from 'react-redux';
import {initiateSession, loadAutoComplete, search} from '../actions/index';
import { CSVLink } from 'react-csv';

class Table1 extends Component {

  componentDidMount() {
    this.props.initiateSession();
  }

  render() {
    const {sequences1, loadAutoComplete, autoCompleteCollection, search} = this.props;

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
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { sequences1,autoCompleteCollection } = state.sequencesReducer;
  return {
    sequences1: sequences1,
    autoCompleteCollection: autoCompleteCollection
  }
}
export default connect(mapStateToProps, {initiateSession, loadAutoComplete, search})(Table1);
