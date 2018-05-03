import React, {Component} from 'react';
import UnitSelectButtonContainer from './UnitSelectButtonContainer';
import {Container} from 'semantic-ui-react';
// import * as CONSTANTS from "../constants/index";

class DisplayTableTwo extends Component {

  generateTable() {
    return (
      <div>
        <table className="ui definition celled striped fixed table">
          {this.generateThead()}
          {this.generateTBody()}
        </table>
      </div>
    )
  }

  generateThead() {
    let {yHeaders, xLabels} = this.props.sequences2Grid;
    let xLabelsT = xLabels.map((xLabel, i)=> <th key={i}>{xLabel}</th>)
    let xSpaces = yHeaders.map((x,i) => <th key={i*-1}/>)
    return (
      <thead>
        <tr>
          <th/>
          {xLabelsT}
          {xSpaces}
        </tr>
      </thead>
    )
  }

  generateTBody() {
    let {yLabels, yHeaders, xLabels, xHeaders, grid16s} = this.props.sequences2Grid;
    let rows = []
    let spaces = [];
    for (let i = 0; i< xLabels.length; i++){
      spaces.push( <th key={i}/>)
    }


    let xHeadersComp = []
    for (let i = 0; i < xHeaders.length; i++){
      xHeadersComp[i]=[]
      for (let j=0; j < xHeaders[0].length; j++){
        xHeadersComp[i].push(<th key={`${i},${j}`}>{xHeaders[i][j]}</th>)
      }
    }
    // debugger;
    for (let i = 0; i<yLabels.length + xHeaders.length; i++){
      if (i<4) {
        rows.push(
          <tr key={i}>
            <td>
              {yLabels[i]}
            </td>
            {spaces}
            {yHeaders.map((yHeader)=> <th>{yHeader[i]}</th>)}
          </tr>
        )
      }else{
        rows.push(
          <tr key={i}>
            <td/>
            {xHeadersComp[i-4]}
            {grid16s[i-4].map((abundance)=> <th>{abundance}</th> )}
          </tr>
        )
      }
    }

    return (
    <tbody>
      {rows}
    </tbody>
    )
  }

  render() {
    return (
      <Container>
        <UnitSelectButtonContainer/>
        {this.generateTable()}
      </Container>
    )
  }
}

export default DisplayTableTwo;