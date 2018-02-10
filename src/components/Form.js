import React, {Component} from 'react';
import FormField from './FormField';
import ErrorsDisplay from './ErrorsDisplay';
import * as CONSTANTS from '../constants/index';

class Form extends Component {
  constructor(props) {
    super(props);
    this.menu = [
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
      [CONSTANTS.GENOME_TAXONOMY, [
        [CONSTANTS.DISPLAY.IDENTITY, CONSTANTS.DB.IDENTITY],
        [CONSTANTS.DISPLAY.HIT_RATIO, CONSTANTS.DB.HIT_RATIO],
        [CONSTANTS.DISPLAY.ALIGNMENT_LENGTH, CONSTANTS.DB.ALIGNMENT_LENGTH],
        [CONSTANTS.DISPLAY.E_VALUE, CONSTANTS.DB.E_VALUE]
      ]]
   ]
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const query = {};
    [0,1,2].forEach((i) => {
      if (document.getElementById(`attrField-${i}`).value !== "" && document.getElementById(`searchField-${i}`).value.trim() !=="") {
        query[document.getElementById(`attrField-${i}`).value] = document.getElementById(`searchField-${i}`).value.trim()
      }
    })
    if (!(Object.keys(query).length === 0 && query.constructor === Object)) { //object not empty
      console.log("valid search")
      this.props.search(query)
    } else {
      console.log("invalid search")
    }
    
  }

  render() {
    const {loadAutoComplete, autoCompleteCollection} = this.props;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <FormField
            menu={this.menu}
            loadAutoComplete={loadAutoComplete}
            autoCompleteCollection={autoCompleteCollection}
          />
          <button type="input">Search</button>
          <ErrorsDisplay />
        </form>
        
      </div>
    )
  }
}

export default Form;