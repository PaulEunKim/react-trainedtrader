import React, { Component } from 'react';
import './App.css';
import Body from './components/body.js';
import Header from './components/header.js';
import Footer from './components/footer.js';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class App extends Component {
  render() {
    return (
      <>
        <Header></Header>
        <Router>
          <div>
            <ul>
              <li>
                <Link to="/about">이런 문구들이 익숙하신가요?</Link>
              </li>
              <li>
                <Link to="/topics">첫번재 - STOP LOSS 세팅 방법</Link>
              </li>
            </ul>

            <hr />

            <Route exact path="/" component={Body} />
            <Route path="/about" component={Header} />
            <Route path="/topics" component={Footer} />
          </div>
        </Router>
        <Footer>
        </Footer>
      </>
    );
  }
}

export default App;
