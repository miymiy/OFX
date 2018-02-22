// @flow

import React from 'react'
import { connect } from 'react-redux'
import Button from '../button'

const SubmitButton = (props: { dispatch: * }) => (
  <Button
    onClick={() => props.dispatch({
      type: 'FORM/SUBMIT'
    })}
  >
    Get quote
  </Button>
)

export default connect(null, 
  dispatch => ({ dispatch })
)(SubmitButton)