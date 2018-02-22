// @flow

import React from 'react'
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar'
import BootStrapButton from 'react-bootstrap/lib/Button'

type ButtonProps = {
  children?: string
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
      >
        {children && typeof children === 'string' ? children.toUpperCase() : children}
      </BootStrapButton>
    </ButtonToolbar>
  )
}

export default Button