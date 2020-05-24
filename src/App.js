import React, { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Postdetail from "./components/Postdetail";
import moment from "moment";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Landing from "./components/Landing";
import "./styles/reset.css";
import "./styles/screen.css";
import Overview from "./components/Overview";
import Login from "./components/Login";
import { API } from "./libs/API";

class App extends Component {
  componentDidMount() {
    API.get("api/posts").then((response) => {
      console.log(response);
    });
  }

  render() {
    return (
      <div>
        <Header />
        <Router>
          <Link to="/" />

          <Switch>
            <Route path="/" component={Landing} exact />
            <Route path="/overview" component={Overview} />
            <Route path="/login" component={Login} />
            {/* Route for details */}
            <Route path="/postdetail/:id" component={Postdetail} />
          </Switch>

          <Footer currentYear={moment().format("YYYY")} />
        </Router>
      </div>
    );
  }
}

export default App;
