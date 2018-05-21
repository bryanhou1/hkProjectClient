import React ,{Component} from 'react';
import { CSVLink } from 'react-csv';


export default class DownloadTableTwoLink extends Component{
  
  render (){
    let {display, builtGrid} = this.props;

    return (
      display ? <CSVLink data={builtGrid} filename={"metagenome-result.csv"} > Download Search Results </CSVLink> : null
    )
  }
}