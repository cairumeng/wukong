import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import './i18n'

import 'bootstrap/dist/css/bootstrap.min.css'
import store from './redux/store/createStore'
import App from './App'
import * as serviceWorker from './serviceWorker'
import './index.scss'

ReactDOM.render(
  <Provider store={store}>
    <Suspense fallback={null}>
      <App />
    </Suspense>
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
