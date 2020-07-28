import React from "react"
import ReactDOM from "react-dom"
import "./index.scss"
import App from "./App"
import * as serviceWorker from "./serviceWorker"
import store from "./store"
import { Provider } from "react-redux"
import { BrowserRouter as Router, Route } from "react-router-dom"
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
)

serviceWorker.unregister()
