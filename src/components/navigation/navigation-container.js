import React, { Component } from "react";

import { NavLink } from "react-router-dom";
import Logo from "../../../static/assets/images/logo-angiv.png";

export default class NavigationComponent extends Component {
  constructor() {
    super();
  }

  render() {
    return (
       <div>
          <div className="nav-logo">
      
              <img  className="nav-logo__img" src={Logo} alt="Logo"/>        
   
          </div>

         <div className='nav-line'></div>
         
         <div className="nav-wrapper">

         <div className="nav-link-wrapper">
                 <NavLink exact to="/" > Home</NavLink>
            </div>
            <div className="nav-link-wrapper">
               <NavLink to="/works" > Works</NavLink>
            </div>

            <div className="nav-link-wrapper">
               <NavLink to="/publications" > Publications</NavLink>
            </div>

            <div className="nav-link-wrapper">
               <NavLink to="/cv" > CV</NavLink>
            </div>

            <div className="nav-link-wrapper">
               <NavLink to="/contact"> Contact</NavLink>
            </div>

      </div>
      <div className='nav-line'></div>
    </div>

    );
  }
}
