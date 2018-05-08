import * as CONSTANTS from '../constants/index';

const initialState = {sequences1: [],
  sequences2: [],
  sequences2Grid: {
    display: false,
    displayUnit: "16s",
    xLabels: ["Sample", "Ecotype","Eco-subtype"],
    yLabels:["Arg", "Type", "Subtype","Rank"],
    xHeaders:[[1,2,3],[7,8,9],[1,1,1],[1,2,3],[7,8,9],[1,1,1],[1,2,3],[7,8,9],[1,1,1],[1,2,3],[7,8,9],[1,1,1],[1,2,3],[7,8,9],[1,1,1],[1,2,3],[7,8,9],[1,1,1]],
    yHeaders: [[1,2,3,4],[1,2,3,4],[1,2,3,4],[1,2,3,4],[1,2,3,4],[1,2,3,4],[1,2,3,4],[1,2,3,4],[1,2,3,4],[1,2,3,4],[1,2,3,4],[1,2,3,4],[1,2,3,4],[1,2,3,4],[1,2,3,4]],
    grid16s:[
      ["1","x","x","y","z","1x","3x","x","y","z","3x","x","y","z"],
      ["x","x","x","y","z","1x","3x","x","y","z","3x","x","y","z"],
      ["x","x","x","y","z","1x","3x","x","y","z","3x","x","y","z"],
      ["x","x","x","y","z","1x","3x","x","y","z","3x","x","y","z"],
      ["x","x","x","y","z","1x","3x","x","y","z","3x","x","y","z"],
      ["5","x","x","y","z","1x","3x","x","y","z","3x","x","y","z"],
      ["x","x","x","y","z","1x","3x","x","y","z","3x","x","y","z"],
      ["x","x","x","y","z","1x","x","x","y","z","3x","15","x","y"],
      ["8","x","x","y","z","x","1x","x","y","z","3x","x","y","z"],
      ["8","x","x","y","z","x","1x","x","y","z","3x","x","y","z"],
      ["10","x","x","y","z","x","1x","x","y","z","3x","x","y","z"],
      ["8","x","x","y","z","x","1x","x","y","z","3x","x","y","z"],
      ["8","x","x","y","z","x","1x","x","y","z","3x","x","y","z"],
      ["8","x","x","y","z","x","1x","x","y","z","3x","x","y","z"],
      ["14","x","x","y","z","x","1x","x","y","z","3x","x","y","z"],
      ["10","x","x","y","z","x","1x","x","y","z","3x","x","y","z"],
      ["8","x","x","y","z","x","1x","x","y","z","3x","x","y","z"],
      ["8","x","x","y","z","x","1x","x","y","z","3x","x","y","z"]
    ],
    gridCell: [["cx","x","x","y","z"],["cx","x","x","y","z"],["cx","x","x","y","z"]],
    gridPpm: [["px","x","x","y","z"],["px","x","x","y","z"],["px","x","x","y","z"]],
    paginate: {
      horizontal: {
        elPerPage: 10,
        pagesCount: 3,
        currentPage: 1
      },
      vertical: {
        elPerPage: 10,
        pagesCount: 2,
        currentPage: 1
      }
    },
  },
  fetching: false,
  autoCompleteCollection: {
    1: {
      [CONSTANTS.DB.ARG]: [],
      [CONSTANTS.DB.SUBTYPE]: [],
      [CONSTANTS.DB.TYPE]: [],
      [CONSTANTS.DB.RANK]: [],
      [CONSTANTS.DB.GENOME]: [],
      [CONSTANTS.DB.ACCESSION]: [],
      [CONSTANTS.DB.PHYLUM]: [],
      [CONSTANTS.DB.CLASS]: [],
      [CONSTANTS.DB.ORDER]: [],
      [CONSTANTS.DB.FAMILY]: [],
      [CONSTANTS.DB.GENUS]: [],
      [CONSTANTS.DB.SPECIES]: [],
      [CONSTANTS.DB.STRAIN]: [],
      [CONSTANTS.DB.PATHOGEN]: [],
      [CONSTANTS.DB.ALIGNMENT_LENGTH]: [],
      fetching: false
    }, 
    2: {
      [CONSTANTS.DB.SAMPLE]: [],
      [CONSTANTS.DB.ECO_TYPE]: [],
      [CONSTANTS.DB.ECO_SUBTYPE]: [],
      [CONSTANTS.DB.ARG]: [],
      [CONSTANTS.DB.SUBTYPE]: [],
      [CONSTANTS.DB.TYPE]: [],
      [CONSTANTS.DB.RANK]: [],
      fetching: false
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
    case CONSTANTS.CHANGE_TABLE_TWO_UNIT:
      return {...state, sequences2Grid: {...state.sequences2Grid, displayUnit: action.displayUnit}}
    case CONSTANTS.SWITCH_TABLE_TWO_PAGE:{
      return {...state, sequences2Grid: {
        ...state.sequences2Grid, 
        paginate:{
          ...state.sequences2Grid.paginate,
          [action.orientation]: {
            ...state.sequences2Grid.paginate[action.orientation],
            currentPage: action.page
          }
        }
      }}
    }case CONSTANTS.RENDER_TABLE_TWO: {
      return { ...state,
        sequences2Grid: {...state.sequences2Grid, xHeaders: action.xHeaders, yHeaders: action.yHeaders, grid16s: action.grid16s, gridCell: action.gridCell, gridPpm: action.gridPpm, display: true,
        paginate:{
          horizontal: {
            ...state.sequences2Grid.paginate.horizontal,
            pagesCount: Math.ceil(action.grid16s[0].length/state.sequences2Grid.paginate.horizontal.elPerPage),
            currentPage: 1
          },
          vertical: {
            ...state.sequences2Grid.paginate.vertical,
            pagesCount: Math.ceil(action.grid16s.length/state.sequences2Grid.paginate.vertical.elPerPage),
            currentPage: 1
          }
        }
      }};
    }
    case CONSTANTS.FETCH_AUTOCOMPLETE_START:
      return { ...state, autoCompleteCollection: {...state.autoCompleteCollection, [action.tableNo]: {...state.autoCompleteCollection[action.tableNo], fetching: true}} }
    case CONSTANTS.FETCH_AUTOCOMPLETE_SUCCESS:
      return { ...state, autoCompleteCollection: { ...state.autoCompleteCollection, [action.table]: {...state.autoCompleteCollection[action.table], [action.attr]: action.col, fetching: false} } }
    case CONSTANTS.FETCH_AUTOCOMPLETE_FAILURE:
      return { ...state, autoCompleteCollection: { ...state.autoCompleteCollection,
        1: {...state.autoCompleteCollection[action.table], [action.attr]: action.col, fetching: false},
        2: {...state.autoCompleteCollection[action.table], [action.attr]: action.col, fetching: false}},
      }
    default:
      return state;
  }
}