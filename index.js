import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js"
import Weather from "./Components/App.js"


ReactDOM.render(
  <React.StrictMode>
     <App />
     <Weather />
  </React.StrictMode>,
  document.getElementById('root')
);