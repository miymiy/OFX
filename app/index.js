// @flow

import React from 'react'
import Grid from 'react-bootstrap/lib/Grid'
import AppRouter from './router'

const App = () => (
  <Grid>
    <h2>Quick Quote</h2>
    <hr style={{
      border: '0px',
      borderTop: '1px solid rgb(51, 204, 255)'
    }} />
    <AppRouter />
  </Grid>
)

export default App
