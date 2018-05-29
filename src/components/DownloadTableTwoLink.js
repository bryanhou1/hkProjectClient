import React ,{Component} from 'react';
import { CSVLink } from 'react-csv';
import { Button } from 'semantic-ui-react';


export default class DownloadTableTwoLink extends Component{
  
  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.dipslayUnit !== nextProps.dipslayUnit) {
      return true;
    } else if (
      !(this.props.builtGrid.length === nextProps.builtGrid.length &&
      this.props.builtGrid[0].length === nextProps.builtGrid[0].length &&
      this.props.builtGrid === nextProps.builtGrid)
    ) {
      return true;
    }
    return false;
  }



  render (){
    let {display, builtGrid} = this.props;
    return (
      display ? <Button size="mini" content={<CSVLink data={builtGrid} filename={"metagenome-result.csv"} > Download Search Results </CSVLink>}/>: null
    )
  }
}