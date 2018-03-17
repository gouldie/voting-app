import * as types from './types'

export const setAuthenticated = (payload) => ({
  type: types.SET_AUTHENTICATED,
  payload
})

export const setUsername = (payload) => ({
  type: types.SET_USERNAME,
  payload
})