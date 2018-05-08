import React, {Component} from 'react';
import UnitSelectButtonContainer from './UnitSelectButtonContainer';
import {Container} from 'semantic-ui-react';
import PaginationMenu from './PaginationMenu';

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
    
    let {xLabels, paginate} = this.props.sequences2Grid;
    let xLabelsT = xLabels.map((xLabel, i)=> <th key={-i}>{xLabel}</th>)
    let xSpaces = [...Array(paginate.horizontal.elPerPage)].map((xLabel, i) => <th key={i}/>)

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
    let {yLabels, yHeaders, xLabels, xHeaders, grid16s, gridCell, gridPpm, displayUnit} = this.props.sequences2Grid;
    let {horizontal, vertical}= this.props.sequences2Grid.paginate
    let rows = []
    let spaces = [];
    let currentGrid = ((displayUnit) => {
      switch(displayUnit){
        case "16s":
          return grid16s;
        case "cell":
          return gridCell;
        case "ppm":
          return gridPpm;
        default:
          return;
      }
    })(displayUnit);
    
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
    
    for (let i=0; i< yLabels.length;i++) {
      rows.push(
        <tr key={"labelRows" + i}>
          <td>
            {yLabels[i]}
          </td>
          {spaces}
          {yHeaders.slice(horizontal.elPerPage*(horizontal.currentPage-1),horizontal.elPerPage*(horizontal.currentPage-1)+horizontal.elPerPage).map((yHeader, j) => <th key={j}>{yHeader[i]}</th>)}
        </tr>
      )
    }

    for (let i = vertical.elPerPage*(vertical.currentPage-1); i<vertical.elPerPage*(vertical.currentPage-1)+vertical.elPerPage; i++){
      rows.push(
        <tr key={"row"+i}>
          <td/>
          {xHeadersComp[i]}
          {currentGrid[i] ? currentGrid[i].slice(horizontal.elPerPage*(horizontal.currentPage-1),horizontal.elPerPage*(horizontal.currentPage-1)+horizontal.elPerPage).map((abundance, j)=> <th key={j}> {abundance} </th> ) : ""}
        </tr>
      )
    }


    return (
      <tbody>
        {rows}
      </tbody>
    )
  }

  render() {
    let {sequences2Grid, changeTableTwoDisplayUnit} = this.props;
    if (sequences2Grid.display){
      return (
        <Container>
          <UnitSelectButtonContainer changeTableTwoDisplayUnit={changeTableTwoDisplayUnit}/>
          {this.generateTable()}
          Left Right<PaginationMenu orientation={"horizontal"} />
          Up Down <PaginationMenu orientation={"vertical"}/>
        </Container>
      )
    } else {
      return (
        <Container />
      )
    }
    
  }
}

export default DisplayTableTwo;