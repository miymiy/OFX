// @flow

const loadingReducer = (state: boolean, action: *): boolean => {
  if (!state) {
    return false
  }
  switch (action.type) {
    default:
      return state
  }
}

export default loadingReducer
