// @flow

import * as React from 'react';
import { connect } from 'react-redux';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';
import BootStrapButton from 'react-bootstrap/lib/Button';

type ButtonProps = {
  children?: React.Node,
  isLoading: boolean
};

const Button = (props: ButtonProps) => {
  const {
    children = '',
    isLoading,
    ...rest
  } = props;
  return (
    <ButtonToolbar style={{
      display: 'flex',
      justifyContent: 'center',
    }}
    >
      <BootStrapButton
        bsStyle="primary"
        disabled={isLoading}
        className="custom-bottom"
        {...rest}
      >
        {children && typeof children === 'string' ? children.toUpperCase() : children}
      </BootStrapButton>
    </ButtonToolbar>
  );
};

export default connect(state => ({
  isLoading: state.page.isLoading,
}), null)(Button);
