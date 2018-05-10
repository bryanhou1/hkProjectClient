import React, {Component} from 'react';
import UnitSelectButtonContainer from './UnitSelectButtonContainer';
import {Container, Grid} from 'semantic-ui-react';
import PaginationMenu from './PaginationMenu';

// import * as CONSTANTS from "../constants/index";

class DisplayTableTwo extends Component {

  generateTable() {
    return (
      <table>
        {this.generateTBody()}
      </table>
    )
  }

  generateTBody() {
    let {yLabels, yHeaders, xLabels, xHeaders, grid16s, gridCell, gridPpm, displayUnit, paginate} = this.props.sequences2Grid;
    let {horizontal, vertical} = paginate

    let xLabelsT = xLabels.map((xLabel, i)=> <td className="head" key={-i}>{xLabel}</td>)
    let xSpaces = [...Array(horizontal.elPerPage)].map((xLabel, i) => <td className="head" key={i}/>)

    let rows = []
    let spaces = []

    // first row
    rows.push(
      <tr keys="first-row">
        <td className="head"/>
        {xLabelsT}
        {xSpaces}
      </tr>
    )
    

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
    
    // 4x3 blank spaces
    for (let i = 0; i< xLabels.length; i++){ //horizontal counter
      spaces.push(<td className="label" key={i}/>)
    }

    //row 4+ labels
    let xHeadersComp = []
    for (let i = 0; i < xHeaders.length; i++){
      xHeadersComp[i]=[]
      for (let j=0; j < xHeaders[0].length; j++){
        xHeadersComp[i].push(<td className="label" key={`${i},${j}`}>{xHeaders[i][j]}</td>)
      }
    }
    
    //fill up first 4 rows with spaces
    const completeLabelRow = () => {
      let labelSpacesRows = []
      if (horizontal.currentPage === horizontal.pagesCount) {
        for (let i=0; i < horizontal.elPerPage - yHeaders.length % horizontal.elPerPage; i++) {
          labelSpacesRows.push(<td key={"spaces"+i} className="label"/>)
        }
        return labelSpacesRows;
      } else {
        return null;
      }
    }


    //fill up main grid rows with spaces
    const completeMainGridRow = () => {
      let mainGridSpacesRows = []
      if (horizontal.currentPage === horizontal.pagesCount) {
        for (let i=0; i < horizontal.elPerPage - currentGrid[0].length % horizontal.elPerPage; i++) {
          mainGridSpacesRows.push(<td key={"spaces"+i} className="main-grid-item"/>)
        }
        return mainGridSpacesRows;
      } else {
        return null;
      }
    }

    //row 1-4 
    for (let i=0; i< yLabels.length;i++) { //vertical counter
      rows.push(
        <tr key={"labelRows" + i}>
          <td className="head">
            {yLabels[i]}
          </td>
          {spaces}
          {yHeaders.slice(horizontal.elPerPage*(horizontal.currentPage-1),horizontal.elPerPage*(horizontal.currentPage-1)+horizontal.elPerPage).map((yHeader, j) => <td className="label" key={j}>{yHeader[i]}</td>)}
          {completeLabelRow()}
        </tr>
      )
    }

    
    for (let i = vertical.elPerPage*(vertical.currentPage-1); i<vertical.elPerPage*(vertical.currentPage-1)+vertical.elPerPage; i++){
      rows.push(
        <tr key={"row "+i}>
          <td className="head"/>
          {xHeadersComp[i] ? xHeadersComp[i] : spaces}
          {currentGrid[i] ? currentGrid[i].slice(horizontal.elPerPage*(horizontal.currentPage-1),horizontal.elPerPage*(horizontal.currentPage-1)+horizontal.elPerPage).map((abundance, j)=> <td className="main-grid-item" key={j}> {abundance} </td> )
            :
            currentGrid[0].slice(horizontal.elPerPage*(horizontal.currentPage-1),horizontal.elPerPage*(horizontal.currentPage-1)+horizontal.elPerPage).map((abundance, j)=> <td className="main-grid-item" key={j} />)
          }
          {completeMainGridRow()}
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
          <Grid stackable>
            <Grid.Column verticalAlign="middle" width={4}>
              <UnitSelectButtonContainer changeTableTwoDisplayUnit={changeTableTwoDisplayUnit}/>
            </Grid.Column>
            <Grid.Column verticalAlign="middle" width={12}>     
              <PaginationMenu orientation={"horizontal"}/>
              <PaginationMenu orientation={"vertical"}/>
            </Grid.Column>
          </Grid>
          <Container style={{overflow: "auto"}}>
            {this.generateTable()}
          </Container>

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