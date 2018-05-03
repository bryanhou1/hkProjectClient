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

  onClick = (optionName) => {
    this.setState({activeButtonName: optionName})
  }
   
  render() {
    return (
      <div>
        <h3> Unit: </h3>
        <Button.Group>
          <UnitSelectButton active={"per 16S" === this.state.activeButtonName} onClick={this.onClick} optionName={"per 16S"}/>
          <UnitSelectButton active={"per Cell" === this.state.activeButtonName} onClick={this.onClick} optionName={"per Cell"}/>
          <UnitSelectButton active={"per ppm" === this.state.activeButtonName} onClick={this.onClick} optionName={"per ppm"}/>
        </Button.Group>
        <br/><br/>
      </div>
    )
  }

}


export default UnitSelectButtonContainer;