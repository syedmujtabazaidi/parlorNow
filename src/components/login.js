import React, { Component } from 'react';

    import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
    import AppBar from 'material-ui/AppBar';
    import RaisedButton from 'material-ui/RaisedButton';
    import TextField from 'material-ui/TextField';
    import Paper from 'material-ui/Paper';

   

class Login extends Component {

  state = {
    username:"",
    password: "",
};
change = (e) => {
    this.setState({ [e.target.name]: e.target.value})};
    
    onSubmit = (e) => {
        
          this.props.history.push('/homevd')
      };

      handleClick(event) {
        if((this.state.username==='vendor')&&(this.state.password==='dsu') )
        {
          this.props.history.push('/homevd')
        }
        else if((this.state.username==='admin')&&(this.state.password==='dsu'))
        {
          this.props.history.push('/homead')
        }
        else{
          alert("Wroung Password...")
        }
        
      };

      signup(){

        this.props.history.push('/Signup')

      };




  render() {
    return (

        



       <div>
        
        <MuiThemeProvider>
          <div>
          
              <br></br>  <br></br>   <br></br>  <br></br>   
           <TextField
             hintText="Enter your User Name"
             floatingLabelText="Enter User Name"
             onChange = {(event,newValue) => this.setState({username:newValue})}
             />
           <br/>
             <TextField
               type="password"
               hintText="Enter your Password"
               floatingLabelText="Password"
               onChange = {(event,newValue) => this.setState({password:newValue})}
               />
             <br/>
             <RaisedButton label="Sign in" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
             <RaisedButton label="Sign Up" primary={true} style={style} onClick={(event) => this.signup()}/>
         </div>
         </MuiThemeProvider>
      </div>




  
     
     

    );
  
};
}
const style = {
    margin: 15,
   };
export default Login;