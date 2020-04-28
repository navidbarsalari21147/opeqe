import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Layout from './screens/shared/Layout';
// import LoginPage from './screens/auth/login';
// import NotFoundPage from './screens/shared/NotFoundPage';
// import ForgetPassword from './screens/forgetPassword';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          {/* <Route path="/login" component={LoginPage} />
          <Route path="/404" component={NotFoundPage} />
          <Route path="/forgetPassword" component={ForgetPassword} /> */}
          <Route path="/" component={Layout} />
          {/* <Redirect to="/404" /> */}
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
