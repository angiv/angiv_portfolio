import React, { Component } from 'react';
import { Document, Page } from 'pdf';

import NavigationContainer from "./navigation/navigation-container";
import FooterContainer from "./navigation/footer-container";

import Cover1 from "../../static/assets/images/page_1.jpg";
import Cover2 from "../../static/assets/images/page_1 (1).jpg";
import Cover3 from "../../static/assets/images/page_1 (2).jpg"


export default class Magazines extends Component {

  render() {
    return (
        <div>
            <NavigationContainer />
            <div className='pages_title'>
              MAGAZINES
            </div>
            <div className='three-column'>
              <div className='magazine_content'>
               <img className="magazine_img" src={Cover1} alt="Cover1"/> 
               <div>
                  <a href='https://e.issuu.com/issuu-reader3-embed-files/latest/twittercard.html?u=angiv&amp;d=prodiaspora-nr8-lite&amp;p=1'
                  className="magazine_content__caption" target="_blank">
                  Monthly Magazine "ProDiaspora", nr 8  
                </a>
               </div>
            </div>

            <div className='magazine_content'>
              <img className="magazine_img" src={Cover2} alt="Cover2"/> 
              <div>
              <a href='https://e.issuu.com/issuu-reader3-embed-files/latest/twittercard.html?u=angiv&amp;d=obiectiv-eu-nr3-rom-web&amp;p=1'
              className="magazine_content__caption" target="_blank">
              Monthly Magazine "Obiectiv European"       
              </a>
              </div>
            </div>

            <div className='magazine_content'>
            <img className="magazine_img" src={Cover3} alt="Cover3"/> 
            <div>
              <a href='https://e.issuu.com/issuu-reader3-embed-files/latest/twittercard.html?u=angiv&amp;d=migratie-2011&amp;p=1'
              className="magazine_content__caption" target="_blank">
              Magazine "Migration for Development: 
              <div>success stories from Moldova"</div>  
              </a>
              </div>
            </div>

            </div>
  
            <FooterContainer />

         </div>
    );
  }
}
