import React, { Component } from 'react';

import NavigationContainer from "./navigation/navigation-container";
import FooterContainer from "./navigation/footer-container";

import imgAbout from "../../static/assets/images/about-photo-01.png";


export default class Home extends Component {

    
  render() {
    return (
        <div>
            <NavigationContainer />

          <div className='about_wrapper'>

            <div className='two-column'>
              <div className='left-side'>
            
                  <div className='about__title'>
                   <h1>HELLO!/noroc!</h1>
                    <p> My name is Angela (AngIV).</p> 
                    <p>I am a graphic designer from Chisinau, Republic of Moldova.</p>
                  </div>
           
                <div className='about__txt'>
                  <p>I am passionate about running the business and the projects grow.</p>
                  <p>I am interested in designing infographics, logos, posters, studies and magazines and adding to social media posts.</p>
                  <p>I use expressive graphics in my designs that give a clear picture to the audience about your company, your products and services.</p>
                </div>

             </div>

             <div className='right-side'>
              <img className="publication_img" src={imgAbout} alt="imgAbout"/> 
             </div>

            </div>
          </div>


          <div className='experience_wrapper'>
              <div className="home_title"> Sphere of Activity</div>
              <div className='three-column'>
                <div className='text_one'>
                  Infographics, logo design, corporate stationary and development of branding across print, digital and social media.
                </div>

                <div className='text_two'>
                  Flyers, leaflets, exhibition graphics, brochures, guides, studies, reports and magazines.
                </div>

                <div className='text_three'>
                  Responsive websites (static HTML/CSS, JavaScript, React), graphics for social media, web banner advertising.
                </div>


              </div>

          </div>
            <div className='skills_wrapper'>
              <div className="home_title">Skills</div>
              <ul className='skills'>
                <li>Adobe InDesign
                  <div className='skills indesign'>90%</div>
                </li>
                <li>Adobe Photoshop
                  <div className='skills photoshop'>70%</div>
                </li>
                <li>Adobe Illustrator
                 <div className='skills illustrator'>70%</div>
                </li>
                <li>CorelDraw
                  <div className='skills corel'>50%</div>
                </li>
                <li>Html/CSS
                  <div className='skills html-css'>40%</div>
                </li>
                <li>JavaScript
                  <div className='skills javascript'>40%</div>
                </li>
              </ul>


            </div>

            
            <div className='client_wrapper'>
            <div className="home_title">Clients</div>
                <div className='clients_lists'>
                  <a href='https://api.md' className="" target="_blank">The Association of Independent Press (API),  </a>
                  <a href='http://www.media-azi.md/en' className="" target="_blank">The Independent Journalism Center (IJC),  </a>
                  <a href='https://crjm.org/en/prezentarea-crjm/' className="" target="_blank">The Legal Resources Centre from Moldova (LRCM), </a>
                  <a href='http://www.fes-moldova.org/' className="" target="_blank">FES in Moldova,  </a>
                  <a href='https://librariadorinta.md/' className="" target="_blank">Publishing House "Dorinta", </a>
                  etc.
                </div>
            </div>


            <FooterContainer />
         </div>
    );
  }
}
