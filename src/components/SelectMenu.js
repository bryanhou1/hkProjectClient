import React, {Component} from 'react';
import ReactAutocomplete from 'react-autocomplete'

class SelectMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {selectValue: "", value: ""};
  }

  handleChange = (e) => {
    this.setState({selectValue: e.target.value});
    this.props.loadAutoComplete(e.target.value);
  }

  render() {
    const { items, name, autoCompleteCollection } = this.props;
    return (
      <div>

        <select name={name} value={this.state.selectValue} onChange={this.handleChange} id={`attrField-${this.props.idVal}`}>
          <option value="" disabled/>
          {items.map((item, i) => <option key={i} value={item[1]}>{item[0]}</option> )}
        </select>
        
        <ReactAutocomplete
          inputProps={{ id: `searchField-${this.props.idVal}`}}
          items={[" "," hi"]}
          shouldItemRender={(item, value) => item.toString().toLowerCase().indexOf(value.toLowerCase()) > -1}
          getItemValue={item => item}
          renderItem={(item, highlighted) =>
            <div
              key={item}
              style={{ backgroundColor: highlighted ? '#eee' : 'transparent' }}
            >
              {item}
            </div>
          }
          value={this.state.value}
          onChange={e => this.setState({ value: e.target.value })}
          onSelect={value => this.setState({ value })}
        />
      </div>
    )
  }
}

export default SelectMenu;