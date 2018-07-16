import React from "react"
import ReactDOM from "react-dom"
import { createStore } from "redux"
import reducers from "./reducers"
import Root from "./components/Root"

import "bootstrap/dist/css/bootstrap.min.css"
import registerServiceWorker from "./registerServiceWorker"

require("dotenv").config() // load the .env into process.env

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(<Root store={store} />, document.getElementById("root"))
registerServiceWorker()
