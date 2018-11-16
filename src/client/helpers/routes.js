import React from "react";
import Route from "react-router/Route";
import { Switch, Redirect} from 'react-router-dom';

// import { store } from '../config/store';

export const renderRoutes = (routes) => {
  return (
    <Switch>
      {routes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          render={props => route.render
            ? route.render({...props, routes: route.routes})
            : <route.component {...props} routes={route.routes}/>}
        />
      ))}
    </Switch>
  );
};

// export const RedirectHome = () => <Redirect to="/" />

// export const RedirectLogin = (props) => <Redirect to={{ pathname: "/login", state: { from: props.location }}} />

// const isAuthenticated = () => store.getState().currentUser

// export const authenticationMiddleware = (Component) => (props) => isAuthenticated() ? 
//  <Component {...props}/> : RedirectLogin(props)

//  export const adminMiddleware = (Component) => (props) => isAdmin() ? 
//  <Component {...props}/> : RedirectHome()