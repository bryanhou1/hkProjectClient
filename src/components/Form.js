import React, {Component} from 'react';
import FormField from './FormField';
import ErrorsDisplay from './ErrorsDisplay';

class Form extends Component {
  constructor(props) {
    super(props);
    this.menu = [
      ["ARG", [
        ["SubType","argSubtype"],
        ["Type","argType"]
      ]],
      ["Genome Taxonomy", [
        ["Genome","genome"],
        ["Accession","accession"],
        ["Phylum","taxonomicPhylum"],
        ["Class","taxonomicClass"],
        ["Order","taxonomicOrder"],
        ["Family","taxonomicFamily"],
        ["Genus","taxonomicGenus"],
        ["Species","taxonomicSpecies"],
        ["Strain","strain"]
      ]],
      ["Blast Criteria", [
        ["Identity","identity"],
        ["Hit Ratio","hitRatio"],
        ["Alignment Length","alignmentLength"],
        ["E Value","eValue"]
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