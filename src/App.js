import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./assets/scss/styles.scss";

import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import LoginRegisterPage from "./pages/LoginRegisterPage";
import Header from "./components/Header";

import { auth } from "./firebase/firebase.utils";

class App extends Component {
  state = { currentUser: null };

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/login" component={LoginRegisterPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
