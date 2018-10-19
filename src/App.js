import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import logo from './logo.svg'
import Splash from './components/Splash'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Splash />
        <Footer />
      </div>
    );
  }
}

export default App;
