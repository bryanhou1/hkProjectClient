import React, { Component } from 'react';
import Form from '../components/Form';
import {connect} from 'react-redux';
import {initiateSession, loadAutoComplete, search} from '../actions/index';
import ReactDataSheet from 'react-datasheet';
import 'react-datasheet/lib/react-datasheet.css';
import ResDivider from '../components/ResDivider';
import DisplayTableTwo from '../components/DisplayTableTwo';

class Table2 extends Component {

  render() {
    const {loadAutoComplete, autoCompleteCollection, search, sequences2Grid} = this.props;

    return (
      <div>
         <h1>Table 2</h1>
        <Form 
          menuChoice = {2}
          search={search}
          loadAutoComplete={loadAutoComplete} 
          autoCompleteCollection={autoCompleteCollection}
        />

        <ResDivider text={"result"}/>
        <DisplayTableTwo sequences2Grid={sequences2Grid}/>
        
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const {sequences2Grid, autoCompleteCollection } = state.sequencesReducer;
  return {
    sequences2Grid: sequences2Grid,
    autoCompleteCollection: autoCompleteCollection
  }
}
export default connect(mapStateToProps, {initiateSession, loadAutoComplete, search})(Table2);
