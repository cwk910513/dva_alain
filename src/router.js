import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Products from './routes/Products';
import Login from './routes/login/login';
import Home from './routes/home/home';
import Layout from './routes/layout/layout';
import TabHome from './routes/tabPage/home';
import formComponent from './routes/homeComponent/formComponent';
import iconFontComponent from './routes/homeComponent/iconfont';
import lazyloadComponent from './routes/homeComponent/lazyload';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/products" exact component={ Products }/>
        
        <Route path="/" exact component={IndexPage} />
        <Route path="/login" exact component={ Login }/>
        <Route path="/layout" exact component={ Layout }/>
        <Route path="/tabHome" exact component={ TabHome }/>
        <Route path="/home" exact component={ Home }/>
        <Route path="/form" exact component={ formComponent }/>
        <Route path="/icon" exact component={ iconFontComponent }/>
        <Route path="/lazyload" exact component={ lazyloadComponent }/>

      </Switch>
    </Router>
  );
}

export default RouterConfig;
