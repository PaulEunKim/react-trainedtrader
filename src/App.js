import React, { Component } from 'react';
import './App.css';
import Body from './components/body.js';
import Header from './components/header.js';
import Footer from './components/footer.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <Body></Body>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
