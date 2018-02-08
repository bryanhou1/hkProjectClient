import React, {Component} from 'react';
import FormField from './FormField';

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

  render() {
    return (
      <div>
        <form>
          <FormField
            menu={this.menu}
            loadAutoComplete={this.props.loadAutoComplete}
            autoCompleteCollection={this.props.autoCompleteCollection}
          />
          <button type="input">Search</button>
        </form>
      </div>
    )
  }
}

export default Form;