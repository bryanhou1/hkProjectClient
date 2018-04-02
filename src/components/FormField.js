import React, {Component} from 'react';
import SelectMenu from './SelectMenu';
import {Dropdown} from 'semantic-ui-react'

class FormField extends Component {


  buildDropdown = (items) => {
    return items.map((item, i) => {
      return (
        <div key={i}>
          <label htmlFor={item.dbName}>{item.displayName} : </label> <br/>
          <Dropdown placeholder={item.displayName} fluid selection options={this.buildDropdownOptions(item.options)} id={item.dbName} />
        </div>
      )
    })
  }

  buildDropdownOptions = (options) => {
    return options.map((opt) => {
      return {
        text: `${opt}`,
        value: opt
      }
    })
  }
  
  render() {
    const { menuChoice, menu, loadAutoComplete, autoCompleteCollection, dropDownSelect} = this.props;
    return (
    
      <div>
        <h3>Search</h3>
        {menu.map((i, index) => (
          <div key={index}>
            <SelectMenu menuChoice={menuChoice} idVal={index} name={i[0]} items={i[1]} loadAutoComplete={loadAutoComplete} autoCompleteCollection={autoCompleteCollection}/>
          </div>
        ))}
        
        <div>
          {this.buildDropdown(dropDownSelect)}
        </div>
      </div>
    )
  }
}

export default FormField;