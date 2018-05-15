import React, {Component} from 'react';
import UnitSelectButtonContainer from './UnitSelectButtonContainer';
import {Container, Grid} from 'semantic-ui-react';
import PaginationMenu from './PaginationMenu';


// import * as CONST from "../constants/index";

class DisplayTableTwo extends Component {


  constructor(props) {
    super(props);
    this.state = {tableHeights: null}
  }


  // componentDidUpdate = () => {
  //   this.getAndSetTableHeights()
  // }
  
  // getAndSetTableHeights = () => {
  //   let heights= []
  //   let mainTableHeights = Array.from(document.getElementsByClassName("mainTable")[0].children[0].children).map(el => el.offsetHeight)
  //   let overLay2Heights = Array.from(document.getElementsByClassName("overlay2")[0].children[0].children).slice(1).map(el => el.offsetHeight)
  //   mainTableHeights.forEach((value, i) => heights.push(Math.max(value,overLay2Heights[i])));
  //   if (JSON.stringify(this.state.tableHeights) !== JSON.stringify(heights)) {
  //     this.setState({tableHeights: heights})
  //   }
  //   debugger;
  // }

  // generateTableOverlay() {
  //   let {yLabels, xLabels, paginate} = this.props.sequences2Grid;
  //   let {horizontal, vertical} = paginate

  //   let xLabelsT = xLabels.map((xLabel, i)=> <td className="head" key={-i}>{xLabel}</td>)
  //   let xSpaces = [...Array(horizontal.elPerPage)].map((xLabel, i) => <td className="head" key={i}/>)
  //   let rows = []

  //   rows.push(
  //     <tr key="first-row">
  //       <td className="head"/>
  //       {/* {xLabelsT}
  //       {xSpaces} */}
  //     </tr>
  //   )

  //   for (let i=0; i< yLabels.length;i++) { //vertical counter
  //     rows.push(
  //       <tr key={"labelRows" + i}>
  //         <td className="head">
  //           {yLabels[i]}
  //         </td>
  //       </tr>
  //     )
  //   }

  //   for (let i = 0; i < vertical.elPerPage; i++){
  //     rows.push(
  //       <tr key={"row "+i}>
  //         <td className="head"/>
  //       </tr>
  //     )
  //   }

  //   return (
  //     <table>
  //       <tbody>
  //         {rows}
  //       </tbody>
  //     </table>
  //   )
  // }

  // generateTableOverLay2() {
  //   let {yLabels, xLabels, xHeaders, paginate} = this.props.sequences2Grid;
  //   let {horizontal, vertical} = paginate
  //   let labelHorizontalCount = xLabels.length
  //   let labelVerticalCount = yLabels.length
  //   let vertEntryCount = vertical.elPerPage
  //   let rows = []

  //   //first row
  //   let xLabelsT = xLabels.map((xLabel, i)=> <td className="head" key={-i}>{xLabel}</td>)
    
  //   rows.push(
  //     <tr key="first-row">
  //       {xLabelsT}
  //     </tr>
  //   )

  //   //build spaces spacer
  //   let spaces = []
  //   for (let i = 0; i< labelHorizontalCount; i++){
  //     spaces.push(<td className="label" key={i}/>)
  //   }

  //   for (let i=0; i< labelVerticalCount;i++) {
  //     rows.push(
  //       <tr key={"spaces" + i}>
  //         {spaces}
  //       </tr>
  //     )
  //   }

  //   let xHeadersComp = []
  //   for (let i = 0; i < xHeaders.length; i++){
  //     xHeadersComp[i]=[]
  //     for (let j=0; j < xHeaders[0].length; j++){
  //       xHeadersComp[i].push(<td className="label" key={`${i},${j}`}>{xHeaders[i][j]}</td>)
  //     }
  //   }

  //   for(let i = vertEntryCount*(vertical.currentPage-1); i<vertEntryCount*(vertical.currentPage-1)+vertEntryCount; i++){
  //       rows.push(
  //         <tr key={`xHeaders row ${i}`}>
  //           {xHeadersComp[i]}
  //         </tr>
  //       )
  //   }


  //   return (
  //     <table className="overlay2">
  //       <tbody>
  //         {rows}
  //       </tbody>
  //     </table>
  //   )
  // }

  // generateTableOverLay3() {
  //   let {yLabels, yHeaders, xLabels, xHeaders, paginate, grid16s} = this.props.sequences2Grid;
  //   let {horizontal, vertical} = paginate
  //   let labelHorizontalCount = xLabels.length
  //   let labelVerticalCount = yLabels.length
  //   let vertEntryCount = vertical.elPerPage
  //   let horEntryCount = horizontal.elPerPage
  //   let gridLength = grid16s[0].length;
  //   let rows = []

  
    
