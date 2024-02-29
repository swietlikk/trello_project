import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
// import Login from './components/Login';
// import Register from './components/Register';
import { Link as ScrollLink } from 'react-scroll';

const App = () => {
  return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            {/*<Route path="/login" component={Login} />*/}
            {/*<Route path="/register" component={Register} />*/}
          </Switch>
        </div>
      </Router>
  );
}

export default App;