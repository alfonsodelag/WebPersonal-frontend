import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import routes from './config/routes';
import AuthProvider from './providers/AuthProvider';
import AOS from "aos";
import "aos/dist/aos.css";

import './App.scss';

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <AuthProvider>
      <Router>
        <Switch>
          {routes.map((route, index) => (
            <RouteWithSubRoutes key={index} {...route} />
          ))}
        </Switch>
      </Router>
    </AuthProvider>
  );
}

function RouteWithSubRoutes(route) {
  // console.log(route);
  return (
    <Route
      path={route.path}
      exact={route.exact}
      render={props => <route.component routes={route.routes} {...props} />}
    />
  )
}

export default App;
