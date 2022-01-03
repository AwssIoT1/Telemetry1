import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App.js"
import Weather from "./Components/Weather.js"
import Home2 from "./Components/Home2.js"

ReactDOM.render(
  <Router>
    <Routes>
    {/* <Route exact path="/" element={<Weather /> } />    */}
    <Route exact path="/" element={<Home2 /> } /> 
    </Routes>
     </Router>,
  document.getElementById('root')
);