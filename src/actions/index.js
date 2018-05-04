import axios from 'axios';
import * as CONSTANTS from '../constants/index';
import * as URL from '../config/url';

export const initiateSession = () => {
  return (dispatch, getState) => {
    dispatch({type: CONSTANTS.FETCH_SEQUENCE_START})
    const request = axios({
      method: 'get',
      url: `${URL.API_URL}/items1`
    })
    
    return request.then(
      response => {
        dispatch({type: CONSTANTS.FETCH_SEQUENCE_SUCCESS, sequences: response.data.items, table: response.data.table})
      },
      err => {
        dispatch({type: CONSTANTS.FETCH_SEQUENCE_FAILURE})
        throw err;
      }
    )
  }
}

export const loadAutoComplete = (attr, tableNo) => {
  return (dispatch, getState) => {
    dispatch({type: CONSTANTS.FETCH_AUTOCOMPLETE_START})
    const request = axios({
      method: 'get',
      url: `${URL.API_URL}/get_autocomplete_data_${tableNo}`,
      params: {
        "attr": attr
      }
    })
    
    return request.then(
      response => {
        dispatch({ type: CONSTANTS.FETCH_AUTOCOMPLETE_SUCCESS, attr: response.data.attr, col: response.data.col.map(String), table: response.data.table})},
      err => {
        dispatch({type: CONSTANTS.FETCH_AUTOCOMPLETE_FAILURE})
        throw err;
      }
    )
  }
} 

export const search = (query, tableNo) => {
  return (dispatch, getState) => {
    dispatch({ type: "SEARCH_START" })
    const request = axios({
      method: 'get',
      url: `${URL.API_URL}/items${tableNo}`,
      params: {query: query}
    })

    return request.then(
      response => {
        const {items, table} = response.data;
        dispatch({ type: "SEARCH_SUCCESS", sequences: items, table: table})
        if (table===2) {
          dispatch({ type: "RENDER_TABLE_TWO", grid16s: response.data.grid16s, gridCell: response.data.gridCell, gridPpm: response.data.gridPpm, xHeaders: response.data.xHeaders, yHeaders: response.data.yHeaders})
        }
      },
      err => {
        dispatch({ type: "SEARCH_FAILURE" })
        throw err;
      }
    )
  }
}

export const changeTableTwoDisplayUnit = (displayUnit) => {
  return dispatch => {
    dispatch({ type: "CHANGE_TABLE_TWO_UNIT", displayUnit: displayUnit })
    return
  }
}

export const switchTableTwoPage = ({orientation, page}) => {
  return dispatch => {
    dispatch({type: "SWITCH_TABLE_TWO_PAGE", orientation: orientation, page: page})
  }
}