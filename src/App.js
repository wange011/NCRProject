import React, { Component } from 'react';
import Home from './components/Home'
import Login from './components/Login'
import './App.css';
import './App.css';
import { connect } from 'react-redux';

class App extends Component {

  handleLogin = () => {

    // First check if user has authentication

    this.props.login();

  }

  render() {

    // Only render this component if the user is logged in
    if (this.props.authorized) {

      return (
        <div className="App">
        
          <Home />

        </div> 
      )
    }

    else {
      return (
        <div className="App">
        
          <Login />    
        
        </div>
      )
    
    }    
  }
}

const mapStateToProps = (state) => {
  return {
      authorized: state.authorized
  }
}

export default connect(mapStateToProps, null)(App);
