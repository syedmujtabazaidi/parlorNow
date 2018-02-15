import React, { Component } from 'react';
import Header from '../header/header.js';
import Drawervd from './drawervd';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import axios from 'axios';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import RaisedButton from 'material-ui/RaisedButton';
var a = [];
class VeiwBooking extends Component {
  constructor(){
    super()
     
    this.state={
      parlourdata:[]
       
    }
  }
  componentDidMount()
  {

        axios.get('http://localhost:1337/')
        .then((response)=>
         { 
          if(response!='null')
          {
            console.log('response from axios'+JSON.stringify(response.data));
            // y line execute he nai kr rha y 
            for (var i = 0; i < response.data.data.length; i++) {
              //this.state.parlourdata[i].push(response.data.data[i]);
              console.log(response.data.data[i])
              this.state.parlourdata[i] = response.data.data[i];
              //this.setState.parlourdata[i] = response.data.data[i];

              
            }
            //this.state.parlourdata.push(response.data.data);
              /*this.setState=({
               parlourdata:response.data.data, 
              })*/
            
        console.log("parlour data from mount"+JSON.stringify(this.state.parlourdata[0]))
            
          
           
           // var myObject = JSON.parse(response.data);
         //console.log(response.data.data.length)
           
         
           console.log("main chal gya")
        
            
            
          }
          console.log("if mie nai gaya ")
        })
        .catch(function (error)
        {
          console.log("error from axios");
        });
    };
 
  render() {
    return (
      
      <div>
         
        <Drawervd {...this.props}/>   
                
         <MuiThemeProvider>
         
          <Table>
            <TableHeader>
              <TableRow>
                <TableHeaderColumn></TableHeaderColumn>
                <TableHeaderColumn>BOOKING ID</TableHeaderColumn>
                <TableHeaderColumn>CUSTOMER ID</TableHeaderColumn>
                <TableHeaderColumn>BOOKING DATE</TableHeaderColumn>
                <TableHeaderColumn>BOOKING  TIME</TableHeaderColumn>
                <TableHeaderColumn>SERVICE</TableHeaderColumn>
              </TableRow>
            </TableHeader>
            
      <TableBody>
      <TableRow>
      
        <TableRowColumn>{("parlour data from mount"+JSON.stringify(this.state.parlourdata))}</TableRowColumn>
        </TableRow>
            {this.state.parlourdata.map((item,index) => (  
        <TableRow key={index}>
        <TableRowColumn>{index}</TableRowColumn>
          <TableRowColumn>{item.bookingId} </TableRowColumn>
          <TableRowColumn>{item.customerId}</TableRowColumn>
          <TableRowColumn>{item.bookingDate}</TableRowColumn>
          <TableRowColumn>{item.bookingTime}</TableRowColumn>
          <TableRowColumn>{item.packageName}</TableRowColumn>
    
        </TableRow>
    ))}
        </TableBody>
       
        </Table>
     
      </MuiThemeProvider>
      </div>
    );
  }
}

export default VeiwBooking;
