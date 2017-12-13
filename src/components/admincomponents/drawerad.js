import React from 'react';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
export default class DrawerSimpleExample extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  render() {
    return (
      <div>
          <MuiThemeProvider>
          <div >   
          <AppBar  title="Home Page ADMIN"
            onClick={this.handleToggle} />
            
        </div>
       
       
        <div>
        
        <Drawer width={200}  open={this.state.open} >
        <AppBar title="Menu"
        onClick={this.handleToggle}/>
        </Drawer>
        </div>
        </MuiThemeProvider>
      </div>
    );
  }
}