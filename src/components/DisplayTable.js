import React, {Component} from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";
import matchSorter from 'match-sorter';

class DisplayTable extends Component {

  fuzzyMatch = (filter, rows) => matchSorter(rows, filter.value, { keys: [filter.id] })
  
  render() {
    const {sequences} =this.props;
    console.log(sequences)
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
              Header: "ARG",
              columns: [
                {
                  Header: "Subtype",
                  accessor: "argSubtype",
                  filterMethod: this.fuzzyMatch,
                  filterAll: true
                },
                {
                  Header: "Type",
                  accessor: "argType"
                }
              ]
            },
            {
              Header: "Genome Taxonomy",
              columns: [
                {
                  Header: "Genome",
                  accessor: "genome",
                  filterMethod: this.fuzzyMatch,
                  filterAll: true
                },
                {
                  Header: "Accession",
                  accessor: "accession",
                  filterMethod: this.fuzzyMatch,
                  filterAll: true
                },
                {
                  Header: "Phylum",
                  accessor: "taxonomicPhylum",
                  filterMethod: this.fuzzyMatch,
                  filterAll: true
                },
                {
                  Header: "Class",
                  accessor: "taxonomicClass",
                  filterMethod: this.fuzzyMatch,
                  filterAll: true
                },
                {
                  Header: "Order",
                  accessor: "taxonomicOrder",
                  filterMethod: this.fuzzyMatch,
                  filterAll: true
                },
                {
                  Header: "Family",
                  accessor: "taxonomicFamily",
                  filterMethod: this.fuzzyMatch,
                  filterAll: true
                },
                {
                  Header: "Genus",
                  accessor: "taxonomicGenus",
                  filterMethod: this.fuzzyMatch,
                  filterAll: true
                },
                {
                  Header: "Species",
                  accessor: "taxonomicSpecies",
                  filterMethod: this.fuzzyMatch,
                  filterAll: true
                },
                {
                  Header: "Strain",
                  accessor: "strain",
                  filterMethod: this.fuzzyMatch,
                  filterAll: true
                }
            
              ]
            },
            {
              Header: 'Blast Criteria',
              columns: [
                {
                  Header: "Identity",
                  accessor: "identity"
                },
                {
                  Header: "Hit Ratio",
                  accessor: "hitRatio"
                },
                {
                  Header: "Alignment Length",
                  accessor: "alignmentLength"
                },
                {
                  Header: "E Value",
                  accessor: "eValue"
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