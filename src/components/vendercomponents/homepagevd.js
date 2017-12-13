import React, { Component } from 'react';
import Header from '../header/header.js';
import Drawervd from './drawervd';

class Homevd extends Component {
  render() {
    return (
      <div>
        
        <Drawervd {...this.props}/>
        <Header/>


      </div>
    );
  }
}

export default Homevd;
