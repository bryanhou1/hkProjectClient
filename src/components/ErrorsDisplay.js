import React,{Component} from 'react';
import {Message} from "semantic-ui-react";

class ErrorsDisplay extends Component {

  render() {
    const {errors} = this.props;
    return (
      <div>
        { errors.length !== 0 ? <Message negative header='Warning!'content={this.props.errors[0]} onDismiss={this.props.clearErrors}/> : null }
      </div>
    )
  }
}

export default ErrorsDisplay;