import * as React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import {AppProvider} from './provider'

ReactDOM.render(
  <AppProvider>
    <App />
  </AppProvider>,
  document.getElementById('root'),
)
