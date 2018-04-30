import React, {Component} from 'react';
import FormField from './FormField';
import ErrorsDisplay from './ErrorsDisplay';
import * as CONSTANTS from '../constants/index';
import {Button, Grid} from 'semantic-ui-react';

class Form extends Component {
  constructor(props) {
    super(props);

    this.menu1 = [
      [CONSTANTS.ARG, [
        ["ARG", "arg"],
        [CONSTANTS.DISPLAY.SUBTYPE, CONSTANTS.DB.SUBTYPE],
        [CONSTANTS.DISPLAY.TYPE, CONSTANTS.DB.TYPE]
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
        ["Pathogen", "pathogen"]
      ]],
      [CONSTANTS.BLAST_CRITERIA, [
        [CONSTANTS.DISPLAY.IDENTITY, CONSTANTS.DB.IDENTITY],
        ["Hit Ratio", "hitLength"],
        [CONSTANTS.DISPLAY.E_VALUE, CONSTANTS.DB.E_VALUE],
        ["Rank","rank"]
      ]]
    ]

  //   this.menu1 = [
  //     [CONSTANTS.ARG, [
  //       [CONSTANTS.DISPLAY.SUBTYPE, CONSTANTS.DB.SUBTYPE],
  //       [CONSTANTS.DISPLAY.TYPE, CONSTANTS.DB.TYPE]
  //     ]],
  //     [CONSTANTS.GENOME_TAXONOMY, [
  //       [CONSTANTS.DISPLAY.GENOME, CONSTANTS.DB.GENOME],
  //       [CONSTANTS.DISPLAY.ACCESSION, CONSTANTS.DB.ACCESSION],
  //       [CONSTANTS.DISPLAY.PHYLUM, CONSTANTS.DB.PHYLUM],
  //       [CONSTANTS.DISPLAY.CLASS, CONSTANTS.DB.CLASS],
  //       [CONSTANTS.DISPLAY.ORDER, CONSTANTS.DB.ORDER],
  //       [CONSTANTS.DISPLAY.FAMILY, CONSTANTS.DB.FAMILY],
  //       [CONSTANTS.DISPLAY.GENUS, CONSTANTS.DB.GENUS],
  //       [CONSTANTS.DISPLAY.SPECIES, CONSTANTS.DB.SPECIES],
  //       [CONSTANTS.DISPLAY.STRAIN, CONSTANTS.DB.STRAIN]
  //     ]],
  //     [CONSTANTS.BLAST_CRITERIA, [
  //       [CONSTANTS.DISPLAY.IDENTITY, CONSTANTS.DB.IDENTITY],
  //       [CONSTANTS.DISPLAY.HIT_RATIO, CONSTANTS.DB.HIT_RATIO],
  //       [CONSTANTS.DISPLAY.ALIGNMENT_LENGTH, CONSTANTS.DB.ALIGNMENT_LENGTH],
  //       [CONSTANTS.DISPLAY.E_VALUE, CONSTANTS.DB.E_VALUE]
  //     ]]
  //  ]

   this.menu2 = [
    [CONSTANTS.ARG, [
      ["ARG", "arg"],
      ["Subtype", "argSubtype"],
      ["Type", "argType"],
      ["Rank", "rank"],
    ]],
    ["blue", [
      ["sample", "sample"],
      ["ecoType", "ecoType"], 
      ["ecoSubtype", "ecoSubtype"],  
    ]]]
  }

  handleSubmit = (e) => {
    const {menuChoice, search} = this.props;
    let query = {}
    
    e.preventDefault();
    const menuLength = {"1": 3, "2": 2};

    
    for (let i=0; i< menuLength[`${menuChoice}`]; i++) {
      if (document.getElementById(`attrField-${menuChoice}-${i}`).value !== "" && document.getElementById(`searchField-${menuChoice}-${i}`).value.trim() !=="") {
        query[document.getElementById(`attrField-${menuChoice}-${i}`).value] = document.getElementById(`searchField-${menuChoice}-${i}`).value.trim()
      }
    }

    ["identity","eValue","hitLength"].forEach((prop) => {
      if (document.getElementById(prop) && document.getElementById(prop).children[0].className !== "default text") {
        query[prop] = document.getElementById(prop).children[0].innerHTML
      }
    })

    if (!(Object.keys(query).length === 0 && query.constructor === Object)) { //object not empty
      console.log("valid search")
      search(query, menuChoice)
    } else {
      // display error message
      console.log("invalid search")
    }
    
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

  dropDownSelect = (menuChoice) => {
    switch (menuChoice) {
      case 2:
        return [
          {displayName: "Identity", dbName: "identity", options: [60,70,80,90,100]},
          {displayName: "Hit Length", dbName: "hitLength", options: [17, 25, 33]}, 
          {displayName: "E-Value", dbName: "eValue", options: ["1e-6", "1e-7", "1e-8", "1e-9"]}
        ];
      default:
        return [];
    }
  } 

  render() {
    const {menuChoice, loadAutoComplete, autoCompleteCollection} = this.props;
    return (
      <Grid centered columns={2}>
        <Grid.Row centered columns={4}>
          <Grid.Column>
            <form onSubmit={this.handleSubmit}>
              <FormField
                menuChoice={menuChoice}
                dropDownSelect={this.dropDownSelect(menuChoice)}
                menu={this.menu(menuChoice)}
                loadAutoComplete={loadAutoComplete}
                autoCompleteCollection={autoCompleteCollection[menuChoice]}
              />
              <br />
              <Button primary fluid> Search </Button>
              <ErrorsDisplay />
            </form>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

export default Form;