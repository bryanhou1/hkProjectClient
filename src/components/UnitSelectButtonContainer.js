import React, {Component} from 'react'
import { Button } from 'semantic-ui-react'
import UnitSelectButton from './UnitSelectButton'

class UnitSelectButtonContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      activeButtonName : "per 16S"
    }
  }

  onClick = (optionName, changeTableTwoDisplayUnit) => {
    let dict = {"per 16S": "16s", "per Cell": "cell", "ppm": "ppm"}
    
    changeTableTwoDisplayUnit(dict[optionName])
    this.setState({activeButtonName: optionName})
  }
  
  render() {
    return (
      <div>
        <h3> Unit: </h3>
        <Button.Group className="stackable">
          <UnitSelectButton active={"per 16S" === this.state.activeButtonName} onClick={this.onClick} optionName={"per 16S"} changeTableTwoDisplayUnit={this.props.changeTableTwoDisplayUnit}/>
          <UnitSelectButton active={"per Cell" === this.state.activeButtonName} onClick={this.onClick} optionName={"per Cell"} changeTableTwoDisplayUnit={this.props.changeTableTwoDisplayUnit}/>
          <UnitSelectButton active={"ppm" === this.state.activeButtonName} onClick={this.onClick} optionName={"ppm"} changeTableTwoDisplayUnit={this.props.changeTableTwoDisplayUnit}/>
        </Button.Group>
        <br/><br/>
      </div>
    )
  }

}

export default UnitSelectButtonContainer;