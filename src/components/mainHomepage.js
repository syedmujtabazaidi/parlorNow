import React, { Component } from 'react';
import Header from './header/header.js';
import Footer from './footer/footer.js';
import Login from './login'

class MainHome extends Component {
  render() {
    return (
      <div>


        <Header/>

        <Login {...this.props}/>

        <Footer/>
      </div>
    );
  }
}

export default MainHome;
