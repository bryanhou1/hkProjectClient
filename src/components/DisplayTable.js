import React, {Component} from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";
import * as CONSTANTS from "../constants/index";
import matchSorter from 'match-sorter';

class DisplayTable extends Component {

  fuzzyMatch = (filter, rows) => matchSorter(rows, filter.value, { keys: [filter.id] })
  
  render() {
    const {sequences} =this.props;
    return (
      <ReactTable
          data={sequences}
          filterable
          columns={[
            {
              Header: "ID",
              columns: [
                {
                  Header: "ID",
                  accessor: "id"
                }
              ]
            },
            {
              Header: CONSTANTS.ARG,
              columns: [
                {
                  Header: CONSTANTS.DISPLAY.SUBTYPE,
                  accessor: CONSTANTS.DB.SUBTYPE,
                  filterMethod: this.fuzzyMatch,
                  filterAll: true
                },
                {
                  Header: CONSTANTS.DISPLAY.TYPE,
                  accessor: CONSTANTS.DB.TYPE,
                }
              ]
            },
            {
              Header: CONSTANTS.GENOME_TAXONOMY,
              columns: [
                {
                  Header: CONSTANTS.DISPLAY.GENOME,
                  accessor: CONSTANTS.DB.GENOME,
                  filterMethod: this.fuzzyMatch,
                  filterAll: true
                },
                {
                  Header: CONSTANTS.DISPLAY.ACCESSION,
                  accessor: CONSTANTS.DB.ACCESSION,
                  filterMethod: this.fuzzyMatch,
                  filterAll: true
                },
                {
                  Header: CONSTANTS.DISPLAY.PHYLUM,
                  accessor: CONSTANTS.DB.PHYLUM,
                  filterMethod: this.fuzzyMatch,
                  filterAll: true
                },
                {
                  Header: CONSTANTS.DISPLAY.CLASS,
                  accessor: CONSTANTS.DB.CLASS,
                  filterMethod: this.fuzzyMatch,
                  filterAll: true
                },
                {
                  Header: CONSTANTS.DISPLAY.ORDER,
                  accessor: CONSTANTS.DB.ORDER,
                  filterMethod: this.fuzzyMatch,
                  filterAll: true
                },
                {
                  Header: CONSTANTS.DISPLAY.FAMILY,
                  accessor: CONSTANTS.DB.FAMILY,
                  filterMethod: this.fuzzyMatch,
                  filterAll: true
                },
                {
                  Header: CONSTANTS.DISPLAY.GENUS,
                  accessor: CONSTANTS.DB.GENUS,
                  filterMethod: this.fuzzyMatch,
                  filterAll: true
                },
                {
                  Header: CONSTANTS.DISPLAY.SPECIES,
                  accessor: CONSTANTS.DB.SPECIES,
                  filterMethod: this.fuzzyMatch,
                  filterAll: true
                },
                {
                  Header: CONSTANTS.DISPLAY.STRAIN,
                  accessor: CONSTANTS.DB.STRAIN,
                  filterMethod: this.fuzzyMatch,
                  filterAll: true
                }
            
              ]
            },
            {
              Header: CONSTANTS.BLAST_CRITERIA,
              columns: [
                {
                  Header: CONSTANTS.DISPLAY.IDENTITY,
                  accessor: CONSTANTS.DB.IDENTITY
                },
                {
                  Header: CONSTANTS.DISPLAY.HIT_RATIO,
                  accessor: CONSTANTS.DB.HIT_RATIO
                },
                {
                  Header: CONSTANTS.DISPLAY.ALIGNMENT_LENGTH,
                  accessor: CONSTANTS.DB.ALIGNMENT_LENGTH
                },
                {
                  Header: CONSTANTS.DISPLAY.E_VALUE,
                  accessor: CONSTANTS.DB.E_VALUE
                }
              ]
            }
          ]}
          defaultPageSize={10}
          className="-striped -highlight"
        />
    )
  }

}

export default DisplayTable;