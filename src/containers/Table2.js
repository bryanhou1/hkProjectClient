import React, { Component } from 'react';
import Form from '../components/Form';
import {connect} from 'react-redux';
import {initiateSession, fetchAutoComplete, search, changeTableTwoDisplayUnit, switchTableTwoPage} from '../actions/index';
import 'react-datasheet/lib/react-datasheet.css';
import ResDivider from '../components/ResDivider';
import DisplayTableTwo from '../components/DisplayTableTwo';
import {Container, Grid, Segment, Divider} from 'semantic-ui-react'
import DownloadTableTwoLink from '../components/DownloadTableTwoLink'
import  * as CONST from '../constants/index'

class TableTwo extends Component {

  searchedQueryLayout = () => {
    let {searchedQuery} = this.props;
    let entries = []

    //expect 1,2 or none entries
    let allKeys = (Object.keys(searchedQuery[2]))
    let firstTwoAttrKeys = allKeys.filter((key) => !(CONST.BLAST_CRITERIA_ENTRIES[2].DB.includes(key)) )

    debugger;
    firstTwoAttrKeys.forEach((key) => {
      entries.push(
        <div key={"search query others " + key}>
          <strong>{CONST.DISPLAY_LINKS[key]} :</strong> {searchedQuery[2][key]}
        </div>
      )
    })

    entries.push(CONST.BLAST_CRITERIA_ENTRIES[2].DB.map((key) => (
      <div key={"search query blast " + key}>
         <strong>{CONST.DISPLAY_LINKS[key]} :</strong> {searchedQuery[2][key]}
      </div>
    )))

    return (
      <div>
        {entries}
      </div>
    )
  }

  render() {
    const {fetchAutoComplete, autoCompleteCollection, search, sequences2Grid, changeTableTwoDisplayUnit, switchTableTwoPage, resultFetching, searchedQuery} = this.props;
    //to prevent refresh on other variable changes.
    const {xHeaders, xLabels, yHeaders, yLabels, grid16s, gridCell, gridPpm, displayUnit, display} = sequences2Grid
    return (
      <div>
        <h1>Metagenomes</h1>
        <Grid centered>
          <Grid.Row>
            <Grid.Column width={4}>
              <Form 
                menuChoice = {2}
                search={search}
                fetchAutoComplete={fetchAutoComplete} 
                autoCompleteCollection={autoCompleteCollection}
                resultFetching={resultFetching}
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            {Object.keys(searchedQuery[2]).length !== 0 ? (
              <Grid.Column width={4}>
                <Segment>
                  <h3>Searched Queries</h3>
                  {this.searchedQueryLayout()}
                </Segment>
              </Grid.Column>
            ): <div/>}
          </Grid.Row>
        </Grid> 
        <ResDivider text={"result"} hidden={!sequences2Grid.display}/>
        <Container>
          <DisplayTableTwo sequences2Grid={sequences2Grid} changeTableTwoDisplayUnit={changeTableTwoDisplayUnit} switchTableTwoPage={switchTableTwoPage}/>
          <DownloadTableTwoLink sequences2Grid={{xHeaders, xLabels, yHeaders, yLabels, grid16s, gridCell, gridPpm, displayUnit, display}} />
          <br/><br/>
        </Container>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { sequences2Grid, autoCompleteCollection, fetching, searchedQuery } = state.sequencesReducer;
  return {
    resultFetching: fetching,
    sequences2Grid: sequences2Grid,
    searchedQuery: searchedQuery,
    autoCompleteCollection: autoCompleteCollection
  }
}

export default connect(mapStateToProps, {initiateSession, fetchAutoComplete, search, changeTableTwoDisplayUnit, switchTableTwoPage})(TableTwo);
