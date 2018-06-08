import React from "react"
import ReactDOM from "react-dom"
import { createStore } from "redux"
import { Provider } from "react-redux"
import reducers from "./reducers"

import "bootstrap/dist/css/bootstrap.min.css"
import "./index.css"
import App from "./App"
import registerServiceWorker from "./registerServiceWorker"
import { userLogin } from "./api/users"
import { listAllFiles } from "./api/files"
import { listAllDir } from "./api/directorys"

userLogin()
listAllDir()
listAllFiles()

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
)
registerServiceWorker()
