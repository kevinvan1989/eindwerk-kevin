import React, { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Postdetail from "./Pages/Postdetail";
import moment from "moment";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./styles/reset.css";
import "./styles/screen.scss";
import Overview from "./Pages/Overview";
import Landing from "./Pages/Landing";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import CreatePost from "./components/CreatePost";
import { API } from "./libs/API";
import ProfilePage from "./Pages/ProfilePage";

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
            <Route path="/register" component={Register} />
            <Route path="/create-post" component={CreatePost} />
            {/* Route for details */}
            <Route path="/postdetail/:id" component={Postdetail} />
            <Route path="/profile-page/:id" component={ProfilePage} />
          </Switch>

          <Footer currentYear={moment().format("YYYY")} />
        </Router>
      </div>
    );
  }
}

export default App;
