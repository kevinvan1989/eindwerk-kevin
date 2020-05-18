import React, { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import moment from "moment";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Landing from "./components/Landing";
import "./styles/reset.css";
import "./styles/screen.css";
import Overview from "./components/Overview";
import Login from "./components/Login";
import { API } from "./libs/API";

class App extends Component {
  componentDidMount(){
    API.get('api/posts')
    .then(response => {
        console.log(response)
      })
  }

  render() {
    return (
      <div>
        <Header />
        <Router>
          <Link to="/" />

          <Switch>
            <Route path="/" exact>
              <Landing />
            </Route>
            <Route path="/overview">
              <Overview />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
          </Switch>
        
        <Footer currentYear={moment().format("YYYY")} />
        </Router>
      </div>
    );
  }
}

export default App;
