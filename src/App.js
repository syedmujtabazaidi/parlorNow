import React, { Component } from 'react';
import Header from './components/header/header';
import Homevd from './components/vendercomponents/homepagevd';
import Drawervd from './components/vendercomponents/drawervd';
import MainHome from './components/mainHomepage';
import Homead from './components/admincomponents/homepagead';
import AddBooking from './components/vendercomponents/addbooking';
import VeiwBooking from './components/vendercomponents/veiwbooking';
import AddStaff from './components/vendercomponents/addstaff';
import VeiwStaff from './components/vendercomponents/veiwstaff';
import CustomizeApp from './components/vendercomponents/customizeapp';
import Logout from './components/logout';
import Signup from './components/signup';

import Login from './components/login'
import './App.css';
import{
  BrowserRouter as Router,
  Route,
  Link
  }from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className="App">
      
      <Router>
          <div>
              <Route exact path="/" component ={MainHome}/>
              <Route path="/homevd" component={Homevd}/> 
              <Route path="/homead" component={Homead}/> 
              <Route path="/Vender/VeiwBooking" component={VeiwBooking} />              
              <Route path="/Vender/AddBooking" component={AddBooking} />
              <Route path="/Vender/AddStaff" component={AddStaff} />
              <Route path="/Vender/VeiwStaff" component={VeiwStaff} />
              <Route path="/Vender/CustomizeApp" component={CustomizeApp} />
              <Route path="/Logout" component={Logout} />
              <Route path="/Signup" component={Signup} />

          </div>
         </Router>


       
        
        
       
      </div>
    );
  }
}

export default App;
