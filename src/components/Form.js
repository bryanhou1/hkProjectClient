import React, {Component} from 'react';
import FormField from './FormField';
import ErrorsDisplay from './ErrorsDisplay';
import * as CONST from '../constants/index';
import {Grid, Dimmer, Loader} from 'semantic-ui-react';
import SubmitButton from './SubmitButton.jsx';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      identity: 0,
      eValue: 0,
      hitLength: 0,
      hitRatio: 0
    }
  }

  handleSubmit = (e) => {
    const {menuChoice, search} = this.props;
    let query = {}
    
    e.preventDefault();
    const menuLength = 2
    
    // submit only if value isn't empty
    for (let i=0; i< menuLength; i++) {
      if (document.getElementById(`attrField-${menuChoice}-${i}`).value !== "" && document.getElementById(`searchField-${menuChoice}-${i}`).value.trim() !=="") {
        query[document.getElementById(`attrField-${menuChoice}-${i}`).value] = document.getElementById(`searchField-${menuChoice}-${i}`).value.trim()
      }
    }
    
    if (menuChoice === 1){
      [CONST.DB.IDENTITY,CONST.DB.E_VALUE,CONST.DB.HIT_RATIO].forEach((prop) => {
        if (document.getElementById(prop) && document.getElementById(prop).value !== "") {
          query[prop] = document.getElementById(prop).value
        }
      })
    } else {
      [CONST.DB.IDENTITY,CONST.DB.E_VALUE,CONST.DB.HIT_LENGTH].forEach((prop) => {
        if (document.getElementById(prop) && document.getElementById(prop).children[0].className !== "default text") {
          query[prop] = document.getElementById(prop).children[0].innerHTML
        }
      })
    }
    
    if (!query["identity"]) {
      query["identity"] = menuChoice === 1 ? "90" : "80"
    }

    if (!query["eValue"]) {
      query["eValue"] = menuChoice === 1 ? "1e-5" : "1e-7"
    }

    if (!query["hitRatio"] && menuChoice === 1) {
      query["hitRatio"] = "0.8"
    }

    if (!query["hitLength"] && menuChoice === 2) {
      query["hitLength"] = "25"
    }
    search(query, menuChoice);
  }

  menu = (menuChoice) => {
    switch (menuChoice) {
      case 1:
        return CONST.MENU_1;
      case 2:
        return CONST.MENU_2;
      default:
        return;
    }
  }

  blastMenu = (menuChoice) => {
    switch (menuChoice) {
      case 1:
        return [
          {displayName: CONST.DISPLAY.IDENTITY, dbName: CONST.DB.IDENTITY, type: "fillIn", min: 50, max:100, step: 1, label: ">=" },
          {displayName: CONST.DISPLAY.HIT_RATIO, dbName: CONST.DB.HIT_RATIO, type: "fillIn", min: 0.5, max: 1.1, step: 0.1, label: ">="}, 
          {displayName: CONST.DISPLAY.E_VALUE, dbName: CONST.DB.E_VALUE, type: "fillIn", min: 0, max: 1, step: 1e-200, label: "<="}
        ]
      case 2:
        return [
          {displayName: CONST.DISPLAY.IDENTITY, dbName: CONST.DB.IDENTITY, type: "dropdown", options: [60,70,80,90,100]},
          {displayName: CONST.DISPLAY.HIT_LENGTH, dbName: CONST.DB.HIT_LENGTH, type: "dropdown", options: [17, 25, 33]}, 
          {displayName: CONST.DISPLAY.E_VALUE, dbName: CONST.DB.E_VALUE, type: "dropdown", options: ["1e-6", "1e-7", "1e-8", "1e-9"]}
        ];
      default:
        return [];
    }
  }

  handleChange = (e) => {
    //not sure how to make it pretty
    let value = (e.target.value || e.target.value === "") ? (e.target.value) : e.target.children[0].innerHTML
    this.setState({[e.target.id || e.target.parentElement.parentElement.id]: value})
  }


  remoteSubmitHandler = () => {
    this.formButton.click();
  }

  // prevent people from accidentally submitting
  onKeyPress(e) {
    if (e.target.type !== 'textarea' /* future proofing*/ && e.which === 13 /* Enter */) {
      e.preventDefault();
    }
}

  render() {
    const {menuChoice, fetchAutoComplete, autoCompleteCollection, resultFetching} = this.props;
    return (
      <Grid centered>
        <Grid.Row centered>
          <Grid.Column>
            <form onSubmit={this.handleSubmit} onKeyPress={this.onKeyPress}>
              <FormField
                menu={this.menu(menuChoice)}
                menuChoice={menuChoice}
                blastMenu={this.blastMenu(menuChoice)}
                fetchAutoComplete={fetchAutoComplete}
                autoCompleteCollection={autoCompleteCollection[menuChoice]}
                handleChange={this.handleChange}
              />
              <br />
              <div>
                <Dimmer active={autoCompleteCollection.fetching}>
                  <Loader/>
                </Dimmer>
                <SubmitButton resultFetching={resultFetching} remoteSubmit={this.remoteSubmitHandler} popupBool={this.state.identity && this.state.eValue && (this.state.hitRatio || this.state.hitLength)}/>
                <button hidden type='submit' ref={(button) => {this.formButton = button}} />
              </div>
              <ErrorsDisplay />
            </form>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

export default Form;