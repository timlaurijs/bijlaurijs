import React from "react"
import sanity from "@sanity/client"
import ReactDOM from "react-dom"
import "./index.scss"
import App from "./App"
import * as serviceWorker from "./serviceWorker"
import store from "./store"
import { Provider } from "react-redux"
import { BrowserRouter as Router, Route } from "react-router-dom"

const { NODE_ENV, REACT_APP_SANITY_PROJECT_ID: PROJECT_ID } = process.env

export const sanityClient = sanity({
  projectId: PROJECT_ID,
  dataset: "production",
  useCdn: NODE_ENV === "production",
})

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
)

serviceWorker.unregister()
