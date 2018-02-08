import axios from 'axios';
import createTrie from 'autosuggest-trie';

export const initiateSession = () => {
  return (dispatch, getState) => {
    dispatch({type: "FETCH_SEQUENCE_START"})
    const request = axios({
      method: 'get',
      url: 'http://localhost:3000/items'
    })
    
    return request.then(
      response => {
        dispatch({type: "FETCH_SEQUENCE_SUCCESS", sequences: response.data})
      },
      err => {
        dispatch({type: "FETCH_SEQUENCE_FAILURE"})
        throw err;
      }
    )
  }
}

export const loadAutoComplete = (attr) => {
  return (dispatch, getState) => {
    dispatch({type: "FETCH_AUTOCOMPLETE_START"})
    const request = axios({
      method: 'get',
      url: `http://localhost:3000/get_autocomplete_data`,
      params: {
        "attr": attr
      }
    })
    
    return request.then(
      response => {
        dispatch({type: "FETCH_AUTOCOMPLETE_SUCCESS", attr: response.data.attr, col: response.data.col})
      },
      err => {
        dispatch({type: "FETCH_AUTOCOMPLETE_FAILURE"})
        throw err;
      }
    )
  }
} 