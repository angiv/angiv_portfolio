import React, { Component } from 'react';

import NavigationContainer from "../navigation/navigation-container";
import FooterContainer from "../navigation/footer-container";

export default class Posters extends Component {
  render() {
    return (
        <div>
            <NavigationContainer />
            <h1>Posters</h1>
      
            <FooterContainer />

         </div>
    );
  }
}
