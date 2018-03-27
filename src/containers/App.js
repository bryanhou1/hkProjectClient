import React, { Component } from 'react';
// import logo from './logo.svg';
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

  constructor (props) {
    super(props)
    this.state = {
      grid: [
        [{value: ""},
          {value: "sample"},
          {value: "ecotype"},
          {value: "eco-subtype"},
          {value: "identity"},
          {value: "hit length"},
          {value: "e-value"}
        ]
        ,
        [{value: "ARG"}, {value: 1}, {value: 3}, {value: 3}, {value: 3}],
        [{value: "Type"}, {value: 2}, {value: 4}, {value: 4}, {value: 4}],
        [{value: "Subtype"}, {value: 1}, {value: 3}, {value: 3}, {value: 3}],
        [{value: "Rank"}, {value: 2}, {value: 4}, {value: 4}, {value: 4}]
      ]
    }
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

         <h1>Table 2</h1>
        <Form 
          menuChoice = {2}
          search={search}
          loadAutoComplete={loadAutoComplete} 
          autoCompleteCollection={autoCompleteCollection}
        />


        <ReactDataSheet
        data={this.state.grid}
        valueRenderer={(cell) => cell.value}
        onContextMenu={(e, cell, i, j) => cell.readOnly ? e.preventDefault() : null}
        onCellsChanged={changes => {
          const grid = this.state.grid.map(row => [...row])
          changes.forEach(({cell, row, col, value}) => {
            grid[row][col] = {...grid[row][col], value}
          })
          this.setState({grid})
        }}
        readOnly={true}
      />


      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { sequences1, autoCompleteCollection } = state.sequencesReducer;
  return {
    sequences1: sequences1,
    autoCompleteCollection: autoCompleteCollection
  }
}
export default connect(mapStateToProps, {initiateSession, loadAutoComplete, search})(App);
