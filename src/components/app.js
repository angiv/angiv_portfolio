import React, { Component } from 'react';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faTrash, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";


import Home from "./home";
import Works from "./works";
import CV from "./cv";
import Contact from "./contact";

export default class App extends Component {
  constructor(props) {
    super(props);

    };


  render() {
    return (
      <div className='app'>
        <Router>
          <div>
                          
                <Switch>
                      <Route exact path="/" component={Home} />
                      <Route path="/works" component={Works} />
                      <Route path="/cv" component={CV} />
                      <Route path="/contact" component={Contact} />
                </Switch>
            
  
          </div>
         </Router>
      </div>
  
    );
  }
}
