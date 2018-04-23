import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './index.css';
import App from './components/App';
import About from './components/About';
import Shop from './components/Shop';
import Contact from './components/Contact';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BrowserRouter>
      <div>
        <Switch>
          <Route path='/about' component={About} />
          <Route path='/shop' component={Shop} />
          <Route path='/contact' component={Contact} />
          <Route path='/' component={App} />
        </Switch>
      </div>
    </BrowserRouter>
,  document.getElementById('root'));
registerServiceWorker();
