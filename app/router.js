// @flow

import React from 'react'
import { connect } from 'react-redux'
import { Router, Route } from 'react-enroute'
import Form from './components/form'
import Result from './components/result'
import { getCurrPath } from './utils'

type RouterProps = {
  dispatch: *,
  location: string
}

class AppRouter extends React.Component {
  props: RouterProps

  componentDidMount() {
    window.addEventListener('popstate', e => {
      e.preventDefault()
      this.props.dispatch({
        type: 'PAGE/CHANGE_LOCATION',
        data: getCurrPath()
      })
    })
  }

  render() {
    return (
      <Router location={this.props.location}>
        <Route path='/' component={Form} />
        <Route path='/result' component={Result} />
      </Router>
    )
  }
}

export default connect(
  state => ({
    location: `/${state.page.location}`
  }),
  dispatch => ({ dispatch })
)(AppRouter)
