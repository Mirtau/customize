import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import { BrowserRouter as Router,
    Route, } from 'react-router-dom'

import logo from './logo.svg'
import Splash from './components/Splash'
import CustomizedNavbar from './components/Navbar'
import Footer from './components/Footer'
import About from './components/About'
import Testimonials from './components/Testimonials'
import How from './components/How'
import './App.css'

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
          <CustomizedNavbar />
          <Route exact path ='/' component={Splash} />
          <Route exact path ='/About' component={About}/>
          <Route exact path='/Testimonials' component={Testimonials} />
          <Route exact path='/How' component={How}/>
          <Footer />
      </div>
    </Router>
    );
  }
}

export default App;
