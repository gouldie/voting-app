import * as types from '../actions/types'

const initialState = {
  isAuthenticated: false,
  username: null
}

export default function auth(state = initialState, action) {
  switch (action.type) {
    case types.SET_AUTHENTICATED:
      return {
        ...state,
        isAuthenticated: action.payload
      }
    case types.SET_USERNAME:
      return {
        ...state,
        username: action.payload
      }
    default:
      return state
  }
}