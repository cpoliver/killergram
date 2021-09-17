import React from "react"
import { render } from "react-dom"

import { App } from "./App/App"
import { reportWebVitals } from "./reportWebVitals"
import { ThemeProvider } from "components"

render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
