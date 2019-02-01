import React, { Component } from 'react';
import './App.css';
import Header from './components/header.js';
import Body from './components/body.js';
import Footer from './components/footer.js';


class App extends Component {
  render() {
    return (
      <>
        <Header></Header>
        <Body></Body>
        <Footer>
        </Footer>
      </>
    );
  }
}

export default App;
