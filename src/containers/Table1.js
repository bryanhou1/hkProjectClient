import React, { Component } from 'react';
import Form from '../components/Form';
import DisplayTableOne from '../components/DisplayTableOne';
import {connect} from 'react-redux';
import {initiateSession, fetchAutoComplete, search} from '../actions/index';
import { CSVLink } from 'react-csv';
import ResDivider from '../components/ResDivider';
import {Container, Segment, Dimmer, Loader} from 'semantic-ui-react';

class Table1 extends Component {
  componentDidMount() {
    this.props.initiateSession();
  }

  render() {
    const {sequences1, fetchAutoComplete, autoCompleteCollection, search, resultFetching} = this.props;
    return (
      <div>
        <h1>Whole Genomes</h1>
        <Form
          menuChoice={1}
          search={search}
          fetchAutoComplete={fetchAutoComplete} 
          autoCompleteCollection={autoCompleteCollection}
          resultFetching={resultFetching}
        />
        <ResDivider text={"result"} hidden={!sequences1}/>
        <Container>
          <Segment basic>
            <Dimmer active={resultFetching} inverted>
              <Loader inverted>Loading</Loader>
            </Dimmer>
            <DisplayTableOne sequences={sequences1} />
            <CSVLink data={sequences1} filename={"result.csv"}>Download Search Result</CSVLink>
          </Segment>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { sequences1,autoCompleteCollection, fetching } = state.sequencesReducer;
  return {
    resultFetching: fetching,
    sequences1: sequences1,
    autoCompleteCollection: autoCompleteCollection
  }
}
export default connect(mapStateToProps, {initiateSession, fetchAutoComplete, search})(Table1);
