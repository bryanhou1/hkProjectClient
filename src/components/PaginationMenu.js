import React, { Component } from 'react'
import { Grid, Form, Pagination, Segment, Input } from 'semantic-ui-react'
import {connect} from 'react-redux'
import {switchTableTwoPage} from '../actions/index'

class PaginationMenu extends Component {
  handlePaginationChange = (e, { activePage}) => {
    this.props.switchTableTwoPage({orientation: this.props.orientation, page: activePage})
  }

  handlePaginationChange2 = (e, { value, max }) => {
    if (parseInt(value,10) > parseInt(max,10)) {value = max}
    this.props.switchTableTwoPage({orientation: this.props.orientation, page: value})
  }

  render() {
    let {orientation, paginate} = this.props;

    return (
      <div>
        <Grid columns={4}> 
          <Grid.Column>
            
          </Grid.Column>
          <Grid.Column>
            <Input 
                size="mini"
                label='Currently showing...'
                name='activePage'
                orientation={orientation}
                min={1}
                max={paginate[orientation].pagesCount}
                onChange={this.handlePaginationChange2}
                type='number'
                value={paginate[orientation].currentPage}
              /> / {paginate[orientation].pagesCount}
          </Grid.Column>
          <Grid.Column>
            <Pagination
              activePage={paginate[orientation].currentPage}
              onPageChange={this.handlePaginationChange}
              size='mini'
              totalPages={paginate[orientation].pagesCount}
            />
          </Grid.Column>
        </Grid>
        
        <br/>
        
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const {paginate} = state.sequencesReducer.sequences2Grid;
  return {
    paginate: paginate
  }
}

export default connect(mapStateToProps, {switchTableTwoPage})(PaginationMenu);

// export defauly

