import React, { Component } from 'react';
import Header from '../header/header.js';
import Drawervd from './drawervd';
import FlatButton from 'material-ui/FlatButton';
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
        <button onClick={e => this.onSubmit(e)}>Submit</button>
          <ul>
               {this.state.myData.map((item,index) => ( 
                <li key={index}>{item}</li>
              ))}
                 
           </ul>  
       

      </div>
    );
  }
}

export default VeiwBooking;
