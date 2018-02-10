import axios from 'axios';
import createTrie from 'autosuggest-trie';
import * as CONSTANTS from '../constants/index';

export const initiateSession = () => {
  return (dispatch, getState) => {
    dispatch({type: CONSTANTS.FETCH_SEQUENCE_START})
    const request = axios({
      method: 'get',
      url: 'http://localhost:3000/items'
    })
    
    return request.then(
      response => {
        dispatch({type: CONSTANTS.FETCH_SEQUENCE_SUCCESS, sequences: response.data})
      },
      err => {
        dispatch({type: CONSTANTS.FETCH_SEQUENCE_FAILURE})
        throw err;
      }
    )
  }
}

export const loadAutoComplete = (attr) => {
  return (dispatch, getState) => {
    dispatch({type: CONSTANTS.FETCH_AUTOCOMPLETE_START})
    const request = axios({
      method: 'get',
      url: `http://localhost:3000/get_autocomplete_data`,
      params: {
        "attr": attr
      }
    })
    
    return request.then(
      response => {
        dispatch({type: CONSTANTS.FETCH_AUTOCOMPLETE_SUCCESS, attr: response.data.attr, col: response.data.col.map(String), trie: response.data.trie})
        //trie not implemented
      },
      err => {
        dispatch({type: CONSTANTS.FETCH_AUTOCOMPLETE_FAILURE})
        throw err;
      }
    )
  }
} 

export const search = (query) => {
  return (dispatch, getState) => {
    dispatch({ type: "SEARCH_START" })
    const request = axios({
      method: 'get',
      url: `http://localhost:3000/items`,
      params: {query: query}
    })

    return request.then(
      response => {
        dispatch({ type: "SEARCH_SUCCESS", sequences: response.data})
      },
      err => {
        dispatch({ type: "SEARCH_FAILURE" })
        throw err;
      }
    )
  }
}