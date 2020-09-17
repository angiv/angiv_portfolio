import React, { Component } from 'react';

import NavigationContainer from "./navigation/navigation-container";
import FooterContainer from "./navigation/footer-container";

export default class Home extends Component {

    
  render() {
    return (
        <div>
            <NavigationContainer />

            <h3>About</h3>
            <h3>Skills</h3>
            <h3>Clients</h3>

            <FooterContainer />

         </div>
    );
  }
}
