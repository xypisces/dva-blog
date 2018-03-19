import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import BlogList from './routes/List/Bloglist';
import List from './components/List';
import Indexs from './routes/Index/index';
import Detail from './routes/Detail/detail';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        {/* <Route path="/" exact component={IndexPage} /> */}
        <Route path="/" exact component={Indexs} />
        <Route path="/list" exact component={BlogList} />
        <Route path="/detail" exact component={Detail} />
        {/* <Route path="/lists" exact component={List} /> */}
      </Switch>
    </Router>
  );
}

export default RouterConfig;
