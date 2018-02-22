// @flow

import React from 'react'
import Alert from 'react-bootstrap/lib/Alert'

export const MESSAGE_BOX_TYPES = {
  DANGER: 'danger',
  INFO: 'info'
}

type MessageBoxProps = {
  type: 'danger' | 'info',
  children?: *,
}

const MessageBox = (props: MessageBoxProps) => {
  const {
    type,
    children,
    ...rest
  } = props
  return (
    <Alert
      bsStyle={type}
      {...rest}
    >
      {children}
    </Alert>
  )
}

export default MessageBox