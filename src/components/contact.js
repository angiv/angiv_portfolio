import React, { Component } from 'react';

import NavigationContainer from "./navigation/navigation-container";
import FooterContainer from "./navigation/footer-container";

export default class Contact extends Component {
  render() {
    return (
        <div>
            <NavigationContainer />
            <h1>Contact</h1>
            <h1>Formular</h1>
            <h2>Name</h2>
            <h2>Email</h2>
            <h2>Text/information</h2>
            <h2>Button Sent</h2>

            <FooterContainer />

         </div>
    );
  }
}
