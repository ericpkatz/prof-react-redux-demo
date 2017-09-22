import React from 'react';
import Foo from './Foo';
import Bar from './Bar';
import Controls from './Controls';
import Nav from './Nav';
import { Route, Redirect, HashRouter as Router, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store';

const App = ()=> {
  return (
    <Provider store= { store }>
      <Router>
        <div>
            <Route component={ Nav } />
            <Controls />
          <Switch>
            <Route path='/foo' component={ Foo } />
            <Route path='/bar' component={ Bar } />
            <Redirect to='/foo' />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
