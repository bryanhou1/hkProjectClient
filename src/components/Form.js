import React, {Component} from 'react';
import FormField from './FormField';
import ErrorsDisplay from './ErrorsDisplay';
import * as CONSTANTS from '../constants/index';
import {Button, Grid, Dimmer, Loader, Icon} from 'semantic-ui-react';
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

    this.menu1 = [
      [CONSTANTS.ARG, [
        [CONSTANTS.DISPLAY.ARG, CONSTANTS.DB.ARG],
        [CONSTANTS.DISPLAY.SUBTYPE, CONSTANTS.DB.SUBTYPE],
        [CONSTANTS.DISPLAY.TYPE, CONSTANTS.DB.TYPE],
        [CONSTANTS.DISPLAY.RANK,CONSTANTS.DB.RANK]
      ]],
      [CONSTANTS.GENOME_TAXONOMY, [
        [CONSTANTS.DISPLAY.GENOME, CONSTANTS.DB.GENOME],
        [CONSTANTS.DISPLAY.ACCESSION, CONSTANTS.DB.ACCESSION],
        [CONSTANTS.DISPLAY.PHYLUM, CONSTANTS.DB.PHYLUM],
        [CONSTANTS.DISPLAY.CLASS, CONSTANTS.DB.CLASS],
        [CONSTANTS.DISPLAY.ORDER, CONSTANTS.DB.ORDER],
        [CONSTANTS.DISPLAY.FAMILY, CONSTANTS.DB.FAMILY],
        [CONSTANTS.DISPLAY.GENUS, CONSTANTS.DB.GENUS],
        [CONSTANTS.DISPLAY.SPECIES, CONSTANTS.DB.SPECIES],
        [CONSTANTS.DISPLAY.STRAIN, CONSTANTS.DB.STRAIN],
        [CONSTANTS.DISPLAY.PATHOGEN, CONSTANTS.DB.PATHOGEN]
      ]]
    ]

   this.menu2 = [
    [CONSTANTS.ARG, [
      [CONSTANTS.DISPLAY.ARG, CONSTANTS.DB.ARG],
      [CONSTANTS.DISPLAY.SUBTYPE, CONSTANTS.DB.SUBTYPE],
      [CONSTANTS.DISPLAY.TYPE, CONSTANTS.DB.TYPE],
      [CONSTANTS.DISPLAY.RANK, CONSTANTS.DB.RANK],
    ]],
    [CONSTANTS.HABITAT, [
      [CONSTANTS.DISPLAY.SAMPLE, CONSTANTS.DB.SAMPLE],
      [CONSTANTS.DISPLAY.ECO_TYPE, CONSTANTS.DB.ECO_TYPE], 
      [CONSTANTS.DISPLAY.ECO_SUBTYPE, CONSTANTS.DB.ECO_SUBTYPE],  
    ]]]
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
      [CONSTANTS.DB.IDENTITY,CONSTANTS.DB.E_VALUE,CONSTANTS.DB.HIT_RATIO].forEach((prop) => {
        if (document.getElementById(prop) && document.getElementById(prop).value !== "") {
          query[prop] = document.getElementById(prop).value
        }
      })
    } else {
      [CONSTANTS.DB.IDENTITY,CONSTANTS.DB.E_VALUE,CONSTANTS.DB.HIT_LENGTH].forEach((prop) => {
        if (document.getElementById(prop) && document.getElementById(prop).children[0].className !== "default text") {
          query[prop] = document.getElementById(prop).children[0].innerHTML
        }
      })
    }
    
    debugger;
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
        return this.menu1;
      case 2:
        return this.menu2;
      default:
        return;
    }
  }

  blastMenu = (menuChoice) => {
    switch (menuChoice) {
      case 1:
        return [
          {displayName: CONSTANTS.DISPLAY.IDENTITY, dbName: CONSTANTS.DB.IDENTITY, type: "fillIn", min: 50, max:100, step: 1, label: ">=" },
          {displayName: CONSTANTS.DISPLAY.HIT_RATIO, dbName: CONSTANTS.DB.HIT_RATIO, type: "fillIn", min: 0.5, max: 1.1, step: 0.1, label: ">="}, 
          {displayName: CONSTANTS.DISPLAY.E_VALUE, dbName: CONSTANTS.DB.E_VALUE, type: "fillIn", min: 0, max: 1, step: 1e-200, label: "<="}
        ]
      case 2:
        return [
          {displayName: CONSTANTS.DISPLAY.IDENTITY, dbName: CONSTANTS.DB.IDENTITY, type: "dropdown", options: [60,70,80,90,100]},
          {displayName: CONSTANTS.DISPLAY.HIT_LENGTH, dbName: CONSTANTS.DB.HIT_LENGTH, type: "dropdown", options: [17, 25, 33]}, 
          {displayName: CONSTANTS.DISPLAY.E_VALUE, dbName: CONSTANTS.DB.E_VALUE, type: "dropdown", options: ["1e-6", "1e-7", "1e-8", "1e-9"]}
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
      <Grid centered columns={2}>
        <Grid.Row centered columns={4}>
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