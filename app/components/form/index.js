// @flow

import * as React from 'react';

import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import FirstNameField from './first-name';
import LastNameField from './last-name';
import EmailField from './email';
import Phone from './phone';
import Amount from './amount';
import SubmitButton from './submit-button';
import CurrencySelect from './currency-select';
import { CURRENCY_SELECTOR_TYPES } from '../../constants';

const Form = () => (
  <React.Fragment>
    <form>
      <div className="panel panel-default">
        <div className="panel-heading">
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
        </div>
        <div
          className="panel-body"
        >
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
            <Col sm={6} />
          </Row>
          <Row>
            <Col sm={12}>
              <SubmitButton />
            </Col>
          </Row>
        </div>
      </div>
    </form>
  </React.Fragment>
);

export default Form;
