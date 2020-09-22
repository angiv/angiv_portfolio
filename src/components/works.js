import React, { Component } from 'react';

import NavigationContainer from "./navigation/navigation-container";
import FooterContainer from "./navigation/footer-container";

export default class Works extends Component {

      constructor(){
        super();
        this.state = {
          pageTitle: "Welcome to my portfolio",
          isLoading: false,
          data: []   
        };

        this.PortfolioItems = this.PortfolioItems.bind(this);
        
      }
    

    getPortfolioItems(){
    const url_temp_prefix = 'https://cors-anywhere.herokuapp.com/'; 
    const url = `${url_temp_prefix}https://angivportfolio-9187.restdb.io/rest/portfolio`;
    const data =   {
        "async": true,
        "crossDomain": true,
        "headers": {
          "content-type": "application/json",
          "x-apikey": "90c992050559cc8e045337a7c01b9e5eee3d7",
          "cache-control": "no-cache"
      }};

    axios.get(url,data)
    .then(response => {
        this.setState({
            data : response.data
        }
    )
      })
    .catch(error => {
        console.log('error',error);
    });

  }
  
  PortfolioItems(){
    console.log('state data',this.state.data);
     return this.state.data.map(item =>{
          return <div>{item.title}</div> 
      })

     }

 componentDidMount(){
     this.PortfolioItems();
 }

  render() {
    return (
        <div>
            <NavigationContainer />
            <div className='pages_title'>
              MY WORKS
            </div>
            <h1>Logos</h1>
            <h1>Infographics</h1>
            <h1>Posters</h1>
            <h1>Magazines</h1>
            <h1>Studies</h1>


        <div>
          {this.PortfolioItems()}
        
        </div>

            <FooterContainer />

         </div>
    );
  }
}
