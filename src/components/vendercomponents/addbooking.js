import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Header from '../header/header.js';
import Drawervd from './drawervd';
import DatePicker from 'material-ui/DatePicker';
import TimePicker from 'material-ui/TimePicker';
/*
var express = require('express');
var mysql = require('mysql');
var express = require('express')

var connection = mysql.createConnection({
  
      host: 'localhost',
      user: 'root',
      password: 'admin',
      database: 'sampledb'
  });
  var app = express();
  connection.connect(function(error)
   {
      if(!!error){
          console.log('Error');
      }
      else {
          console.log('Connected');
      }
  
  });*/
class AddBooking extends Component {
  constructor(props){
    super(props);
    this.state={
      name:'',
      type:'',
      number:'',
      service:''
      
   }
  }


handleClick(event){
  
     console.log("Name:",this.state.name);
     console.log("Number:",this.state.number);
     console.log("Service:",this.state.service);

     this.props.history.push('/Homevd')
  };
handelCancel(){

  this.props.history.push('/Homevd')
}

  render() {
    return (
   <div>
        <MuiThemeProvider>
          <div>
          <Drawervd {...this.props}/>
          <AppBar style={{ backgroundColor: '#2196F3' }} title="New Booking"/>
          
          <br></br><br></br><br></br>
           <TextField
             hintText="Enter your Customer Name"
             floatingLabelText="CLIENT NAME"
             onChange = {(event,newValue) => this.setState({name:newValue})}
             />
           <br/>

           <TextField
             hintText="Enter your Number"
             type="number"
             floatingLabelText="Number"
             onChange = {(event,newValue) => this.setState({number:newValue})}
             />
           <br/>
           <TextField
             type = "SERVICES"
             hintText="Enter your Service"
             floatingLabelText="Service"
             onChange = {(event,newValue) => this.setState({service:newValue})}
             />
           <br/>

           <DatePicker  hintText="Select Date" />

          <TimePicker  hintText="Select Time" />

           <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
           <RaisedButton label="Cancel" primary={true} style={style} onClick={(event) => this.handelCancel()}/>
          </div>
          
             
         </MuiThemeProvider>
           
            
      </div>
      
       
    );
    
  }
}



/*
app.post('/',function(req,res,next)
{
  
var customername = req.body.mysampletable;

connection.query("INSERT INTO mysampletable where name = ?",
[customername],function(error,rows,fields)
{
  if (!!error){
    console.log('Error in the query');
}

  if(req.body > 0){
    res.send({'success': true, 'message': 'Booking is sent'});
  }

  else{
    res.send({'success': false, 'message': 'booking send'});
  }

});
});

*/

const style = {
  margin: 15,
};
export default AddBooking;








