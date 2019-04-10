import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import dashboard from './component/dashboard';
import SimpleModal from './component/SimpleModal';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <div className="App">
            <Switch>
              <Route exact path='/' component={dashboard} />
              <Route exact path='/hourly' component={SimpleModal} />
            </Switch>
          </div>
      </BrowserRouter>
    );
  }
}

export default App;
