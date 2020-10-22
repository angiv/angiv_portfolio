import React, { Component } from 'react';
import axios from 'axios';
import Carousel from 'react-elastic-carousel';
import Loader from 'react-loader-spinner';


import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"


import { connect } from 'react-redux';
import { Link } from "react-router-dom";


export default class OtherWorks extends Component {
    
        constructor(){
          super();
          this.state = {
            pageTitle: "Welcome to my portfolio",
            isLoading: false,
            data: []   
          };

          this.PortfolioItems = this.PortfolioItems.bind(this);
          this.getPortfolioItems = this.getPortfolioItems.bind(this);
          
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
        console.log(response.data);
        
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
        const img_url = 'https://angivportfolio-9187.restdb.io/media';
        return this.state.data.map(item =>{ 
          return <div key={item.id} className='card two-column'> 
                      
              <div className="left-side"> 
               <img className='card-image' src={img_url+'/'+item.imagine}/> 
              </div>
              <div className="right-side">
                <div className='card-title'> {item.name}</div>
                  <div><span className='bold'>Category:</span> {item.category}</div>
                  <div><span className='bold'>Description:</span> {item.description}</div>
                  <div><span className='bold'>Client:</span> {item.client}</div>
                  <div><span className='bold'> Url:</span> <a href={item.url}>{item.url}</a></div>
                </div>
             </div> 
             })
     }
    

      componentDidMount(){
        this.getPortfolioItems();
      }



    render() {
      const { name, description, url, category, imagine, client } = this.props;
   
     
      if (this.state.isLoading){
        return <div>
          
          Loading...</div>;
      }
    
      return (

        <div>
            <div className='logos-wrapper'>
            <Loader type="ThreeDots" color="#FED880" height={40} width={40} timeout={2000}/>


            <Carousel className="rec-carousel-wrapper">
           
             {this.PortfolioItems()}
             </Carousel>

             </div>
       
          </div>
    )
  }
}



