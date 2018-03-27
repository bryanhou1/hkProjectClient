import React, {Component} from 'react';
import SelectMenu from './SelectMenu';

class FormField extends Component {
  render() {
    const { menuChoice, menu, loadAutoComplete, autoCompleteCollection} = this.props;
    return (
      <div>
        <h1>Search</h1>
        {menu.map((i, index) => (
          <div key={index}>
            <label htmlFor={i[0]}>{i[0]}</label> : 
            <SelectMenu menuChoice={menuChoice} idVal={index} name={i[0]} items={i[1]} loadAutoComplete={loadAutoComplete} autoCompleteCollection={autoCompleteCollection}/>
          </div>
        ))}
      </div>
    )
  }
}

export default FormField;