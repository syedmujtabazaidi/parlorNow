import React, { Component } from 'react';
import Header from '../header/header.js';
import Drawervd from './drawervd';

class CustomizeApp extends Component {
  render() {
    return (
      <div>
        
        <Drawervd {...this.props}/>
        


      </div>
    );
  }
}

export default CustomizeApp;
