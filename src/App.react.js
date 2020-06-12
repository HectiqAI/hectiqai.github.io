import React from 'react';

import { Router, Route, Switch } from "react-router-dom";
import routes from "./routes.js";

import * as Errors from "./pages/errors"
import history from './history';


class App extends React.Component {

    constructor(props) {  
      super(props);
      this.state = {}
    };

    render() {
      
      return (<Router history={history}>
                <Switch>
                  {routes.map(({path,  isPrivate, strict, exact, isDemoShop, Component}={}, key)=> {
                    return (<Route exact={exact} strict={strict} path={path} render={(props) => {
                                    return ( <Component {...props} />)}} />)
                  })}
                  <Route component={Errors.Error404} />
                </Switch>
              </Router>
      );
    }
}


export default App;