  //   //first row
  //   let xLabelsSpaces=[]
  //   for (let i=0; i< horEntryCount; i++) {
  //     xLabelsSpaces.push( i===0 ?
  //       <td className="head " key={"xLabelsSpaces "+i}/>
  //       :
  //       <td className="head" key={"xLabelsSpaces "+i}/>
  //     )
  //   }

  //   rows.push(
  //     <tr>
  //       {xLabelsSpaces}
  //     </tr>
  //   )

  //   const addTrailingSpaces = (className) => {
  //     let spaces = []
  //     if (horizontal.currentPage === horizontal.pagesCount) {
  //       for (let i=0; i < horEntryCount - ((gridLength % horEntryCount) || horEntryCount); i++) {
  //         spaces.push(<td key={"spaces"+i} className={className}/>)
  //       }
  //       return spaces;
  //     } else {
  //       return null;
  //     }
  //   }
    
  //   for (let i=0; i< labelVerticalCount; i++) {
  //     rows.push(
  //       <tr>
  //         {yHeaders.slice(horEntryCount*(horizontal.currentPage-1),horEntryCount*(horizontal.currentPage-1)+horEntryCount).map((yHeader, j) => <td className="label" key={j}>{yHeader[i]}</td>)}
  //         {addTrailingSpaces("label")}
  //       </tr>
  //     )
  //   }

  //   return (
  //     <table className="overlay3">
  //       <tbody>
  //         {rows}
  //       </tbody>
  //     </table>
  //   )
  // }

