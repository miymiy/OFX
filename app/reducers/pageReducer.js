// @flow

import { getCurrPath } from '../utils'

type PageReducerProps = {
  isLoading: boolean,
  location: string,
}

const pageReducer = (state: ?PageReducerProps, action: *): PageReducerProps => {
  if (!state) {
    return {
      isLoading: false,
      location: getCurrPath()
    }
  }
  switch (action.type) {
    case 'PAGE/CHANGE_LOCATION':
      return {
        ...state,
        location: action.data
      }
    case 'PAGE/TOGGLE_LOADING':
      return {
        ...state,
        isLoading: !state.isLoading
      }
    default:
      return state
  }
}

export default pageReducer
