import React, { Component } from 'react';

import NavigationContainer from "./navigation/navigation-container";
import FooterContainer from "./navigation/footer-container";

export default class Home extends Component {

    
  render() {
    return (
        <div>
            <NavigationContainer />
            <h1>Angela Ivanesi </h1>
            <h1>Portfolio</h1>
            <h3>About</h3>
            <h3>Skills</h3>

            <FooterContainer />

         </div>
    );
  }
}
