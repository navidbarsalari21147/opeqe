import React, { Fragment } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { routes } from './routes';
import './router.scss';

const routeList = [...routes];

class Router extends React.Component {
  render() {
    console.log('this.props.userPermissions', this.props.userPermissions);
    return (
      <Switch>
        {routeList.map((route, routeIndex) => {
          if (route.permission) {
            if (
              !!this.props.userPermissions &&
              !!this.props.userPermissions.find(x => x.keyName === route.permission)
            ) {
              return <Route key={routeIndex} exact={!!route.exact} path={route.path} component={route.component} />;
            }
          } else {
            return <Route key={routeIndex} exact={!!route.exact} path={route.path} component={route.component} />;
          }
        })}
      </Switch>
    );
  }
}
