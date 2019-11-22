import React from "react";
import { Switch, Route } from "react-router-dom";
import "./assets/scss/styles.scss";

import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import LoginRegisterPage from "./pages/LoginRegisterPage";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/login" component={LoginRegisterPage} />
      </Switch>
    </div>
  );
}

export default App;
