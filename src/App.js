import React from "react";

import "./styles/App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Home from "./pages/HomePage";
import Hardware from "./pages/Hardware";
import Software from "./pages/Software";
import Services from "./pages/Services";
import Consulting from "./pages/Consulting";
import Networking from "./pages/Networking";
import Consumables from "./pages/Consumables";
import PointOfSales from "./pages/PointOfSales";
import Contacts from "./pages/Contacts";
import PageNotFound from "./pages/PageNotFound";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Header />
      <div className="canister">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/hardware" component={Hardware} />
          <Route exact path="/software" component={Software} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/consulting" component={Consulting} />
          <Route exact path="/networking" component={Networking} />
          <Route exact path="/consumables" component={Consumables} />
          <Route exact path="/pos" component={PointOfSales} />
          <Route exact path="/contacts" component={Contacts} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
