import React, { Component } from 'react';
import './header.css';

class Header extends Component {
  render() {
    return (
     <header className ="Header-header">
      
      
       <img id="logo" className="Header-logo" src="./logo.png" alt="logo"/>
      
          <h1 className="Header-title">WELOCOME TO PARLOUR-NOW</h1>  
      

          <p className="Header-intro">
                Life Is More Beautyfull When You Meet The Right Parlour
            </p>    

     </header>   
   

    );
  }
}

export default Header;
