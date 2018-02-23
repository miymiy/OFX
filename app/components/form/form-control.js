// @flow

import * as React from 'react';
import { connect } from 'react-redux';
import BootstrapFormControl from 'react-bootstrap/lib/FormControl';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import SelectControl from './select-control';

import type { SelectorData } from './select-control';

export const FORM_CONTROL_TYPES = {
  TEXT: 'text',
  SELECT: 'select',
};

type FormControlPropsBase = {
  id: string,
  label: string,
  value: string,
  required: boolean,
  placeholder?: string,
  error: ?string,
  dispatch: *
}

type FormControlTextProps = {
  type: 'text'
} & FormControlPropsBase

type FormControlSelectProps = {
  type: 'select',
  options: SelectorData
} & FormControlPropsBase

type FormControlProps =
  FormControlTextProps | FormControlSelectProps

const handlers = (id, required, dispatch) => ({
  onChange: e => dispatch({
    type: 'FORM/UPDATE_INPUT',
    data: {
      key: id,
      value: e.target.value,
    },
  }),
  onBlur: () => {
    if (required) {
      dispatch({
        type: 'FORM/VALIDATE_REQ_FIELD',
        data: id,
      });
    }
  },
});

const FormControl = (props: FormControlProps) => {
  const {
    id,
    label,
    required,
    value,
    placeholder = '',
    type,
    error = '',
    dispatch,
    ...rest
  } = props;

  const hasError = !!error;

  const getControl = () => {
    if (props.type === FORM_CONTROL_TYPES.SELECT) {
      return (
        <SelectControl
          value={value}
          placeholder={placeholder}
          options={props.options}
          {...handlers(id, required, dispatch)}
          {...rest}
        />
      );
    }
    return (
      <BootstrapFormControl
        type={FORM_CONTROL_TYPES.TEXT}
        value={value}
        placeholder={placeholder}
        {...handlers(id, required, dispatch)}
        {...rest}
      />
    );
  };

  return (
    <FormGroup
      controlId={id}
      validationState={hasError ? 'error' : null}
    >
      <ControlLabel
        {...(required ? { className: 'required-input' } : {})}
      >
        {label}
      </ControlLabel>
      {getControl()}
      {hasError && (
        <span
          className="error-feedback"
        >
          {error}
        </span>)
      }
    </FormGroup>
  );
};

export default connect(
  (state, props) => ({
    value: state.form.data[props.id],
    error: state.form.errors[props.id],
    required: !!state.staticData.form.required[props.id],
  }),
  dispatch => ({ dispatch }),
)(FormControl);
