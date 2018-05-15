import {Component} from 'react';
// import { CSVDownload, CSVLink } from 'react-csv';


export default class DownloadTableTwoLink extends Component{

  //need to account for when data is empty

  //can compare using search terms when functionality is built
  constructor(props) {
    super(props);
    this.state= {
      csvData: [],
      grid16sStr: [],
      displayUnit: ""
    }
  }


  buildGridForDownload = () => {
    // let {xHeaders, xLabels, yHeaders, yLabels, grid16s, gridCell, gridPpm, displayUnit} = this.props.sequences2Grid; 
    let dlGrid = [];
    // let {grid16sStr, csvData} = this.state; 
    // // xLabels = [samples, ecotype, ecosubtype]

    // if (grid16sStr === JSON.stringify(grid16s) && displayUnit === this.state.displayUnit) {
    //   return this.state.csvData;
    // }
    // //first row 
    // dlGrid.push(["",...xLabels])
    
    // //top 4 rows
    // let yHeadersT=yHeaders[0].map((x,i) => yHeaders.map(x => x[i]))
    // let spaces = xLabels.map(()=> "")
  
    // yLabels.forEach((yLabel, i)=> {
    //   dlGrid.push([yLabel, ...spaces, ...yHeadersT[i]])
    // })
    
    // //remaining rows
    // let currentGrid = ((displayUnit) => {
    //   switch(displayUnit){
    //     case "16s":
    //       return grid16s;
    //     case "cell":
    //       return gridCell;
    //     case "ppm":
    //       return gridPpm;
    //     default:
    //       return;
    //   }
    // })(displayUnit);

    // currentGrid.forEach((row, i) => {
    //   dlGrid.push(["", ...xHeaders[i], ...row])
    // })

    // this.setState({
    //   csvData: dlGrid,
    //   grid16sStr: JSON.stringify(grid16s),
    //   displayUnit: displayUnit
    // })
    return dlGrid;
  }
  
  render (){
    // let data = this.buildGridForDownload()
    return null;
    // return (
    //   (this.props.display) ? <CSVLink data={data} filename={"metagenome-result.csv"} > Download Search Results </CSVLink> : null
    // )
  }
}