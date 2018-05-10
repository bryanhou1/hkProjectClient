import React, { Component } from 'react'
import { Grid, Pagination, Input } from 'semantic-ui-react'
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
    let {orientation, paginate, sequence2Grid} = this.props;
    let {currentPage, elPerPage, pagesCount} = paginate[orientation];
    const firstCurrentEntry = currentPage <= 0 ? 0 : (currentPage-1)*elPerPage+1
    const totalEntries = (orientation === 'horizontal') ? sequence2Grid.yHeaders.length : sequence2Grid.xHeaders.length
    const lastCurrentEntry = currentPage===pagesCount ? totalEntries : currentPage * elPerPage
    
    return (
      <div>
        <Grid> 
          <Grid.Column width={4} className="compact">
            <div className="compact">
              Page <Input
                  size="mini"
                  name='activePage'
                  orientation={orientation}
                  min={1}
                  max={paginate[orientation].pagesCount}
                  onChange={this.handlePaginationChange2}
                  type='number'
                  value={paginate[orientation].currentPage}
                /> / {paginate[orientation].pagesCount}
            </div>
          </Grid.Column>
          <Grid.Column className="compact" floated='right' textAlign='right' width={10} verticalAlign="middle">
            {orientation[0].toUpperCase() + orientation.substring(1) + " : "}
            <Pagination
              firstItem={false}
              lastItem={false}
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
    paginate: paginate,
    sequence2Grid: state.sequencesReducer.sequences2Grid
  }
}

export default connect(mapStateToProps, {switchTableTwoPage})(PaginationMenu);

// export defauly

