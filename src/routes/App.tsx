import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory as createHistory } from "history";

import Home from './home/Home';
import ComponentEditor from './componentEditor/ComponentEditor';

import '../assets/css/App.css';
import main from '../main';
import menu from '../components/project/menu/menu';

// import {setText} from '../components/project/menu/menu';
main();
// Assign it to `window.menu` to get the menu displayed
nw.Window.get().menu = menu;
// setText

const history = createHistory();

const App = () => {
  return (
    <div className="App">
      <Router history={ history }>
        <main>
          <Switch>
            <Route exact path='/' component={ Home } />
            <Route path='/' component={ ComponentEditor } />
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
