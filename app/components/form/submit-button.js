// @flow

import React from 'react'
import { connect } from 'react-redux'
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar'
import Button from 'react-bootstrap/lib/Button'

const SubmitButton = (props: { dispatch: * }) => (
  <ButtonToolbar style={{
    display: 'flex',
    justifyContent: 'center'
  }}>
    <Button
      bsStyle='primary'
      onClick={() => props.dispatch({
        type: 'FORM/SUBMIT'
      })}
    >
      GET QUOTE
    </Button>
    <Button
      onClick={() => props.dispatch({
        type: 'PAGE/CHANGING_LOCATION',
        data: 'result'
      })}
    >
      Result Page
    </Button>
  </ButtonToolbar>
)

export default connect(null, 
  dispatch => ({ dispatch })
)(SubmitButton)