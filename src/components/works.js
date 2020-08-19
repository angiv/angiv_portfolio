import React, { Component } from 'react';

import NavigationContainer from "./navigation/navigation-container";
import FooterContainer from "./navigation/footer-container";

export default class Works extends Component {
  render() {
    return (
        <div>
            <NavigationContainer />
            <h1>Logos</h1>
            <h1>Infographics</h1>
            <h1>Posters</h1>
            <h1>Magazines</h1>


            <FooterContainer />

         </div>
    );
  }
}
