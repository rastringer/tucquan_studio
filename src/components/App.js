import React, { Component } from 'react';
import Home from './Home'
import Navbar from './Navbar'
import Carousel from './Carousel'
import DemoCarousel from './Carousel'
import '../App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Navbar />
          <Home />
          <DemoCarousel/>
        </div>
      </div>
    );
  }
}

export default App;
