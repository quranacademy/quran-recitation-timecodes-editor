import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";
import Main from "./components/pages/Main";
import About from "./components/pages/About";
import Blog from "./components/partials/blog/Page";
import LoginForm from "./components/auth/LoginForm";
import RegisterForm from "./components/auth/RegisterForm";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/about" component={About} />
            <Route path="/blog" component={Blog} />
            <Route path="/login" component={LoginForm} />
            <Route path="/register" component={RegisterForm} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
