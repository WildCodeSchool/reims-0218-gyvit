import React from "react"
import ReactDOM from "react-dom"
import { createStore } from "redux"
import { Provider } from "react-redux"
import reducers from "./reducers"
import { userLogin } from "./api/users/userLogin"

import "bootstrap/dist/css/bootstrap.min.css"
import "./index.css"
import App from "./App"
import registerServiceWorker from "./registerServiceWorker"

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

userLogin("romain@meduza-studio.com", "meduza")

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
)
registerServiceWorker()
