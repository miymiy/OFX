// @flow

import * as React from 'react';
import Alert from 'react-bootstrap/lib/Alert';

export const MESSAGE_BOX_TYPES = {
  DANGER: 'danger',
  INFO: 'info',
};

type MessageBoxProps = {
  type: 'danger' | 'info',
  children?: React.Node,
}

const MessageBox = (props: MessageBoxProps) => {
  const {
    type,
    children = null,
    ...rest
  } = props;
  return (
    <Alert
      bsStyle={type}
      {...rest}
    >
      {children}
    </Alert>
  );
};

export default MessageBox;
