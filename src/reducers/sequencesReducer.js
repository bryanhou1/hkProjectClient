const initialState = {sequences: [],
  fetching: false,
  autoCompleteCollection: {
    argSubtype: [],
    argType: [],
    genome: [],
    accession: [],
    taxonomicphylum: [],
    taxonomicClass: [],
    taxonomicOrder: [],
    taxonomicFamily: [],
    taxonomicGenus: [],
    taxonomicSpecies: [],
    strain: [],
    identity: [],
    hitRatio: [],
    alignmentLength: [],
    eValue: [], 
    fetching: false
  }}

export default function sequenceReducer(state = initialState, action){

  switch (action.type) {
    case "FETCH_SEQUENCE_START":
      return {...state, fetching: true}
    case "FETCH_SEQUENCE_SUCCESS":
      return {...state, sequences: action.sequences, fetching: false}
    case "FETCH_SEQUENCE_FAILURE":
      return {...state, fetching: false}
    case "FETCH_AUTOCOMPLETE_START":
      return { ...state, autoCompleteCollection: {...state.autoCompleteCollection, fetching: true} }
    case "FETCH_AUTOCOMPLETE_SUCCESS":
      return { ...state, autoCompleteCollection: { ...state.autoCompleteCollection, [action.attr]: action.col.map(String), fetching: false } }
    case "FETCH_AUTOCOMPLETE_FAILURE":
      return { ...state, autoCompleteCollection: { ...state.autoCompleteCollection, fetching: false } }
    default:
      return state;
  }
}