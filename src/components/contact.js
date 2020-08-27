import React, { Component } from 'react';

import NavigationContainer from "./navigation/navigation-container";
import FooterContainer from "./navigation/footer-container";

import Form2 from "./form2";


export default class Contact extends Component {


  render() {

    return (
        <div>
            <NavigationContainer />
            <h1>Contact</h1>
            <h1>Formular/cerere de angajare in proiect</h1>

            <br />
            <br />
            <br />
            <Form2 />

            <br />
            <br />
            <br />
            <br />

            
            <FooterContainer />

         </div>
    );
  }
}
