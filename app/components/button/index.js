// @flow

import React from 'react'
import { connect } from 'react-redux'
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar'
import BootStrapButton from 'react-bootstrap/lib/Button'

type ButtonProps = {
  children?: string,
  isLoading: boolean
}

const customStyles = {
  margin: '20px',
  padding: '15px',
  paddingLeft: '60px',
  paddingRight: '60px',
  borderRadius: '25px',
  letterSpacing: '.1rem'
}

const Button = (props: ButtonProps) => {
  const {
    children,
    isLoading,
    ...rest
  } = props
  return (
    <ButtonToolbar style={{
      display: 'flex',
      justifyContent: 'center'
    }}>
      <BootStrapButton
        bsStyle='primary'
        style={customStyles}
        {...rest}
        disabled={isLoading}
      >
        {children && typeof children === 'string' ? children.toUpperCase() : children}
      </BootStrapButton>
    </ButtonToolbar>
  )
}

export default connect(
  state => ({
    isLoading: state.page.isLoading
  }), null
)(Button)
