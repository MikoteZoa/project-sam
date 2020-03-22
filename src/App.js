import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Menu from './Menu';
import ToDoList from './ToDoList';
import DoneList from './DoneList';

class App extends Component {
  render () {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Menu} />
          <Route exact path="/todo" component={ToDoList} />
          <Route exact path="/done" component={DoneList} />
        </Switch>
      </Router>
    );
  }
}

export default App;
