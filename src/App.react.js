import React from 'react';

import { BrowserRouter, Route, Switch } from "react-router-dom";
import routes from "./routes.js";

import * as Errors from "./pages/errors"


class App extends React.Component {

    constructor(props) {  
      super(props);
      this.state = {}
    };

    render() {
      
      return (<BrowserRouter basename={process.env.PUBLIC_URL}>
                <Switch>
                  {routes.map(({path,  isPrivate, strict, exact, isDemoShop, Component}={}, key)=> {
                    return (<Route key={key} exact={exact} strict={strict} path={path} render={(props) => {
                                    return ( <Component {...props} />)}} />)
                  })}
                  <Route component={Errors.Error404} />
                </Switch>
              </BrowserRouter>
      );
    }
}


export default App;