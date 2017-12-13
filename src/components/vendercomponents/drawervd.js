import React from 'react';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import MenuItem from 'material-ui/MenuItem';
import{
  BrowserRouter as Router,
  Route,
  Link
  }from 'react-router-dom';
import AddBooking from './addbooking';
import VeiwBooking from './veiwbooking';
import AddStaff from './addstaff';
import VeiwStaff from './veiwstaff';
import CustomizeApp from './customizeapp';
import Logout from '../logout';
import MainHome from '../mainHomepage';
export default class DrawerSimpleExample extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});
  AddBooking(){
    this.props.history.push("/Vender/AddBooking")
  }
  VeiwBooking(){
    this.props.history.push("/Vender/VeiwBooking")
  }
  AddStaff(){
    this.props.history.push("/Vender/AddStaff")
  }
  VeiwStaff(){
    this.props.history.push("/Vender/VeiwStaff")
  }
  CustomizeApp(){
    this.props.history.push("/Vender/CustomizeApp")
  }
  Logout(){
    this.props.history.push("/")
  }

  render() {
    return (
      <div>
          <MuiThemeProvider>
          <div >   
          <AppBar title="PARLOUR-NOW"
          style={{ backgroundColor: '#2196F3' }}
          onLeftIconButtonTouchTap={this.handleToggle} 
          iconElementRight={<FlatButton label="Log out"onClick={this.Logout.bind(this)}/>}
          />
            


            
        </div>
       
       
        <div>
        
        <Drawer width={200}  open={this.state.open} >
        <AppBar title="Menu"
        style={{ backgroundColor: '#2196F3' }}
        onClick={this.handleToggle}/>

        <MenuItem onClick={this.AddBooking.bind(this)}>Add Booking</MenuItem>
        <MenuItem onClick={this.VeiwBooking.bind(this)}>Veiw Booking</MenuItem>
        <MenuItem onClick={this.AddStaff.bind(this)}>Add Staff</MenuItem>
        <MenuItem onClick={this.VeiwStaff.bind(this)}>Veiw Staff</MenuItem>
        <MenuItem onClick={this.CustomizeApp.bind(this)}>Customize App</MenuItem>
        

        </Drawer>
        </div>

        
        </MuiThemeProvider>
      </div>
    );
  }
}
const style = {
  margin: 15,
};