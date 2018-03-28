import React, {Component} from 'react';
import FormField from './FormField';
import ErrorsDisplay from './ErrorsDisplay';
import * as CONSTANTS from '../constants/index';

class Form extends Component {
  constructor(props) {
    super(props);
    this.menu1 = [
      [CONSTANTS.ARG, [
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
        [CONSTANTS.DISPLAY.STRAIN, CONSTANTS.DB.STRAIN]
      ]],
      [CONSTANTS.BLAST_CRITERIA, [
        [CONSTANTS.DISPLAY.IDENTITY, CONSTANTS.DB.IDENTITY],
        [CONSTANTS.DISPLAY.HIT_RATIO, CONSTANTS.DB.HIT_RATIO],
        [CONSTANTS.DISPLAY.ALIGNMENT_LENGTH, CONSTANTS.DB.ALIGNMENT_LENGTH],
        [CONSTANTS.DISPLAY.E_VALUE, CONSTANTS.DB.E_VALUE]
      ]]
   ]


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
    ]],
    ["detail", [
      ["identity", "identity"],
      ["hitLength", "hitLength"], 
      ["eValue", "eValue"]
    ]]
  ]}

  handleSubmit = (e) => {
    const {menuChoice, search} = this.props;
    e.preventDefault();
    const query = {};
    [0,1,2].forEach((i) => {
      if (document.getElementById(`attrField-${menuChoice}-${i}`).value !== "" && document.getElementById(`searchField-${menuChoice}-${i}`).value.trim() !=="") {
        query[document.getElementById(`attrField-${menuChoice}-${i}`).value] = document.getElementById(`searchField-${menuChoice}-${i}`).value.trim()
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

  render() {
    const {menuChoice, loadAutoComplete, autoCompleteCollection} = this.props;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <FormField
            menuChoice={menuChoice}
            menu={this.menu(menuChoice)}
            loadAutoComplete={loadAutoComplete}
            autoCompleteCollection={autoCompleteCollection[menuChoice]}
          />

          <button type="input">Search</button>
          <ErrorsDisplay />
        </form>
        
      </div>
    )
  }
}

export default Form;