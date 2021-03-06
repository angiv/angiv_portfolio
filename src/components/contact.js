import React, { Component } from 'react';


import NavigationContainer from "./navigation/navigation-container";
import FooterContainer from "./navigation/footer-container";
import Form3 from "./form3";
import Form2 from "./form2";

export default class Contact extends Component {


  render() {

    return (
        <div>
            <NavigationContainer />
            <div className='pages_title'>
               CONTACT ME:
            </div>
            <div className="contact_wrapper">
              <p>Do you have questions or sugestions? </p>
              <p>Do you want to collaborate?</p>
              <p> Do you need an offer for the services offered?</p>
            </div>

            <Form2 />

            
            <FooterContainer />

         </div>
    );
  }
}
