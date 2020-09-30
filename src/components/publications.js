import React, { Component } from 'react';

import NavigationContainer from "./navigation/navigation-container";
import FooterContainer from "./navigation/footer-container";


import imgCover from "../../static/assets/images/cover.png";

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
               <h3>Modalități grafice de prezentare a conținutului jurnalistic: infografice, tabele, scheme. Sfaturi și recomandări</h3>
                    <div className="publication__txt">
                        <p> Într-o definiție formulată pe scurt, infograficele sunt reprezentări vizuale grafice ale unor informaţii, date sau cunoştinţe. Sunt sigură că ați văzut o astfel de prezentare, formată din semne, simboluri şi cuvinte, colorate şi structurate, ușor de asimilat. Este dovedit științific, 90% din toată informația care este transmisă creierului nostru este vizuală. Din aceste 90% percepem/înțelegem mai repede 80%. Acest procent este ceea ce vedem și doar 20% – ce citim. </p>
                          <p>Știți de ce infografica e atât de populară? Deoarece interpretarea informațiilor grafice are loc în partea creierului care este responsabilă pentru producerea emoțiilor pozitive. Infograficele  sunt prezentări vizuale ale unor informații-cheie care utilizează ilustrații pentru afișarea conținutului. Acestea exprimă mesaje complexe într-un mod care îmbunătățește înțelegerea cititorilor asupra subiectului. Imaginile sunt de multe ori o extensie a conținutului unui articol scris, dar infograficul transmite un mesaj de sine stătător sau un principiu.</p>
                          <p>Cu ce scop se face un infografic? </p>
                          <p>1. Pentru a comunica un mesaj. </p>
                          <p>2. Pentru a prezenta o mulțime de date sau informații într-un mod compact și ușor de înțeles. </p>
                          <p>3. Pentru a analiza datele și pentru a descoperi relații cauză-efect. </p>
                          <p>4. Pentru a monitoriza periodic traseul anumitor parametri în timp. Infografica este o informație ilustrată, prezentată sub formă de text, diagrame, grafice, desene.</p>

                    </div>

                    <h4>Mai mult pe mediaforum.md </h4> <a href='https://mediaforum.md/upload/webinar/ghiduri-profesionalizare/15-indrumar%20-Ivanesi.pdf' className="" target="_blank">
                    (More read...)
                    </a>
                 </div>

                 <div className='right-side'>
                     <img className="publication_img" src={imgCover} alt="imgCover"/> 
                   
                 </div>


            </div>

            <FooterContainer />

         </div>
    );
  }
}
