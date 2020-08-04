import React, { Component } from 'react';
import { withRouter } from 'react-router';

import Home from './pages/Home';
import Page404 from './pages/404';
import Contact from './pages/Contact';

import {
  Route, Switch
} from 'react-router-dom';

class Routes extends Component {
  render() {
  
    return (
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/contact' component={Contact} />
          <Route path="*" component={Page404}/>
        </Switch>
    );
   }
}

export default withRouter(Routes);



