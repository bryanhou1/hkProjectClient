import React, { Component } from 'react';
import Form from '../components/Form';
import {connect} from 'react-redux';
import {initiateSession, loadAutoComplete, search, changeTableTwoDisplayUnit, switchTableTwoPage} from '../actions/index';
import 'react-datasheet/lib/react-datasheet.css';
import ResDivider from '../components/ResDivider';
import DisplayTableTwo from '../components/DisplayTableTwo';

class TableTwo extends Component {

  render() {
    const {loadAutoComplete, autoCompleteCollection, search, sequences2Grid, changeTableTwoDisplayUnit, switchTableTwoPage} = this.props;

    return (
      <div>
        <h1>Metagenomes</h1>
        <Form 
          menuChoice = {2}
          search={search}
          loadAutoComplete={loadAutoComplete} 
          autoCompleteCollection={autoCompleteCollection}
        />
        <ResDivider text={"result"}/>
        <DisplayTableTwo sequences2Grid={sequences2Grid} changeTableTwoDisplayUnit={changeTableTwoDisplayUnit} switchTableTwoPage={switchTableTwoPage}/>
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
export default connect(mapStateToProps, {initiateSession, loadAutoComplete, search, changeTableTwoDisplayUnit, switchTableTwoPage})(TableTwo);
