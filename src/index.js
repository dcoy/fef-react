import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Home, Search, User } from './components/index';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={ Home } />
      <Route exact path="/user/:username" component={ User } />
      <Route path="/search/:query" component={ Search } />
    </div>
  </Router>,
document.getElementById('root'));