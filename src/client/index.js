import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Test = () => <Router>
   <Route path="/test" component={App} />
</Router>

ReactDOM.render(
  <Test />, 
document.getElementById('root'));
