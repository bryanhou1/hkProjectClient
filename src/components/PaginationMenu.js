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
    let {orientation, paginate} = this.props;
    // let {currentPage, elPerPage, pagesCount} = paginate[orientation];
    // const firstCurrentEntry = currentPage <= 0 ? 0 : (currentPage-1)*elPerPage+1
    // const lastCurrentEntry = currentPage===pagesCount ? totalEntries : currentPage * elPerPage
    // const totalEntries = (orientation === 'horizontal') ? sequence2Grid.yHeaders.length : sequence2Grid.xHeaders.length
    
    let dict = { horizontal: "ARG", vertical: "Sample"}
    
    return (
      <div>
        <Grid> 
          <Grid.Column className="compact" floated='right' textAlign='right' width={16} verticalAlign="middle">
            { dict[orientation] + " : "}
            <Pagination
              firstItem={false}
              lastItem={false}
              activePage={paginate[orientation].currentPage}
              onPageChange={this.handlePaginationChange}
              size='mini'
              totalPages={paginate[orientation].pagesCount}
            />
            <span>
              <Input
                size="mini"
                name='activePage'
                orientation={orientation}
                min={1}
                max={paginate[orientation].pagesCount}
                onChange={this.handlePaginationChange2}
                type='number'
                value={paginate[orientation].currentPage}
              /> / {paginate[orientation].pagesCount}
            </span>
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

