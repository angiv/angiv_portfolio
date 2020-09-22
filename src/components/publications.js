import React, { Component } from 'react';

import NavigationContainer from "./navigation/navigation-container";
import FooterContainer from "./navigation/footer-container";

export default class Publications extends Component {
  render() {
    return (
        <div>
            <NavigationContainer />
            <div className='pages_title'>
              PUBLICATIONS
            </div>
        
            <div className='two-column'>
                <div className='left-side'>
                    <h3>De pe mediaforum</h3>
                    <h3>Modalități grafice de prezentare a conținutului jurnalistic: infografice, tabele, scheme. Sfaturi și recomandări</h3>
                    <a href='https://mediaforum.md/upload/webinar/ghiduri-profesionalizare/15-indrumar%20-Ivanesi.pdf' className="" target="_blank">
                    (More read...)
                    </a>
                 </div>

               <div className='right-side'>
                  <h3>coperta in jpg a lucrarii</h3>

               </div>


            </div>

            <FooterContainer />

         </div>
    );
  }
}
