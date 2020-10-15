import React, { Component } from 'react';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faTrash, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";


import Home from "./home";
import Works from "./works";
import Publications from "./publications";
import Magazines from "./magazines";
import Contact from "./contact";

export default class App extends Component {
  constructor() {
    super();

    };


  render() {
    return (
      <div className='app'>
        <Router>
          <div>
                          
                <Switch>
                      <Route exact path="/" component={Home} />
                      <Route path="/works" component={Works} />
                      <Route path="/publications" component={Publications} />
                      <Route path="/magazines" component={Magazines} />
                      <Route path="/contact" component={Contact} />
                </Switch>
            
  
          </div>
         </Router>
      </div>
  
    );
  }
}
