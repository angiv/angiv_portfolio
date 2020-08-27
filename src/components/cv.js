import React, { Component } from 'react';

import NavigationContainer from "./navigation/navigation-container";
import FooterContainer from "./navigation/footer-container";

export default class CV extends Component {
  render() {
    return (
        <div>
            <NavigationContainer />
            <h1>PDF-ul CV</h1>
            

            <FooterContainer />

         </div>
    );
  }
}
