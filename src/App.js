import React, { useState, useEffect } from "react";
import "./styles/App.scss";
import Header from "./components/Header";
import Home from "./pages/HomePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Header />
      <div className="canister">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/opportunities" component={Opportunities} />
          <Route exact path="/solutions" component={Solutions} />
          <Route exact path="/contact-us" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
};

function Opportunities() {
  return <p>Discover our numerous opportunities</p>;
}

function Solutions() {
  return <p>Solutions that help you.</p>;
}

function Contact() {
  return <p>Feel free to reach us.</p>;
}

export default App;
