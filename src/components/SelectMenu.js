import React, {Component} from 'react';
import ReactAutocomplete from 'react-autocomplete'
import {Grid} from 'semantic-ui-react';

class SelectMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {selectValue: "", value: ""};
  }

  handleChange = (e) => {
    this.setState({selectValue: e.target.value});
    
    if (this.props.autoCompleteCollection[e.target.value].length === 0 ) {
      this.props.fetchAutoComplete(e.target.value, e.target.id.match(/-(.+)-/)[1]);
    }
  }

  autoCompleteTextfield = () => {
    const {  autoCompleteCollection, idVal, menuChoice } = this.props;
    return (
      <ReactAutocomplete
        inputProps={{ id: `searchField-${menuChoice}-${idVal}`, placeholder: "search...", disabled: !this.state.selectValue}}
        wrapperStyle={{ position: 'relative'}}
        wrapperProps={{ className: "ui input"}}
        menuStyle={{
          borderRadius: '3px',
          boxShadow: '0 2px 12px rgba(0, 0, 0, 0.1)',
          background: 'rgba(255, 255, 255, 0.9)',
          padding: '2px 0',
          zIndex: 1000,
          fontSize: '90%',
          position: 'fixed',
          overflow: 'auto',
          maxHeight: '50%',
        }}
        items={autoCompleteCollection[this.state.selectValue] || []}
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
    )

  }

  render() {
    const { items, name, idVal, menuChoice } = this.props;
    
    
    return (
      <div>
        <label htmlFor={`attrField-${menuChoice}-${idVal}`}>{name}</label> : <br/>
        <Grid stretched>
          <Grid.Row>
            <Grid.Column width={6} stretched style={{paddingRight: 1 }}>
              <select className="ui dropdown" name={name} value={this.state.selectValue} onChange={this.handleChange} id={`attrField-${menuChoice}-${idVal}`}>
                <option value="" disabled/>
                {items.map((item, i) => <option key={i} value={item[1]}>{item[0]}</option> )}
              </select>
            </Grid.Column>
            <Grid.Column width={10} stretched style={{paddingLeft: 1 }}>
              {this.autoCompleteTextfield()}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}

export default SelectMenu;