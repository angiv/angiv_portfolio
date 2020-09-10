import React, { Component } from "react";
import IssuuIcon from "../../../static/assets/images/issuu.svg";
import Facebook from "../../../static/assets/images/facebook-brands.svg";
import LinkedinIcon from "../../../static/assets/images/linkedin-brands.svg";
import GoogleIcon from "../../../static/assets/images/google-P-brands.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

  export default class FooterComponent extends Component {
    constructor() {
      super();
    }
  
    render() {

    return (
     <div className="footer-wrapper">
        
        <h4>CAN FIND ME HERE:</h4> 
        
       <div className='footer-wrapper-container'>
             
            <a href='https://www.facebook.com/angela.ivanesi/' className="footer_socials">
              <img src={Facebook} alt="FacebookIcon"/>         
            </a>
           
            <a href='https://www.linkedin.com/in/angela-ivanesi-30079210/' className="footer_socials">
                 <img src={LinkedinIcon} alt="LinkedinIcon" />    
            </a>
            
            < a href='https://photos.app.goo.gl/QxBqEXhXDGDUrSSB7' className="footer_socials">
              <img src={GoogleIcon} alt="GoogleIcon" />    
            </a>
             
             <a href='https://issuu.com/angiv' className="footer_socials">
              <img src={IssuuIcon} alt="Issuu"/>
            </a>
 
         </div>

       </div>
    );
}
}