  //old
  generateMainTable() {
    let {yLabels, yHeaders, xLabels, xHeaders, grid16s, gridCell, gridPpm, displayUnit, paginate} = this.props.sequences2Grid;
    let {horizontal, vertical} = paginate

    let xLabelsT = xLabels.map((xLabel, i)=> <td className="head" key={-i}>{xLabel}</td>)
    let xSpaces = [...Array(horizontal.elPerPage)].map((xLabel, i) => <td className="head" key={i}/>)

    let rows = []
    let spaces = []

    // first row
    rows.push(
      <tr key="first-row">
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
    const addTrailingSpaces = (label) => {
      let spaces = []
      if (horizontal.currentPage === horizontal.pagesCount) {
        for (let i=0; i < horizontal.elPerPage - ((currentGrid[0].length % horizontal.elPerPage) || horizontal.elPerPage); i++) {
          spaces.push(<td key={"spaces"+i} className={label}/>)
        }
        return spaces;
      } else {
        return null;
      }
    }


    //fill up main grid rows with spaces
    const completeMainGridRow = () => {
      let mainGridSpacesRows = []
      if (horizontal.currentPage === horizontal.pagesCount) {
        for (let i=0; i < horizontal.elPerPage - ((currentGrid[0].length % horizontal.elPerPage) || horizontal.elPerPage); i++) {
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
          {addTrailingSpaces("label")}
        </tr>
      )
    }

    for (let i = vertical.elPerPage*(vertical.currentPage-1); i<vertical.elPerPage*(vertical.currentPage-1)+vertical.elPerPage; i++){
      rows.push(
        <tr key={"row "+i}>
          <td className="head" onClick={this.handleOnClick}/>
          {xHeadersComp[i] ? xHeadersComp[i] : spaces}
          {currentGrid[i] ? currentGrid[i].slice(horizontal.elPerPage*(horizontal.currentPage-1),horizontal.elPerPage*(horizontal.currentPage-1)+horizontal.elPerPage).map((abundance, j)=> <td className="main-grid-item" key={j}> {abundance} </td> )
            :
            currentGrid[0].slice(horizontal.elPerPage*(horizontal.currentPage-1),horizontal.elPerPage*(horizontal.currentPage-1)+horizontal.elPerPage).map((abundance, j)=> <td className="main-grid-item" key={j} />)
          }
          {addTrailingSpaces("main-grid-item")}
        </tr>
      )
    }

    return (
      <table className="mainTable">
        <tbody>
          {rows}
        </tbody>
      </table>
    )
  }


  // generateMainTable() {
  //   let {yLabels, yHeaders, xLabels, xHeaders, grid16s, gridCell, gridPpm, displayUnit, paginate} = this.props.sequences2Grid;
  //   let {horizontal, vertical} = paginate

  //   let xLabelsT = xLabels.map((xLabel, i)=> <td className="head" key={-i}>{xLabel}</td>)
  //   let xSpaces = [...Array(horizontal.elPerPage)].map((xLabel, i) => <td className="head" key={i}/>)

  //   let rows = []
  //   let spaces = []

  //   // // first row
  //   // rows.push(
  //   //   <tr key="first-row">
  //   //     <td className="head"/>
  //   //     {xLabelsT}
  //   //     {xSpaces}
  //   //   </tr>
  //   // )

  //   let currentGrid = ((displayUnit) => {
  //     switch(displayUnit){
  //       case "16s":
  //         return grid16s;
  //       case "cell":
  //         return gridCell;
  //       case "ppm":
  //         return gridPpm;
  //       default:
  //         return;
  //     }
  //   })(displayUnit);
    
  //   // // 4x3 blank spaces
  //   // for (let i = 0; i< xLabels.length; i++){ //horizontal counter
  //   //   spaces.push(<td className="label" key={i}/>)
  //   // }

  //   // //row 4+ labels
  //   // let xHeadersComp = []
  //   // for (let i = 0; i < xHeaders.length; i++){
  //   //   xHeadersComp[i]=[]
  //   //   for (let j=0; j < xHeaders[0].length; j++){
  //   //     xHeadersComp[i].push(<td className="label" key={`${i},${j}`}>{xHeaders[i][j]}</td>)
  //   //   }
  //   // }
    
  //   //fill up rows with spaces
  //   const addTrailingSpaces = (label) => {
  //     let spaces = []
  //     if (horizontal.currentPage === horizontal.pagesCount) {
  //       for (let i=0; i < horizontal.elPerPage - ((currentGrid[0].length % horizontal.elPerPage) || horizontal.elPerPage); i++) {
  //         spaces.push(<td key={"spaces"+i} className={label}/>)
  //       }
  //       return spaces;
  //     } else {
  //       return null;
  //     }
  //   }

  //   //row 1-4 
  //   for (let i=0; i< yLabels.length;i++) { //vertical counter
  //     rows.push(
  //       <tr key={"labelRows" + i}>
  //         {yHeaders.slice(horizontal.elPerPage*(horizontal.currentPage-1),horizontal.elPerPage*(horizontal.currentPage-1)+horizontal.elPerPage).map((yHeader, j) => <td className="label" key={j}>{yHeader[i]}</td>)}
  //         {addTrailingSpaces("label")}
  //       </tr>
  //     )
  //   }

  //   for (let i = vertical.elPerPage*(vertical.currentPage-1); i<vertical.elPerPage*(vertical.currentPage-1)+vertical.elPerPage; i++){
  //     rows.push(
  //       <tr key={"row "+i}>
  //         {currentGrid[i] ? currentGrid[i].slice(horizontal.elPerPage*(horizontal.currentPage-1),horizontal.elPerPage*(horizontal.currentPage-1)+horizontal.elPerPage).map((abundance, j)=> <td className="main-grid-item" key={j}> {abundance} </td> )
  //           :
  //           currentGrid[0].slice(horizontal.elPerPage*(horizontal.currentPage-1),horizontal.elPerPage*(horizontal.currentPage-1)+horizontal.elPerPage).map((abundance, j)=> <td className="main-grid-item" key={j} />)
  //         }
  //         {addTrailingSpaces("mainGrid")}
  //       </tr>
  //     )
  //   }

  //   return (
  //     <table className="mainTable">
  //       <tbody>
  //         {rows}
  //       </tbody>
  //     </table>
  //   )
  // }

  render() {
    let {sequences2Grid, changeTableTwoDisplayUnit} = this.props;
    
    if (sequences2Grid.display){
      if (sequences2Grid.grid16s[0].length !== 0 ) {
        return (
          <Container>
            <Grid stackable>
              <Grid.Column verticalAlign="middle" width={4}>
                <UnitSelectButtonContainer changeTableTwoDisplayUnit={changeTableTwoDisplayUnit}/>
              </Grid.Column>
              <Grid.Column verticalAlign="middle" width={10}>     
                <PaginationMenu orientation={"horizontal"}/>
                <PaginationMenu orientation={"vertical"}/>
              </Grid.Column>
            </Grid>
            <Grid>
              <Grid.Row>
                <Grid.Column width={14}>
                  <Container style={{overflow: "auto"}}>
                    <div>
                      {this.generateMainTable()}
                    </div>
                  </Container>
                </Grid.Column>
                {/* <Grid.Column width={2}>
                  <div>
                    {this.generateTableOverlay()}
                  </div>
                </Grid.Column>
                <Grid.Column width={5}>
                  <div>
                    {this.generateTableOverLay2()}
                  </div>
                </Grid.Column>

                <Grid.Column width={8}>
                  <Grid.Row>
                    <Container style={{overflow: "auto"}}>
                      <div>
                        {this.generateTableOverLay3()}
                      </div>
                      <div>
                        {this.generateMainTable()}
                      </div>
                    </Container>
                  </Grid.Row>
                </Grid.Column> */}
              </Grid.Row>
            </Grid>
          </Container>
        )
      } else {
        return <Container textAlign="center"> No Entry Found.</Container>
      }
    } else {
      return ( <Container /> )
    }
  }
}

export default DisplayTableTwo;