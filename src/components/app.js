import React, { Component } from 'react';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//import NavigationContainer from "./navigation/navigation-container";

import Home from "./home";
import Works from "./works";
import Contact from "./contact";

//import FooterContainer from "./navigation/footer-container";

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
                      <Route path="/contact" component={Contact} />
                </Switch>
            
  
          </div>
         </Router>
      </div>
  
    );
  }
}
