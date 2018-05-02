import * as CONSTANTS from '../constants/index';

const initialState = {sequences1: [],
  sequences2: [],
  sequences2GridTest: {xLabels: ["Sample", "Ecotype","Eco-subtype", "Identity", "Hit length", "E-value"],
    yLabels:["Arg", "Type", "Subtype","Rank"], xHeaders:[[1,2,3,4,5,6],[7,8,9,10,11,12],[1,1,1,1,1,1]], yHeaders: [[1,2,3,4],[1,2,3,4],[1,2,3,4],[1,2,3,4],[1,2,3,4]], grid:[["x","x","x","y","z"],["x","x","x","y","z"],["x","x","x","y","z"]]},
  sequences2Grid: [
    [{value: ""}, {value: "Sample"}, {value: "Ecotype"},{value: "Eco-subtype"}, {value: "Identity"}, {value: "Hit length"}, {value: "E-value"}],
    [{value: "ARG"}, {value: "none"}, {value: "none"}, {value: "none"}, {value: "none"}, {value: "none"}, {value: "none"}],
    [{value: "Type"}, {value: "none"}, {value: "none"}, {value: "none"}, {value: "none"}, {value: "none"}, {value: "none"}],
    [{value: "Subtype"}, {value: "none"}, {value: "none"}, {value: "none"}, {value: "none"}, {value: "none"}, {value: "none"}],
    [{value: "Rank"}, {value: "none"}, {value: "none"}, {value: "none"}, {value: "none"}, {value: "none"}, {value: "none"}]
  ],
  fetching: false,
  autoCompleteCollection: {
    1: {
      [CONSTANTS.DB.SUBTYPE]: [],
      [CONSTANTS.DB.TYPE]: [],
      [CONSTANTS.DB.GENOME]: [],
      [CONSTANTS.DB.ACCESSION]: [],
      [CONSTANTS.DB.PHYLUM]: [],
      [CONSTANTS.DB.CLASS]: [],
      [CONSTANTS.DB.ORDER]: [],
      [CONSTANTS.DB.FAMILY]: [],
      [CONSTANTS.DB.GENUS]: [],
      [CONSTANTS.DB.SPECIES]: [],
      [CONSTANTS.DB.STRAIN]: [],
      [CONSTANTS.DB.IDENTITY]: [],
      [CONSTANTS.DB.HIT_RATIO]: [],
      [CONSTANTS.DB.ALIGNMENT_LENGTH]: [],
      [CONSTANTS.DB.E_VALUE]: []
    }, 
    2: {
      "sample": [],
      "ecoType": [],
      "ecoSubtype": [],
      "identity": [],
      "hitLength": [],
      "eValue": [],
      "arg": [],
      "argSubtype": [],
      "argType": [],
      "rank": [],
      "abundance": [],
    },
    fetching: false
    
  }}

export default function sequenceReducer(state = initialState, action){

  switch (action.type) {
    case CONSTANTS.SEARCH_START:
    case CONSTANTS.FETCH_SEQUENCE_START:
      return {...state, fetching: true}
    case CONSTANTS.SEARCH_SUCCESS:
    case CONSTANTS.FETCH_SEQUENCE_SUCCESS:
      return {...state, [`sequences${action.table}`]: action.sequences, fetching: false}
    case CONSTANTS.SEARCH_FAILURE:
    case CONSTANTS.FETCH_SEQUENCE_FAILURE:
      return {...state, fetching: false}

    case "RENDER_TABLE_TWO": {

      let copy = initialState.sequences2Grid.slice()
      copy = copy.map((row, i) => row.concat(...action.grid[0][i]))
      copy = [...copy, ...action.grid[1]]
      return { ...state, sequences2Grid: copy};
    }case CONSTANTS.FETCH_AUTOCOMPLETE_START:
      return { ...state, autoCompleteCollection: {...state.autoCompleteCollection, fetching: true} }
    case CONSTANTS.FETCH_AUTOCOMPLETE_SUCCESS:
      return { ...state, autoCompleteCollection: { ...state.autoCompleteCollection, [action.table]: {...state.autoCompleteCollection[action.table], [action.attr]: action.col}, fetching: false } }
    case CONSTANTS.FETCH_AUTOCOMPLETE_FAILURE:
      return { ...state, autoCompleteCollection: { ...state.autoCompleteCollection, fetching: false } }
    default:
      return state;
  }
}