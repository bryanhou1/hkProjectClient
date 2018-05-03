import * as CONSTANTS from '../constants/index';

const initialState = {sequences1: [],
  sequences2: [],
  sequences2Grid: {
    display: false,
    
    xLabels: ["Sample", "Ecotype","Eco-subtype"],
    yLabels:["Arg", "Type", "Subtype","Rank"],
    xHeaders:[[1,2,3],[7,8,9],[1,1,1]],
    yHeaders: [[1,2,3,4],[1,2,3,4],[1,2,3,4],[1,2,3,4],[1,2,3,4]],
    grid16s:[["x","x","x","y","z"],["x","x","x","y","z"],["x","x","x","y","z"]],
    gridCell: [],
    gridPpm: [],
    paginate: {
      rowsOnEachPage: 10,
      colsOnEachPage: 10,
      rowPagesCount: 3,
      colPagesCount: 5,
      currentPage: 1
    },
  },
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
      return { ...state, sequences2Grid: {...state.sequences2Grid, xHeaders: action.xHeaders, yHeaders: action.yHeaders, grid16s: action.grid16s, gridCell: action.gridCell, gridPpm: action.gridPpm, display: true }};
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