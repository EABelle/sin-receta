import App from './app.js';
import Videos from './react/Videos.js';
import Index from './react/Index.js';
import Contact from './react/Contact.js';
import Albums from './react/Albums.js';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, RouterContext, IndexRoute, Route, browserHistory, IndexRedirect } from 'react-router';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRedirect to="/index" />
      <Route path="index" component={Index}/>
      <Route path="videos" component={Videos}/>
      <Route path="contact" component={Contact}/>
      <Route path="albums" component={Albums}/>
    </Route>
  </Router>
), document.getElementById('app'));
