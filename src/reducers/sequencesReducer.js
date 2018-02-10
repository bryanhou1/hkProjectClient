import * as CONSTANTS from '../constants/index';

const initialState = {sequences: [],
  fetching: false,
  autoCompleteCollection: {
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
    [CONSTANTS.DB.E_VALUE]: [], 
    fetching: false
  }}

export default function sequenceReducer(state = initialState, action){

  switch (action.type) {
    case CONSTANTS.SEARCH_START:
    case CONSTANTS.FETCH_SEQUENCE_START:
      return {...state, fetching: true}
    case CONSTANTS.SEARCH_SUCCESS:
    case CONSTANTS.FETCH_SEQUENCE_SUCCESS:
      return {...state, sequences: action.sequences, fetching: false}
    case CONSTANTS.SEARCH_FAILURE:
    case CONSTANTS.FETCH_SEQUENCE_FAILURE:
      return {...state, fetching: false}


    case CONSTANTS.FETCH_AUTOCOMPLETE_START:
      return { ...state, autoCompleteCollection: {...state.autoCompleteCollection, fetching: true} }
    case CONSTANTS.FETCH_AUTOCOMPLETE_SUCCESS:
      return { ...state, autoCompleteCollection: { ...state.autoCompleteCollection, [action.attr]: action.col, fetching: false } }
    case CONSTANTS.FETCH_AUTOCOMPLETE_FAILURE:
      return { ...state, autoCompleteCollection: { ...state.autoCompleteCollection, fetching: false } }
    default:
      return state;
  }
}