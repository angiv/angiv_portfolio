import React, { Component } from 'react';

import NavigationContainer from "../navigation/navigation-container";
import FooterContainer from "../navigation/footer-container";

import { connect } from 'react-redux';
import { Link } from "react-router-dom";


export default class Logos extends Component {
    
 
      constructor(props) {
        super(props);
    
        this.state = {
          portfolioItems: ""
        };
      }

    render() {
      const { id, name, description, url, category, imagine, client } = this.props;
   
      return (

        <div>
         {/*   <NavigationContainer />*/}
         <div className='logos-wrapper'>
            <h1>Logos</h1>
    
            


                <div className='logos-imagine__front'>
                    <img className='logos-imagine__front__image' src={imagine}/>
                    <div className='logos-imagine__front__name'>{name}</div>
                </div>
                <div className='logos-imagine__back'>
                    <div className='logos-imagine__back__title'>
                       {name}
                    </div>
                    <div className='logos-imagine__back__description'>
                      {description}
                    </div>
                    <div className='logos-imagine__back__client'>
                      {client}
                    </div>

                    <div className='logos-imagine__back__url'>
                      {url}
                    </div>
                </div>
                </div>

         
         
         
         {/*  <FooterContainer />*/}

         </div>
    )
  }
}



