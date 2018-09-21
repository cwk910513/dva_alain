import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Products from './routes/Products';
import Login from './routes/login/login';
import Home from './routes/home/home';
import Layout from './routes/layout/layout';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/products" exact component={ Products }/>
        
        <Route path="/" exact component={IndexPage} />
        <Route path="/login" exact component={ Login }/>
        <Route path="/home" exact component={ Home }/>
        <Route path="/layout" exact component={ Layout }/>

      </Switch>
    </Router>
  );
}

export default RouterConfig;
