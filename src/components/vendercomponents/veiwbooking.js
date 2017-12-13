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

class VeiwBooking extends Component {
  constructor(){
    super()
    this.state={
      myData:[],
      myInfo : {
        fName:'',
        lName:'',
        e_mail:'',
        password:'',
        cPassword:''
    },
    }
  }
  componentDidMount(){
    // for (let i=0;i<10;i++){
    //   this.state.myData.push(i);
    // }
//
   //[{name:"",no:""},{name:"",no:""},{name:"",no:""},{name:"",no:""}]

        axios.get('http://localhost:1337')
        .then(function (response) {
          console.log('response from axios'+response);
        })
        .catch(function (error) {
          console.log("error from axios"+error);
        });
  }
  inputChange(changeValue,event){
    
       this.state.myInfo[changeValue] = event.target.value;
   this.setState({
           myInfo : this.state.myInfo
       });
   
   }
  render() {
    
    for (let i=0;i<10;i++){
      this.state.myData.push(i);
    }
    return (
      <div>
        <Drawervd {...this.props}/>           
         <MuiThemeProvider>     
          <Table>
            <TableHeader>
              <TableRow>
                <TableHeaderColumn>BOOKING ID</TableHeaderColumn>
                <TableHeaderColumn>CUSTOMER ID</TableHeaderColumn>
                <TableHeaderColumn>BOOKING DATE</TableHeaderColumn>
                <TableHeaderColumn>BOOKING TIME</TableHeaderColumn>
                <TableHeaderColumn>SERVICE</TableHeaderColumn>
              </TableRow>
            </TableHeader>
          </Table>
      </MuiThemeProvider>
      {this.state.myData.map((item,index) => (
      <MuiThemeProvider>
      <Table>
       
      <TableBody>
        <TableRow>
          <TableRowColumn key={index}>{item}</TableRowColumn>
          <TableRowColumn>CS132032</TableRowColumn>
          <TableRowColumn>20/12/17</TableRowColumn>
          <TableRowColumn>9:30AM</TableRowColumn>
          <TableRowColumn>Waxing</TableRowColumn>
        </TableRow>
        </TableBody>
        </Table>
        </MuiThemeProvider>
        
      ))}
      </div>
    );
  }
}

export default VeiwBooking;
