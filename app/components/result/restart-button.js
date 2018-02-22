// @flow

import React from 'react'
import { connect } from 'react-redux'
import Button from '../shared/button'

const RestartButton = (props: { dispatch: * }) => (
  <Button
    onClick={() => {
      props.dispatch({
        type: 'PAGE/CHANGING_LOCATION',
        data: ''
      })
      props.dispatch({
        type: 'FORM/RESET'
      })
    }}
  >
    Start a new quote
  </Button>
)

export default connect(null, 
  dispatch => ({ dispatch })
)(RestartButton)