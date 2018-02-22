// @flow

import * as React from 'react';
import { connect } from 'react-redux';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';
import BootStrapButton from 'react-bootstrap/lib/Button';

import type { StoreProps } from '../../reducers';

type ButtonProps = {
  children?: React.Node,
  isLoading: boolean,
  onClick: () => void,
};

const Button = (props: ButtonProps) => {
  const {
    children = '',
    isLoading,
    onClick,
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
        onClick={onClick}
      >
        {children && typeof children === 'string' ? children.toUpperCase() : children}
      </BootStrapButton>
    </ButtonToolbar>
  );
};

export default connect((state: StoreProps) => ({
  isLoading: state.page.isLoading,
}), () => ({}))(Button);
