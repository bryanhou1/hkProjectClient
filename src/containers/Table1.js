import React, { Component } from 'react';
import Form from '../components/Form';
import DisplayTableOne from '../components/DisplayTableOne';
import {connect} from 'react-redux';
import {initiateSession, fetchAutoComplete, search} from '../actions/index';
import { CSVLink } from 'react-csv';
import ResDivider from '../components/ResDivider';
import {Container, Segment, Dimmer, Loader, Grid, Button} from 'semantic-ui-react';
import * as CONST from '../constants/index';

class Table1 extends Component {
  componentDidMount() {
    this.props.initiateSession();
  }

  searchedQueryLayout = () => {
    let {searchedQuery} = this.props;
    let entries = []
    //expect 1,2 or none entries
    let allKeys = (Object.keys(searchedQuery[1]))
    let firstTwoAttrKeys = allKeys.filter((key) => !(CONST.BLAST_CRITERIA_ENTRIES[1].DB.includes(key)) )

    firstTwoAttrKeys.forEach((key) => {
      entries.push(
        <div key={`searched query key ${key}`}>
          <strong>{CONST.DISPLAY_LINKS[key]} :</strong> {searchedQuery[1][key]}
        </div>
      )
    })
    entries.push(CONST.BLAST_CRITERIA_ENTRIES[1].DB.map((key) => (
      <div key={`searched query key ${key}`}>
        <strong>{CONST.DISPLAY_LINKS[key]} :</strong> {CONST.TABLE_1_SIGNS[key]} {searchedQuery[1][key]}
      </div>
    )))

    return (
      <div>
        {entries}
      </div>
    )
  }

  render() {
    const {sequences1, fetchAutoComplete, autoCompleteCollection, search, resultFetching, searchedQuery} = this.props;
    return (
      <div>
        <Grid centered>
          <Grid.Row>
            <Grid.Column width={13}>
              <div style={{paddingTop: "2em"}}>
                <h1>Whole Genomes</h1>
              </div>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={4}>
              <Form
                menuChoice={1}
                search={search}
                fetchAutoComplete={fetchAutoComplete} 
                autoCompleteCollection={autoCompleteCollection}
                resultFetching={resultFetching}
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            {Object.keys(searchedQuery[1]).length !== 0 ? (
              <Grid.Column width={4}>
                <Segment>
                  <h3>Searched Queries</h3>
                  {this.searchedQueryLayout()}
                </Segment>
              </Grid.Column>
            ): <div/>}
          </Grid.Row>
        </Grid>
        <ResDivider text={"result"} hidden={!sequences1}/>
        <Container textAlign="right">
          <Button style={{margin: "0 14px"}}size="mini" content={<CSVLink data={sequences1} filename={"whole_genome_result.csv"}>Download Search Result</CSVLink>} />
        </Container>
        <Container>
          <Segment basic>
            <Dimmer active={resultFetching} inverted>
              <Loader inverted>Loading</Loader>
            </Dimmer>
            <DisplayTableOne sequences={sequences1} />
          </Segment>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { sequences1,autoCompleteCollection, fetching, searchedQuery } = state.sequencesReducer;
  return {
    resultFetching: fetching,
    sequences1: sequences1,
    searchedQuery: searchedQuery,
    autoCompleteCollection: autoCompleteCollection
  }
}
export default connect(mapStateToProps, {initiateSession, fetchAutoComplete, search})(Table1);
