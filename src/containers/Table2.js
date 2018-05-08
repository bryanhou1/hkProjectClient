import React, { Component } from 'react';
import Form from '../components/Form';
import {connect} from 'react-redux';
import {initiateSession, fetchAutoComplete, search, changeTableTwoDisplayUnit, switchTableTwoPage} from '../actions/index';
import 'react-datasheet/lib/react-datasheet.css';
import ResDivider from '../components/ResDivider';
import DisplayTableTwo from '../components/DisplayTableTwo';
import {Container} from 'semantic-ui-react'

class TableTwo extends Component {

  render() {
    const {fetchAutoComplete, autoCompleteCollection, search, sequences2Grid, changeTableTwoDisplayUnit, switchTableTwoPage, resultFetching} = this.props;

    return (
      <div>
        <h1>Metagenomes</h1>
        <Form 
          menuChoice = {2}
          search={search}
          fetchAutoComplete={fetchAutoComplete} 
          autoCompleteCollection={autoCompleteCollection}
          resultFetching={resultFetching}
        />
        <ResDivider text={"result"}/>
        <Container>
          <DisplayTableTwo sequences2Grid={sequences2Grid} changeTableTwoDisplayUnit={changeTableTwoDisplayUnit} switchTableTwoPage={switchTableTwoPage}/>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { sequences2Grid, autoCompleteCollection, fetching } = state.sequencesReducer;
  return {
    resultFetching: fetching,
    sequences2Grid: sequences2Grid,
    autoCompleteCollection: autoCompleteCollection
  }
}
export default connect(mapStateToProps, {initiateSession, fetchAutoComplete, search, changeTableTwoDisplayUnit, switchTableTwoPage})(TableTwo);
