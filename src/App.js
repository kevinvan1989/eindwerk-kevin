import React, { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import moment from "moment";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Landing from "./components/Landing";
import './styles/screen.css'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Landing />
        <Footer currentYear={moment().format("YYYY")} />
      </div>
    );
  }
}

export default App;
