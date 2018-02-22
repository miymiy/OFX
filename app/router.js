// @flow

import * as React from 'react';
import { connect } from 'react-redux';
import { Router, Route } from 'react-enroute';
import Form from './components/form';
import Result from './components/result';
import { getCurrPath } from './utils';

type RouterProps = {
  dispatch: ({
    type: string,
    data: string,
  }) => {},
  location: string,
}

class AppRouter extends React.Component<RouterProps> {
  componentDidMount() {
    global.window.addEventListener('popstate', (e) => {
      e.preventDefault();
      this.props.dispatch({
        type: 'PAGE/CHANGE_LOCATION',
        data: getCurrPath(),
      });
    });
  }
  props: RouterProps

  render() {
    return (
      <Router location={this.props.location}>
        <Route path="/" component={Form} />
        <Route path="/result" component={Result} />
      </Router>
    );
  }
}

export default connect(
  state => ({
    location: `/${state.page.location}`,
  }),
  dispatch => ({ dispatch }),
)(AppRouter);
