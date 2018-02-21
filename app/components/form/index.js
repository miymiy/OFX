// @flow

import React from 'react'
import { connect } from 'react-redux'

import BootstrapForm from 'react-bootstrap/lib/Form'
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'
import FirstNameField from './first-name'
import LastNameField from './last-name'
import EmailField from './email'
import Phone from './phone'
import Amount from './amount'
import SubmitButton from './submit-button'
import CurrencySelect, { CURRENCY_SELECTOR_TYPES } from './currency-select'

const Form = ({ loading, dispatch}) => (
  <BootstrapForm>
    <Row>
      <Col sm={6}>
        <FirstNameField />
      </Col>
      <Col sm={6}>
        <LastNameField />
      </Col>
    </Row>
    <Row>
      <Col sm={12}>
        <EmailField />
      </Col>
    </Row>
    <Row>
      <Col sm={12}>
        <Phone />
      </Col>
    </Row>
    <Row>
      <Col sm={6}>
        <CurrencySelect
          type={CURRENCY_SELECTOR_TYPES.FROM}
        />
      </Col>
      <Col sm={6}>
      <CurrencySelect
        type={CURRENCY_SELECTOR_TYPES.TO}
      />
      </Col>
    </Row>
    <Row>
      <Col sm={6}>
        <Amount />
      </Col>
      <Col sm={6}>
      </Col>
    </Row>
    <Row>
      <Col sm={12}>
        <SubmitButton />
      </Col>
    </Row>
  </BootstrapForm>
)

const mapStateToProps = (state) => ({
  loading: false
})

export default connect(
  mapStateToProps,
  dispatch => ({ dispatch })
)(Form)
